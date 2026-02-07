#!/usr/bin/env bash
# Refreshes the Amazon Ads MCP access token using the long-lived refresh token.
# Called automatically by Claude Code SessionStart hook.
#
# Reads credentials from .env, calls Amazon OAuth, updates .mcp.json.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
ENV_FILE="$PROJECT_DIR/.env"
MCP_FILE="$PROJECT_DIR/.mcp.json"

# Load credentials from .env
if [[ ! -f "$ENV_FILE" ]]; then
  echo "ERROR: $ENV_FILE not found" >&2
  exit 1
fi

AMAZON_ADS_CLIENT_ID=""
AMAZON_ADS_CLIENT_SECRET=""
AMAZON_ADS_REFRESH_TOKEN=""

while IFS='=' read -r key value; do
  # Skip empty lines and comments
  [[ -z "$key" || "$key" =~ ^# ]] && continue
  case "$key" in
    AMAZON_ADS_CLIENT_ID) AMAZON_ADS_CLIENT_ID="$value" ;;
    AMAZON_ADS_CLIENT_SECRET) AMAZON_ADS_CLIENT_SECRET="$value" ;;
    AMAZON_ADS_REFRESH_TOKEN) AMAZON_ADS_REFRESH_TOKEN="$value" ;;
  esac
done < "$ENV_FILE"

if [[ -z "$AMAZON_ADS_CLIENT_ID" || -z "$AMAZON_ADS_CLIENT_SECRET" || -z "$AMAZON_ADS_REFRESH_TOKEN" ]]; then
  echo "ERROR: Missing required credentials in $ENV_FILE" >&2
  exit 1
fi

# Request new access token
RESPONSE=$(curl -s -X POST "https://api.amazon.com/auth/o2/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=refresh_token" \
  -d "refresh_token=$AMAZON_ADS_REFRESH_TOKEN" \
  -d "client_id=$AMAZON_ADS_CLIENT_ID" \
  -d "client_secret=$AMAZON_ADS_CLIENT_SECRET")

# Extract access token from JSON response
ACCESS_TOKEN=$(echo "$RESPONSE" | python3 -c "import sys,json; print(json.load(sys.stdin)['access_token'])" 2>/dev/null)

if [[ -z "$ACCESS_TOKEN" || "$ACCESS_TOKEN" == "null" ]]; then
  echo "ERROR: Failed to get access token. Response: $RESPONSE" >&2
  exit 1
fi

# Update .mcp.json with new token
python3 -c "
import json, sys

mcp_path = '$MCP_FILE'
token = '$ACCESS_TOKEN'

with open(mcp_path, 'r') as f:
    config = json.load(f)

config['mcpServers']['amzn-ads-mcp']['headers']['Authorization'] = f'Bearer {token}'

with open(mcp_path, 'w') as f:
    json.dump(config, f, indent=2)
    f.write('\n')
"

echo "Amazon Ads MCP token refreshed successfully."
