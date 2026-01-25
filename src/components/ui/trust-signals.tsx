// =============================================================================
// Trust Signal Components for E-commerce Conversion
// =============================================================================
// These components leverage proven e-commerce conversion patterns:
// - Social proof (reviews, ratings, purchase counts)
// - Risk reversal (guarantees, easy returns)
// - Urgency (bestseller badges, limited availability)
// - Authority (Prime shipping, verified badges)
// =============================================================================

import React from 'react';
import { cn } from '@/lib/utils';

// =============================================================================
// Amazon Review Summary
// =============================================================================
// Displays star rating + review count pulled from Amazon
// Usage: <ReviewSummary rating={4.8} reviewCount={847} />

interface ReviewSummaryProps {
  rating: number;
  reviewCount: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  className?: string;
}

export function ReviewSummary({
  rating,
  reviewCount,
  size = 'md',
  showCount = true,
  className
}: ReviewSummaryProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const sizeClasses = {
    sm: 'text-xs gap-1',
    md: 'text-sm gap-1.5',
    lg: 'text-base gap-2'
  };

  const starSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <div className={cn('inline-flex items-center', sizeClasses[size], className)}>
      <div className="flex items-center" aria-label={`${rating} out of 5 stars`}>
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <svg key={`full-${i}`} className={cn(starSizes[size], 'text-[#FFA41C]')} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {/* Half star */}
        {hasHalfStar && (
          <svg className={cn(starSizes[size], 'text-[#FFA41C]')} viewBox="0 0 20 20">
            <defs>
              <linearGradient id="halfGradient">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#E5E7EB" />
              </linearGradient>
            </defs>
            <path fill="url(#halfGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <svg key={`empty-${i}`} className={cn(starSizes[size], 'text-gray-300')} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {showCount && (
        <span className="text-dark/60">
          {rating.toFixed(1)} ({reviewCount.toLocaleString()} reviews)
        </span>
      )}
    </div>
  );
}

// =============================================================================
// Bestseller Badge
// =============================================================================
// Visual indicator for top-selling products
// Usage: <BestsellerBadge rank={15} category="Children's Books" />

interface BestsellerBadgeProps {
  rank?: number;
  category?: string;
  variant?: 'default' | 'compact';
  className?: string;
}

export function BestsellerBadge({
  rank,
  category = "Children's Books",
  variant = 'default',
  className
}: BestsellerBadgeProps) {
  if (variant === 'compact') {
    return (
      <span className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 bg-[#FF9900]/10 text-[#B8860B] text-xs font-semibold rounded-full',
        className
      )}>
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Bestseller
      </span>
    );
  }

  return (
    <div className={cn(
      'inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#FF9900]/10 to-[#FFA41C]/10 border border-[#FF9900]/20 rounded-lg',
      className
    )}>
      <svg className="w-4 h-4 text-[#FF9900]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <div className="text-sm">
        <span className="font-bold text-[#B8860B]">
          {rank ? `#${rank} Bestseller` : 'Bestseller'}
        </span>
        {category && (
          <span className="text-dark/50 ml-1">in {category}</span>
        )}
      </div>
    </div>
  );
}

// =============================================================================
// Prime Shipping Badge
// =============================================================================
// Amazon Prime delivery trust signal
// Usage: <PrimeShipping />

interface PrimeShippingProps {
  className?: string;
  variant?: 'inline' | 'badge';
}

export function PrimeShipping({ className, variant = 'inline' }: PrimeShippingProps) {
  if (variant === 'badge') {
    return (
      <div className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 bg-[#232F3E] text-white rounded-md text-sm',
        className
      )}>
        <svg className="w-4 h-4" viewBox="0 0 68 20" fill="currentColor">
          <path d="M44.4 9.4c0 .3-.1.5-.2.8l-2.3 5.5c-.1.3-.4.5-.7.5s-.6-.2-.7-.5l-2.3-5.5c-.1-.2-.2-.5-.2-.8 0-.6.5-1.1 1.1-1.1.4 0 .8.3 1 .7l1.1 2.8 1.1-2.8c.2-.4.5-.7 1-.7.6 0 1.1.5 1.1 1.1zm-7.5 5.1c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1V9.4c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1v5.1zm-4.3 0c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1V9.4c0-.6.5-1.1 1.1-1.1.4 0 .7.2.9.5l2.3 3.2V9.4c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1v5.1c0 .6-.5 1.1-1.1 1.1-.4 0-.7-.2-.9-.5l-2.3-3.2v2.7zm-5.4-6.2c-.6 0-1.1.5-1.1 1.1v1.1h2.2V9.4c0-.6-.5-1.1-1.1-1.1zm0 6.2c-.6 0-1.1.5-1.1 1.1v1.1h2.2v-1.1c0-.6-.5-1.1-1.1-1.1z"/>
        </svg>
        <span className="font-medium">FREE 2-Day Delivery</span>
      </div>
    );
  }

  return (
    <span className={cn('inline-flex items-center gap-1.5 text-sm text-dark/70', className)}>
      <svg className="w-4 h-4 text-[#232F3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span>FREE Prime delivery</span>
    </span>
  );
}

// =============================================================================
// Guarantee Badge
// =============================================================================
// Risk reversal messaging
// Usage: <GuaranteeBadge />

interface GuaranteeBadgeProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export function GuaranteeBadge({ className, variant = 'compact' }: GuaranteeBadgeProps) {
  if (variant === 'full') {
    return (
      <div className={cn(
        'flex items-start gap-3 p-4 bg-green-50 border border-green-100 rounded-xl',
        className
      )}>
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-green-800">30-Day Money-Back Guarantee</p>
          <p className="text-sm text-green-700">Amazon's hassle-free return policy. No questions asked.</p>
        </div>
      </div>
    );
  }

  return (
    <span className={cn('inline-flex items-center gap-1.5 text-sm text-green-700', className)}>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      <span>30-day easy returns</span>
    </span>
  );
}

// =============================================================================
// Social Proof Counter
// =============================================================================
// Shows purchase/download counts
// Usage: <SocialProofCounter count={12500} label="families" />

interface SocialProofCounterProps {
  count: number;
  label: string;
  className?: string;
}

export function SocialProofCounter({ count, label, className }: SocialProofCounterProps) {
  const formatCount = (n: number) => {
    if (n >= 1000) {
      return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k+`;
    }
    return `${n}+`;
  };

  return (
    <div className={cn('inline-flex items-center gap-2 text-sm text-dark/70', className)}>
      <div className="flex -space-x-2">
        {/* Placeholder avatars representing buyers */}
        <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-white" />
        <div className="w-6 h-6 rounded-full bg-secondary/30 border-2 border-white" />
        <div className="w-6 h-6 rounded-full bg-primary/30 border-2 border-white" />
      </div>
      <span>
        <span className="font-semibold text-dark">{formatCount(count)}</span> {label}
      </span>
    </div>
  );
}

// =============================================================================
// Trust Stack
// =============================================================================
// Combines multiple trust signals in a vertical stack
// Usage: <TrustStack rating={4.8} reviewCount={847} showGuarantee showPrime />

interface TrustStackProps {
  rating?: number;
  reviewCount?: number;
  showBestseller?: boolean;
  bestsellerRank?: number;
  showGuarantee?: boolean;
  showPrime?: boolean;
  socialProofCount?: number;
  className?: string;
}

export function TrustStack({
  rating,
  reviewCount,
  showBestseller = false,
  bestsellerRank,
  showGuarantee = false,
  showPrime = false,
  socialProofCount,
  className
}: TrustStackProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {rating && reviewCount && (
        <ReviewSummary rating={rating} reviewCount={reviewCount} />
      )}
      {showBestseller && (
        <BestsellerBadge rank={bestsellerRank} variant="compact" />
      )}
      <div className="flex flex-wrap items-center gap-3">
        {showPrime && <PrimeShipping />}
        {showGuarantee && <GuaranteeBadge />}
      </div>
      {socialProofCount && (
        <SocialProofCounter count={socialProofCount} label="happy families" />
      )}
    </div>
  );
}
