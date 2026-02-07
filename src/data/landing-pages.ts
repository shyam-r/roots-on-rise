/**
 * Landing page data for keyword-targeted SEO pages.
 *
 * SINGLE SOURCE OF TRUTH for all auto-generated landing pages.
 * Each entry produces one static page via src/pages/[...slug].astro.
 *
 * To add a new page: add an entry to LANDING_PAGES array below.
 * The build will automatically generate the route, sitemap entry, and structured data.
 */

import type { FAQItem } from './products';

// =============================================================================
// Types
// =============================================================================

export type LandingPageCategory = 'deity' | 'festival' | 'topic';

export interface LandingPage {
  slug: string;
  category: LandingPageCategory;
  /** SEO title — appears in <title> and og:title */
  title: string;
  /** Meta description — appears in search results */
  description: string;
  /** H1 heading — lowercase aesthetic with highlighted word */
  heading: string;
  /** Word(s) in heading to highlight with text-primary */
  headingHighlight: string;
  /** Subheading below the H1 */
  subheading: string;
  /** Hero image path (relative to /public) */
  heroImage?: string;
  /** Educational content sections */
  content: ContentSection[];
  /** Which book series to feature: 'both', 'deities', or 'shloka' */
  featuredBooks: 'both' | 'deities' | 'shloka';
  /** FAQ items for this page (generates FAQPage schema) */
  faq: FAQItem[];
  /** Open Graph image override (defaults to hero image) */
  ogImage?: string;
  /** Additional keywords for internal linking */
  relatedSlugs?: string[];
}

export interface ContentSection {
  heading: string;
  body: string;
  /** Optional image to accompany this section */
  image?: string;
}

// =============================================================================
// Deity Pages
// =============================================================================

const DEITY_PAGES: LandingPage[] = [
  {
    slug: 'ganesha-book-for-kids',
    category: 'deity',
    title: 'Ganesha Book for Kids - Lord Ganesha Story for Children | Roots On Rise',
    description: 'Introduce your child to Lord Ganesha with beautifully illustrated books. Learn about the elephant-headed god of wisdom, new beginnings, and remover of obstacles. Ages 2-8.',
    heading: 'discover lord ganesha',
    headingHighlight: 'ganesha',
    subheading: 'The beloved elephant-headed god who removes obstacles and blesses new beginnings — brought to life for young readers.',
    heroImage: '/images/deities/optimized/ganesha.webp',
    content: [
      {
        heading: 'Who Is Lord Ganesha?',
        body: `Lord Ganesha is one of the most beloved Hindu deities, easily recognized by his elephant head and round belly. Known as the Remover of Obstacles (Vighnaharta), Ganesha is worshipped at the start of every new venture — from a child's first day of school to a family moving into a new home.

Children are naturally drawn to Ganesha because of his unique appearance and gentle nature. He is the son of Lord Shiva and Goddess Parvati, and his stories teach important values like wisdom, humility, and devotion to family.`,
      },
      {
        heading: 'Why Children Love Ganesha',
        body: `Ganesha's stories are among the most engaging in Hindu mythology for young readers. The story of how he got his elephant head, his playful competition with his brother Kartikeya to race around the world, and his love for modak (sweet dumplings) make him relatable and endearing to children.

In "The Marvelous Hindu Deities," Ganesha is presented with vibrant, colorful illustrations that capture his warmth and wisdom. The simple language helps even toddlers connect with this important deity.`,
      },
      {
        heading: 'Teaching Ganesha to Children',
        body: `Ganesha is the perfect starting point for introducing Hindu mythology to kids. His stories carry universal messages:

• **Wisdom over strength** — Ganesha won the race around the world by circling his parents, showing that cleverness matters more than speed.
• **Respect for parents** — His devotion to Shiva and Parvati models family values.
• **New beginnings** — Praying to Ganesha before starting something new teaches children to approach life with intention.
• **Overcoming obstacles** — As Vighnaharta, Ganesha teaches that challenges can be overcome with patience and faith.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'What is a good Ganesha book for toddlers?',
        answer: 'The Marvelous Hindu Deities board book is perfect for toddlers ages 2-5. It features Lord Ganesha with vibrant illustrations on thick, durable pages designed for little hands. The simple text introduces Ganesha as the remover of obstacles in an age-appropriate way.',
      },
      {
        question: 'How do I explain Ganesha to my child?',
        answer: 'Start with the basics: Ganesha has an elephant head, loves sweets called modak, and helps people overcome problems. Our books use simple language and colorful pictures to make these concepts accessible. Children respond well to Ganesha because his unique appearance sparks curiosity.',
      },
      {
        question: 'Why is Ganesha worshipped first?',
        answer: 'In Hindu tradition, Ganesha is always worshipped before any other deity because he is the Remover of Obstacles (Vighnaharta). This means any new prayer, ceremony, or important beginning starts with honoring Ganesha to ensure a smooth path ahead.',
      },
    ],
    relatedSlugs: ['krishna-book-for-kids', 'shiva-book-for-kids', 'diwali-gifts-for-kids'],
  },
  {
    slug: 'krishna-book-for-kids',
    category: 'deity',
    title: 'Krishna Book for Kids - Lord Krishna Stories for Children | Roots On Rise',
    description: 'Discover Lord Krishna through beautifully illustrated children\'s books. Stories of the playful blue god, butter thief, and divine flute player. Perfect for ages 2-8.',
    heading: 'discover lord krishna',
    headingHighlight: 'krishna',
    subheading: 'The playful blue god who enchants with his flute and teaches the world about love, joy, and dharma.',
    heroImage: '/images/deities/optimized/krishna.webp',
    content: [
      {
        heading: 'Who Is Lord Krishna?',
        body: `Lord Krishna is one of the most beloved figures in Hindu mythology — the blue-skinned, flute-playing deity who is both playful child and wise teacher. An avatar of Lord Vishnu, Krishna's life story spans from mischievous childhood in Vrindavan to delivering the sacred Bhagavad Gita on the battlefield of Kurukshetra.

For children, Krishna's early years are especially captivating: stealing butter from his mother Yashoda's kitchen, playing with his friends the Gopas, and dancing with the Gopis under moonlit skies.`,
      },
      {
        heading: 'Why Children Love Krishna',
        body: `Krishna is the most child-friendly deity in Hindu mythology. His childhood adventures — stealing butter (Makhan Chor), lifting Govardhan Hill to protect villagers, and taming the serpent Kaliya — are exciting stories that naturally engage young readers.

In "The Marvelous Hindu Deities," Krishna is presented with his iconic flute and peacock feather, in illustrations that capture both his playfulness and divine nature. Children see a figure who is simultaneously relatable (a naughty child) and awe-inspiring (a god).`,
      },
      {
        heading: 'Krishna\'s Lessons for Young Minds',
        body: `Krishna's stories carry timeless wisdom for children:

• **Joy and playfulness** — Krishna shows that life is meant to be celebrated and enjoyed.
• **Courage** — From fighting demons as a child to protecting his village, Krishna models bravery.
• **Friendship** — His bond with Sudama teaches the value of true, selfless friendship.
• **Dharma (right action)** — Even in play, Krishna upholds what is right, teaching children to stand for truth.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'What is a good Krishna book for toddlers?',
        answer: 'The Marvelous Hindu Deities board book features Lord Krishna with vibrant illustrations perfect for toddlers ages 2-5. The thick, durable pages are designed for little hands, and the simple descriptions introduce Krishna\'s key attributes in an age-appropriate way.',
      },
      {
        question: 'What Krishna stories are best for young children?',
        answer: 'Start with his childhood stories: baby Krishna stealing butter (Makhan Chor), Krishna and the fruit seller, and Krishna lifting Govardhan Hill. These stories are action-packed, fun, and teach positive values. Our books present these in simplified, beautifully illustrated formats.',
      },
      {
        question: 'Why is Krishna depicted as blue?',
        answer: 'Krishna\'s blue skin represents the infinite sky and ocean — vast, deep, and all-encompassing, symbolizing his divine nature. The color also represents calm, peace, and the boundless nature of the divine. Children find his blue color distinctive and memorable.',
      },
    ],
    relatedSlugs: ['ganesha-book-for-kids', 'vishnu-book-for-kids', 'janmashtami-activities-for-kids'],
  },
  {
    slug: 'lakshmi-book-for-kids',
    category: 'deity',
    title: 'Lakshmi Book for Kids - Goddess Lakshmi for Children | Roots On Rise',
    description: 'Introduce your child to Goddess Lakshmi, the Hindu goddess of wealth, fortune, and prosperity. Beautifully illustrated books for ages 2-8.',
    heading: 'discover goddess lakshmi',
    headingHighlight: 'lakshmi',
    subheading: 'The radiant goddess of wealth, fortune, and prosperity who brings abundance and blessings to every home.',
    heroImage: '/images/deities/optimized/lakshmi.webp',
    content: [
      {
        heading: 'Who Is Goddess Lakshmi?',
        body: `Goddess Lakshmi is the Hindu goddess of wealth, fortune, prosperity, and beauty. She is the consort of Lord Vishnu and is worshipped in almost every Hindu household, especially during Diwali when families invite her blessings for the year ahead.

Lakshmi is depicted standing or sitting on a lotus flower, wearing red or gold garments, with gold coins flowing from her hands — symbolizing material and spiritual abundance. She has four hands representing the four aims of human life: dharma (righteousness), artha (wealth), kama (desire), and moksha (liberation).`,
      },
      {
        heading: 'Why Children Love Lakshmi',
        body: `Children connect with Goddess Lakshmi through the vibrant Diwali celebrations, where her presence is central. The imagery of a beautiful goddess standing on a lotus, showering blessings, is both visually captivating and emotionally comforting for young readers.

In "The Marvelous Hindu Deities," Lakshmi is portrayed with warm, glowing illustrations that highlight her grace and generosity. Children learn that true wealth includes kindness, knowledge, and good character — not just money.`,
      },
      {
        heading: 'Lakshmi\'s Lessons for Children',
        body: `Lakshmi's stories teach values that resonate with children:

• **Generosity** — Lakshmi is always giving, teaching children that sharing brings more abundance.
• **Hard work** — Lakshmi favors those who work diligently, not those who are lazy.
• **Cleanliness and order** — Tradition says Lakshmi visits clean, well-kept homes, encouraging good habits.
• **Inner beauty** — While beautiful outside, Lakshmi's true radiance comes from her virtues, teaching children that character matters most.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'How do I teach my child about Goddess Lakshmi?',
        answer: 'Start with Diwali — explain that the festival celebrates Lakshmi\'s blessings of prosperity and light. Our books introduce Lakshmi with vibrant illustrations and simple descriptions perfect for ages 2-8. You can also involve children in Diwali preparations as a way to connect with Lakshmi\'s values of cleanliness and generosity.',
      },
      {
        question: 'Why is Lakshmi important during Diwali?',
        answer: 'Diwali is celebrated as the night Lakshmi visits homes, bringing blessings of wealth and prosperity. Families light diyas (oil lamps) and clean their homes to welcome her. Teaching children about Lakshmi during Diwali makes the cultural connection tangible and exciting.',
      },
    ],
    relatedSlugs: ['diwali-gifts-for-kids', 'saraswati-book-for-kids', 'durga-book-for-kids'],
  },
  {
    slug: 'hanuman-book-for-kids',
    category: 'deity',
    title: 'Hanuman Book for Kids - Lord Hanuman Stories for Children | Roots On Rise',
    description: 'Introduce your child to Lord Hanuman, the mighty monkey god of strength, courage, and devotion. Beautifully illustrated children\'s books for ages 2-8.',
    heading: 'discover lord hanuman',
    headingHighlight: 'hanuman',
    subheading: 'The mighty monkey god whose extraordinary strength and unwavering devotion inspire courage in children everywhere.',
    heroImage: '/images/deities/optimized/hanuman.webp',
    content: [
      {
        heading: 'Who Is Lord Hanuman?',
        body: `Lord Hanuman is the mighty monkey god, celebrated for his extraordinary strength, unwavering devotion to Lord Rama, and selfless courage. He is one of the central figures in the Ramayana, where he plays a crucial role in rescuing Sita from the demon king Ravana.

Hanuman is the son of Vayu (the wind god), which explains his ability to fly and his incredible physical power. Despite his immense strength, Hanuman is the ultimate symbol of humility and devotion — he uses all his powers in service of Lord Rama.`,
      },
      {
        heading: 'Why Children Love Hanuman',
        body: `Hanuman is a natural superhero for children. His stories are action-packed adventures: leaping across the ocean to Lanka, carrying an entire mountain to save Lakshmana, and growing to enormous size to fight demons. These are stories children ask to hear again and again.

In "The Marvelous Hindu Deities," Hanuman is illustrated with dynamic energy that captures his strength and devotion. Children see a hero who is powerful yet humble — a rare and important combination.`,
      },
      {
        heading: 'Hanuman\'s Lessons for Young Minds',
        body: `Hanuman's stories carry powerful messages for children:

• **Devotion and loyalty** — Hanuman's love for Lord Rama shows that true strength comes from devotion.
• **Courage in adversity** — When faced with impossible tasks, Hanuman never gives up.
• **Humility** — Despite being the strongest, Hanuman is the most humble, teaching that power should serve others.
• **Hidden potential** — Hanuman forgot his own powers until reminded, teaching children that they have more strength inside them than they know.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'What is a good Hanuman book for kids?',
        answer: 'The Marvelous Hindu Deities board book features Lord Hanuman with dynamic, vibrant illustrations perfect for ages 2-5. For deeper engagement, pair it with the Shloka book which includes the Hanuman Chalisa and other devotional mantras children can learn to chant.',
      },
      {
        question: 'Why do children love Hanuman stories?',
        answer: 'Hanuman is Hindu mythology\'s original superhero — he can fly, grow to enormous size, carry mountains, and fight demons. But unlike typical superheroes, Hanuman\'s power comes from devotion and humility. Children are drawn to his action-packed adventures while absorbing deeper values.',
      },
    ],
    relatedSlugs: ['rama-book-for-kids', 'shiva-book-for-kids', 'hindu-mythology-for-kids'],
  },
  {
    slug: 'shiva-book-for-kids',
    category: 'deity',
    title: 'Shiva Book for Kids - Lord Shiva Stories for Children | Roots On Rise',
    description: 'Introduce your child to Lord Shiva, the cosmic dancer and destroyer of evil. Beautifully illustrated Hindu mythology books for ages 2-8.',
    heading: 'discover lord shiva',
    headingHighlight: 'shiva',
    subheading: 'The powerful cosmic dancer who destroys evil and transforms the universe — presented for young minds.',
    heroImage: '/images/deities/optimized/shiva.webp',
    content: [
      {
        heading: 'Who Is Lord Shiva?',
        body: `Lord Shiva is one of the principal deities in Hinduism, known as the Destroyer and Transformer within the Hindu Trinity (Trimurti) alongside Brahma the Creator and Vishnu the Preserver. But Shiva's role as "destroyer" means he destroys evil, ignorance, and ego — making way for positive transformation and new creation.

Shiva is depicted with a third eye on his forehead, a crescent moon in his matted hair, the sacred river Ganga flowing from his locks, a snake (Vasuki) around his neck, and a trident (Trishul) in his hand. Each of these symbols carries deep meaning that fascinates children.`,
      },
      {
        heading: 'Why Children Are Fascinated by Shiva',
        body: `Shiva's striking appearance — the third eye, blue throat, snake necklace, and cosmic dance — makes him visually captivating for young readers. His stories range from meditative calm atop Mount Kailash to the dynamic energy of the Tandava dance that creates and destroys the universe.

In "The Marvelous Hindu Deities," Shiva is presented with illustrations that balance his power with his gentleness as a father to Ganesha and Kartikeya, and as a loving husband to Parvati.`,
      },
      {
        heading: 'Shiva\'s Lessons for Children',
        body: `Shiva's stories teach profound yet accessible lessons:

• **Inner peace** — Shiva meditates in the Himalayas, teaching that quiet reflection brings strength.
• **Transformation** — Shiva shows that endings make way for new beginnings.
• **Family** — As father of Ganesha and Kartikeya, Shiva models loving parenthood.
• **Courage against evil** — Shiva's destruction of demons teaches that standing against wrong is noble.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'How do I explain Shiva to young children?',
        answer: 'Explain Shiva as the most powerful god who protects the universe. He meditates peacefully in the mountains but dances powerfully when the world needs help. Our books use simple language and vibrant illustrations to make Shiva approachable for children ages 2-8.',
      },
      {
        question: 'Why does Shiva have a third eye?',
        answer: 'Shiva\'s third eye represents inner wisdom and the ability to see beyond what is visible. When opened, it can destroy evil. Children find this fascinating and it opens conversations about looking beneath the surface and making wise choices.',
      },
    ],
    relatedSlugs: ['ganesha-book-for-kids', 'parvati-book-for-kids', 'vishnu-book-for-kids'],
  },
  {
    slug: 'saraswati-book-for-kids',
    category: 'deity',
    title: 'Saraswati Book for Kids - Goddess Saraswati for Children | Roots On Rise',
    description: 'Introduce your child to Goddess Saraswati, the Hindu goddess of knowledge, music, and learning. Illustrated books for ages 2-8.',
    heading: 'discover goddess saraswati',
    headingHighlight: 'saraswati',
    subheading: 'The serene goddess of knowledge, music, and the arts who inspires a love of learning in every child.',
    heroImage: '/images/deities/optimized/saraswati.webp',
    content: [
      {
        heading: 'Who Is Goddess Saraswati?',
        body: `Goddess Saraswati is the Hindu goddess of knowledge, music, arts, and learning. She is depicted wearing white (symbolizing purity of knowledge), sitting on a white lotus, playing the veena (a stringed instrument), and holding sacred texts. Her four hands represent mind (manas), intellect (buddhi), alertness (chitta), and ego (ahamkara).

Saraswati is the consort of Lord Brahma, the Creator, and her name comes from the ancient Saraswati River, symbolizing the flow of knowledge and wisdom.`,
      },
      {
        heading: 'Why Children Connect with Saraswati',
        body: `Saraswati directly relates to children's daily lives — she is the goddess of education, creativity, and music. Students pray to Saraswati before exams, musicians before performances, and artists before creating. This makes her immediately relevant and relatable.

In "The Marvelous Hindu Deities," Saraswati is illustrated with her iconic veena and books, connecting learning to divine blessing. Children see that knowledge and creativity are sacred and valued.`,
      },
      {
        heading: 'Saraswati\'s Lessons for Young Learners',
        body: `Saraswati's presence in Hindu tradition teaches children:

• **Love of learning** — Saraswati shows that education and knowledge are divine gifts to be cherished.
• **Creativity** — As goddess of arts and music, she encourages children to express themselves creatively.
• **Purity of intention** — Her white attire symbolizes approaching learning with a pure, open mind.
• **Discipline** — Mastering the veena requires practice, teaching that great skills come from dedication.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'When do Hindus celebrate Saraswati?',
        answer: 'Vasant Panchami (usually in January-February) is Saraswati\'s special day. Children place their books and instruments near Saraswati\'s image for her blessings. It\'s a wonderful day to introduce the goddess to children starting school or learning music.',
      },
      {
        question: 'How do I teach my child about Saraswati?',
        answer: 'Connect Saraswati to your child\'s love of learning — explain that this beautiful goddess blesses students, musicians, and artists. Our books introduce Saraswati with gentle illustrations and simple language perfect for young children.',
      },
    ],
    relatedSlugs: ['lakshmi-book-for-kids', 'durga-book-for-kids', 'hindu-mythology-for-kids'],
  },
  {
    slug: 'vishnu-book-for-kids',
    category: 'deity',
    title: 'Vishnu Book for Kids - Lord Vishnu Stories for Children | Roots On Rise',
    description: 'Introduce your child to Lord Vishnu, the preserver of the universe and his ten avatars. Illustrated Hindu mythology books for ages 2-8.',
    heading: 'discover lord vishnu',
    headingHighlight: 'vishnu',
    subheading: 'The great preserver who protects the universe and descends in many forms to restore balance and dharma.',
    heroImage: '/images/deities/optimized/vishnu.webp',
    content: [
      {
        heading: 'Who Is Lord Vishnu?',
        body: `Lord Vishnu is the Preserver in the Hindu Trinity (Trimurti), responsible for maintaining the balance and order of the universe. While Brahma creates and Shiva transforms, Vishnu ensures that everything runs in harmony. He rests on the cosmic serpent Shesha, floating on the ocean of creation.

Vishnu is depicted with four arms holding a conch (Shankha), discus (Sudarshana Chakra), mace (Gada), and lotus. His skin is blue, representing the infinite cosmos. He is perhaps most famous for his Dashavatara — ten incarnations including Rama and Krishna — who appear whenever the world needs saving.`,
      },
      {
        heading: 'Why Children Are Drawn to Vishnu',
        body: `Vishnu's ten avatars give children an entire universe of stories to explore. From Matsya (the fish) saving the world from a flood to Narasimha (half-lion, half-man) protecting his devotee Prahlada, each avatar is a complete adventure story.

In "The Marvelous Hindu Deities," Vishnu is presented in his cosmic form, giving children a sense of his vast, protective presence. The illustrations emphasize his role as the guardian who watches over everyone.`,
      },
      {
        heading: 'Vishnu\'s Lessons for Children',
        body: `Vishnu's stories teach important values:

• **Protection** — Vishnu always comes to protect those in need, teaching children to look out for others.
• **Balance** — As the Preserver, Vishnu shows that maintaining harmony is as important as creating or changing.
• **Compassion** — Each avatar appears out of love for the world, modeling selfless action.
• **Adaptability** — Vishnu takes different forms for different challenges, teaching that flexibility is strength.`,
      },
    ],
    featuredBooks: 'deities',
    faq: [
      {
        question: 'What are Vishnu\'s ten avatars?',
        answer: 'Vishnu\'s ten avatars (Dashavatara) are: Matsya (fish), Kurma (tortoise), Varaha (boar), Narasimha (man-lion), Vamana (dwarf), Parashurama (warrior), Rama (prince), Krishna (divine cowherd), Buddha, and Kalki (future avatar). Our books introduce Vishnu with his iconic four-armed form.',
      },
      {
        question: 'How is Vishnu different from Krishna and Rama?',
        answer: 'Krishna and Rama are actually avatars (incarnations) of Vishnu. When the world faces great danger, Vishnu descends in a specific form to restore order. Rama came to defeat the demon king Ravana, and Krishna came to guide humanity through the Bhagavad Gita.',
      },
    ],
    relatedSlugs: ['krishna-book-for-kids', 'rama-book-for-kids', 'shiva-book-for-kids'],
  },
  {
    slug: 'durga-book-for-kids',
    category: 'deity',
    title: 'Durga Book for Kids - Goddess Durga for Children | Roots On Rise',
    description: 'Introduce your child to Goddess Durga, the fierce warrior goddess who destroys evil. Illustrated Hindu mythology books for ages 2-8.',
    heading: 'discover goddess durga',
    headingHighlight: 'durga',
    subheading: 'The fierce warrior goddess who rides a lion and vanquishes evil — a symbol of feminine power and protection.',
    heroImage: '/images/deities/optimized/durga.webp',
    content: [
      {
        heading: 'Who Is Goddess Durga?',
        body: `Goddess Durga is the fierce warrior form of the Divine Mother (Shakti) in Hinduism. Created from the combined energies of all the gods to defeat the buffalo demon Mahishasura, Durga represents the ultimate feminine power — strong enough to conquer what no individual god could.

Durga is depicted riding a lion or tiger, with eight or ten arms each carrying a weapon given by different gods. Her name means "the invincible one," and she is worshipped especially during the nine-night festival of Navratri.`,
      },
      {
        heading: 'Why Children Are Inspired by Durga',
        body: `Durga is a powerful role model, especially for young girls — a fierce protector who fights for justice. But she is also a loving mother (often called "Ma Durga"), combining strength with compassion in a way that resonates with all children.

In "The Marvelous Hindu Deities," Durga is illustrated with her lion mount and multiple arms, conveying both her power and grace. Children see that being strong and being kind are not opposites.`,
      },
      {
        heading: 'Durga\'s Lessons for Children',
        body: `Durga's mythology teaches empowering values:

• **Inner strength** — Durga shows that everyone has immense power within them.
• **Standing up to evil** — She teaches that fighting injustice is righteous and necessary.
• **Teamwork** — Durga was created through the combined power of all the gods, showing that collaboration creates extraordinary results.
• **Feminine power** — She demonstrates that strength, leadership, and protection are not limited by gender.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'What is Navratri and how does it relate to Durga?',
        answer: 'Navratri is a nine-night Hindu festival celebrating Goddess Durga\'s victory over the demon Mahishasura. Each night honors a different form of the goddess. It\'s celebrated with fasting, dancing (Garba and Dandiya), and prayers — a wonderful time to teach children about Durga.',
      },
      {
        question: 'Is Durga the same as Parvati?',
        answer: 'Durga is a fierce manifestation of Goddess Parvati (Shiva\'s consort). While Parvati is gentle and nurturing, Durga represents her warrior aspect. In Hindu tradition, the Divine Mother can take many forms — peaceful or powerful — depending on what the situation requires.',
      },
    ],
    relatedSlugs: ['parvati-book-for-kids', 'lakshmi-book-for-kids', 'navratri-activities-for-kids'],
  },
  {
    slug: 'rama-book-for-kids',
    category: 'deity',
    title: 'Rama Book for Kids - Lord Rama Stories for Children | Roots On Rise',
    description: 'Introduce your child to Lord Rama, the ideal prince and hero of the Ramayana. Illustrated Hindu mythology books for ages 2-8.',
    heading: 'discover lord rama',
    headingHighlight: 'rama',
    subheading: 'The ideal prince whose epic journey in the Ramayana teaches honor, courage, and the triumph of good over evil.',
    heroImage: '/images/deities/optimized/rama.webp',
    content: [
      {
        heading: 'Who Is Lord Rama?',
        body: `Lord Rama is the seventh avatar of Lord Vishnu and the hero of the Ramayana, one of the two great Sanskrit epics. Known as Maryada Purushottam (the ideal man), Rama is revered as the perfect son, husband, brother, and king.

Rama's story — his exile to the forest, the abduction of his wife Sita by the demon king Ravana, and his epic battle to rescue her with the help of Hanuman and the monkey army — is one of the most beloved stories in world literature.`,
      },
      {
        heading: 'Why Children Love Rama\'s Story',
        body: `The Ramayana is the ultimate adventure story for children: a brave prince, a beautiful princess, a devoted monkey warrior, a terrifying villain, epic battles, and the triumph of good over evil. These elements make it as engaging as any modern adventure tale.

In "The Marvelous Hindu Deities," Rama is presented with his iconic bow, conveying his role as both a gentle prince and a mighty warrior. Children see a hero who wins not through aggression, but through righteousness.`,
      },
      {
        heading: 'Rama\'s Lessons for Young Minds',
        body: `The Ramayana offers timeless values for children:

• **Honor and duty** — Rama accepts exile to honor his father's promise, teaching respect for commitments.
• **Devotion** — The love between Rama and Sita, and Rama and Hanuman, models deep, selfless relationships.
• **Good over evil** — Rama's victory over Ravana, celebrated as Diwali, teaches that right always prevails.
• **Leadership** — As king, Rama ruled with justice and compassion (Ram Rajya), modeling ideal leadership.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'How does Lord Rama relate to Diwali?',
        answer: 'Diwali celebrates Lord Rama\'s return to Ayodhya after 14 years of exile and his victory over the demon king Ravana. The people of Ayodhya lit thousands of oil lamps (diyas) to welcome him home, which is why Diwali is the "Festival of Lights." It\'s a perfect story to share with children during Diwali celebrations.',
      },
      {
        question: 'Is the Ramayana appropriate for young children?',
        answer: 'The core Ramayana story — a brave prince rescuing a princess with the help of a mighty monkey friend — is perfectly appropriate for young children. Our books present the story in simplified, age-appropriate language with beautiful illustrations that focus on positive values.',
      },
    ],
    relatedSlugs: ['hanuman-book-for-kids', 'diwali-gifts-for-kids', 'vishnu-book-for-kids'],
  },
  {
    slug: 'parvati-book-for-kids',
    category: 'deity',
    title: 'Parvati Book for Kids - Goddess Parvati for Children | Roots On Rise',
    description: 'Introduce your child to Goddess Parvati, the loving mother goddess of devotion and fertility. Illustrated Hindu books for ages 2-8.',
    heading: 'discover goddess parvati',
    headingHighlight: 'parvati',
    subheading: 'The gentle goddess of love, devotion, and motherhood — mother of Ganesha and embodiment of divine grace.',
    heroImage: '/images/deities/optimized/parvati.webp',
    content: [
      {
        heading: 'Who Is Goddess Parvati?',
        body: `Goddess Parvati is the Hindu goddess of love, fertility, devotion, and divine power. She is the consort of Lord Shiva and the mother of Ganesha and Kartikeya. As a manifestation of Adi Shakti (primordial cosmic energy), Parvati represents the nurturing, life-giving aspect of the divine feminine.

Her name means "daughter of the mountain" — she is the daughter of Himavan, king of the mountains. Parvati's story of winning Shiva's heart through devotion and meditation is one of the most beautiful love stories in Hindu mythology.`,
      },
      {
        heading: 'Why Children Relate to Parvati',
        body: `Parvati is the divine mother figure in Hinduism, and children naturally connect with her warmth and protectiveness. Her stories as Ganesha's mother — from creating him to fiercely defending him — show the depth of a mother's love in ways children understand.

In "The Marvelous Hindu Deities," Parvati is illustrated with gentle, nurturing energy. Children see her as a loving presence who balances Shiva's intensity with compassion and grace.`,
      },
      {
        heading: 'Parvati\'s Lessons for Children',
        body: `Parvati's mythology teaches beautiful values:

• **Devotion and persistence** — Parvati meditated for years to win Shiva's love, teaching that determination achieves great things.
• **Motherly love** — Her creation and protection of Ganesha models unconditional parental love.
• **Balance** — Parvati brings balance to Shiva's ascetic nature, teaching that life needs both discipline and love.
• **Inner strength** — Though gentle, Parvati can manifest as fierce Durga or Kali when needed, showing that kindness and strength coexist.`,
      },
    ],
    featuredBooks: 'deities',
    faq: [
      {
        question: 'How is Parvati related to other goddesses?',
        answer: 'In Hindu tradition, Parvati is the gentle form of the Divine Mother (Shakti). When the situation demands, she manifests as fierce Durga to fight demons, or as Kali to destroy evil. Lakshmi and Saraswati are also considered aspects of the same divine feminine energy.',
      },
      {
        question: 'What is Parvati\'s connection to Ganesha?',
        answer: 'Parvati created Ganesha from sandalwood paste to guard her while she bathed. When Shiva returned and couldn\'t enter, a conflict arose that led to Ganesha getting an elephant head. This beloved story teaches about family love and is a favorite among young readers.',
      },
    ],
    relatedSlugs: ['ganesha-book-for-kids', 'shiva-book-for-kids', 'durga-book-for-kids'],
  },
];

// =============================================================================
// Festival Pages
// =============================================================================

const FESTIVAL_PAGES: LandingPage[] = [
  {
    slug: 'diwali-gifts-for-kids',
    category: 'festival',
    title: 'Diwali Gifts for Kids - Hindu Children\'s Books for Diwali | Roots On Rise',
    description: 'Find the perfect Diwali gift for children. Beautifully illustrated Hindu mythology and shloka books that celebrate heritage and tradition. Ages 2-8.',
    heading: 'the perfect diwali gift',
    headingHighlight: 'diwali',
    subheading: 'Give children a gift that sparkles brighter than fireworks — a connection to their heritage through beautifully illustrated books.',
    heroImage: '/images/books/marvelous-hindu-deities/boardbook/board_book_front_cover.webp',
    content: [
      {
        heading: 'Why Books Make the Best Diwali Gift',
        body: `Diwali is a time for family, celebration, and sharing the stories that connect us to our roots. While sweets and toys are traditional gifts, a beautifully illustrated children's book creates a lasting connection to culture that grows with the child.

Our books make ideal Diwali gifts because they combine entertainment with cultural education. Children unwrap a vibrant, engaging book — and parents know it's teaching heritage, mythology, and values that will stay with them for life.`,
      },
      {
        heading: 'Diwali Gift Ideas by Age',
        body: `**For Toddlers (Ages 2-4):** The Marvelous Hindu Deities board book — thick, durable pages with vibrant deity illustrations. The perfect "first mythology book" that survives toddler handling.

**For Early Readers (Ages 4-7):** My Little Shloka and Mantra Book — teaches sacred chants with pronunciation guides. Great for establishing a Diwali prayer routine.

**For Growing Readers (Ages 5-8):** The paperback edition with expanded stories and bonus coloring pages. Pairs learning with creativity.

**For Families:** Gift all three formats — board book for the youngest, shloka book for the family, and Kindle for travel. Complete cultural library!`,
      },
      {
        heading: 'Making Diwali Meaningful for Kids',
        body: `Use our books as the foundation for a meaningful Diwali experience:

• **Read the Rama story** — Explain how Diwali celebrates Rama's return to Ayodhya with lights.
• **Meet Lakshmi** — Teach children about the goddess of prosperity who visits clean, well-lit homes on Diwali night.
• **Chant together** — Use the Shloka book for family Diwali puja, letting children participate in mantras.
• **Create traditions** — Make reading these books part of your annual Diwali celebration.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'What is a good Diwali gift for a 3-year-old?',
        answer: 'The Marvelous Hindu Deities board book ($14.99) is the perfect Diwali gift for toddlers. The thick, durable pages feature 10 Hindu gods and goddesses with vibrant illustrations. It arrives gift-ready and is our bestseller for Diwali gifting. Available with free Prime delivery.',
      },
      {
        question: 'What is Diwali and how do I explain it to kids?',
        answer: 'Diwali is the Hindu "Festival of Lights" celebrating the victory of good over evil and light over darkness. The simplest explanation for kids: "Long ago, a brave prince named Rama came home after defeating a bad king, and everyone was so happy they lit thousands of lamps to welcome him!" Our books bring this story to life with beautiful illustrations.',
      },
      {
        question: 'Do you ship in time for Diwali?',
        answer: 'Our books are sold through Amazon, so Prime members receive orders in 1-2 days with free shipping. Standard shipping takes 3-5 business days. We recommend ordering at least one week before Diwali to ensure on-time delivery.',
      },
      {
        question: 'Can non-Hindu families enjoy these as Diwali gifts?',
        answer: 'Absolutely! Our books are designed as accessible introductions to Hindu culture and mythology. Many schools and multicultural families use them during Diwali season to teach about world celebrations and cultural diversity. They make thoughtful gifts that promote understanding and appreciation.',
      },
    ],
    relatedSlugs: ['lakshmi-book-for-kids', 'rama-book-for-kids', 'ganesha-book-for-kids'],
  },
  {
    slug: 'navratri-activities-for-kids',
    category: 'festival',
    title: 'Navratri for Kids - Activities, Stories & Books for Children | Roots On Rise',
    description: 'Celebrate Navratri with children through stories, activities, and beautifully illustrated books about Goddess Durga. Perfect for ages 2-8.',
    heading: 'celebrate navratri with kids',
    headingHighlight: 'navratri',
    subheading: 'Nine nights of divine feminine power — introduce children to Durga\'s victory and the joy of Navratri celebrations.',
    heroImage: '/images/books/marvelous-hindu-deities/boardbook/board_book_front_cover.webp',
    content: [
      {
        heading: 'What Is Navratri?',
        body: `Navratri is a vibrant nine-night Hindu festival celebrating the divine feminine power (Shakti). The festival honors Goddess Durga's victory over the buffalo demon Mahishasura, symbolizing the triumph of good over evil.

Each of the nine nights is dedicated to a different form of the goddess, and the festival culminates on the tenth day — Vijayadashami (Dussehra) — celebrating Durga's ultimate victory. It's a time of fasting, prayer, colorful Garba and Dandiya dancing, and community celebration.`,
      },
      {
        heading: 'Navratri Activities for Children',
        body: `Make Navratri engaging for young children:

• **Story time** — Read about Goddess Durga and her battle with Mahishasura from our illustrated books.
• **Coloring pages** — Download free deity coloring sheets from our website to keep children creatively engaged.
• **Dress up** — Children can wear traditional clothing in the color of each day's goddess.
• **Dance** — Teach simple Garba steps — young children love the circular, rhythmic movements.
• **Chanting** — Use the Shloka book to learn Durga-related mantras as a family.`,
      },
      {
        heading: 'The Nine Forms of Durga',
        body: `During Navratri, each night honors a specific form of the goddess. Teaching children these forms creates excitement and structure over the nine days:

Day 1: **Shailaputri** (Daughter of the Mountain), Day 2: **Brahmacharini** (The Devoted Student), Day 3: **Chandraghanta** (The Beautiful Moon), Day 4: **Kushmanda** (Creator of the Universe), Day 5: **Skandamata** (Mother of Skanda), Day 6: **Katyayani** (The Warrior), Day 7: **Kalaratri** (The Dark Night), Day 8: **Mahagauri** (The Pure One), Day 9: **Siddhidatri** (Giver of Powers).`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'How do I explain Navratri to a young child?',
        answer: 'Tell them: "Navratri is a special nine-night celebration where we honor a powerful goddess named Durga who defeated a great evil. Each night, we pray, dance, and wear beautiful colors." Our books introduce Durga with vibrant illustrations that make the story come alive for children.',
      },
      {
        question: 'What are good Navratri activities for toddlers?',
        answer: 'Simple Garba dancing, deity coloring pages (free on our website), reading illustrated mythology books, and dressing in traditional colors. Our board book is perfect for read-aloud time during Navratri, and the Shloka book adds mantras children can learn.',
      },
    ],
    relatedSlugs: ['durga-book-for-kids', 'diwali-gifts-for-kids', 'hindu-mythology-for-kids'],
  },
  {
    slug: 'janmashtami-activities-for-kids',
    category: 'festival',
    title: 'Janmashtami for Kids - Krishna Birthday Activities & Books | Roots On Rise',
    description: 'Celebrate Lord Krishna\'s birthday with children through stories, activities, and illustrated books. Janmashtami ideas for kids ages 2-8.',
    heading: 'celebrate janmashtami',
    headingHighlight: 'janmashtami',
    subheading: 'Celebrate Lord Krishna\'s birthday with stories, songs, and activities that bring the magic of his childhood to life.',
    heroImage: '/images/books/marvelous-hindu-deities/boardbook/board_book_front_cover.webp',
    content: [
      {
        heading: 'What Is Janmashtami?',
        body: `Janmashtami celebrates the birth of Lord Krishna, one of the most beloved Hindu deities. Usually falling in August or September, this joyous festival marks the midnight birth of baby Krishna in Mathura — born in a prison to parents Devaki and Vasudeva, then miraculously carried to safety in Gokul.

The festival includes fasting, midnight celebrations (since Krishna was born at midnight), singing devotional songs, decorating Krishna's cradle, and re-enacting scenes from his childhood. The Dahi Handi tradition — where teams form human pyramids to break a pot of butter hung high — celebrates young Krishna's love of stealing butter!`,
      },
      {
        heading: 'Janmashtami Activities for Children',
        body: `Make Janmashtami special for young children:

• **Read Krishna stories** — Share tales of baby Krishna from our illustrated books.
• **Decorate a cradle** — Let children decorate a small cradle for baby Krishna with flowers and cloth.
• **Make butter** — Simple butter-making activity connecting to Krishna the "Makhan Chor" (butter thief).
• **Dress up** — Children can dress as little Krishna or Radha in traditional outfits.
• **Dance** — Play Krishna bhajans and let children dance freely, celebrating his joyful nature.`,
      },
      {
        heading: 'Baby Krishna\'s Enchanting Stories',
        body: `Krishna's childhood stories are perfect for young children:

• **The Butter Thief** — Baby Krishna and his friends would steal butter from the village, and his mother Yashoda could never stay angry at his innocent smile.
• **Krishna and Putana** — Even as a baby, Krishna protected his village from the demoness Putana.
• **Lifting Govardhan** — Young Krishna lifted an entire mountain on one finger to shelter his village from a storm sent by the rain god Indra.
• **Taming Kaliya** — Krishna danced on the hood of the dangerous serpent Kaliya to protect the river.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'What is a good Janmashtami gift for kids?',
        answer: 'The Marvelous Hindu Deities board book featuring Lord Krishna makes a perfect Janmashtami gift. Children can see Krishna alongside other deities, and the durable board pages are ideal for young hands. Pair it with the Shloka book for Krishna-related mantras.',
      },
      {
        question: 'How do I celebrate Janmashtami with a toddler?',
        answer: 'Read Krishna stories at bedtime, decorate a small cradle together, make simple butter (shake cream in a jar!), and play Krishna songs for dancing. Our board book makes Krishna visually engaging for toddlers who are too young for detailed stories.',
      },
    ],
    relatedSlugs: ['krishna-book-for-kids', 'diwali-gifts-for-kids', 'hindu-mythology-for-kids'],
  },
  {
    slug: 'ganesh-chaturthi-for-kids',
    category: 'festival',
    title: 'Ganesh Chaturthi for Kids - Activities & Ganesha Books | Roots On Rise',
    description: 'Celebrate Ganesh Chaturthi with children through stories, eco-friendly idol making, and illustrated Ganesha books. Ideas for ages 2-8.',
    heading: 'celebrate ganesh chaturthi',
    headingHighlight: 'ganesh chaturthi',
    subheading: 'Welcome Lord Ganesha home with stories, creativity, and celebrations that children will treasure forever.',
    heroImage: '/images/books/marvelous-hindu-deities/boardbook/board_book_front_cover.webp',
    content: [
      {
        heading: 'What Is Ganesh Chaturthi?',
        body: `Ganesh Chaturthi is a Hindu festival celebrating the birth of Lord Ganesha, the beloved elephant-headed god. Usually falling in August or September, this vibrant festival lasts up to 10 days and culminates in the immersion of Ganesha idols in water (Visarjan).

Families bring Ganesha idols into their homes, perform daily pujas, offer modak (sweet dumplings — Ganesha's favorite!), and sing devotional songs. It's one of the most joyful and family-friendly Hindu festivals.`,
      },
      {
        heading: 'Ganesh Chaturthi Activities for Children',
        body: `Make Ganesh Chaturthi hands-on and educational:

• **Eco-friendly clay Ganesha** — Help children mold a small Ganesha from natural clay or play-dough.
• **Make modak** — Prepare Ganesha's favorite sweet treat together (simple rice flour modak recipes work well).
• **Read about Ganesha** — Use our illustrated books to tell the story of how Ganesha got his elephant head.
• **Coloring** — Download free Ganesha coloring pages from our website.
• **Chanting** — Learn the "Om Gan Ganapataye Namaha" mantra from the Shloka book.`,
      },
      {
        heading: 'Teaching Ganesha\'s Story',
        body: `Ganesh Chaturthi is the perfect occasion to share Ganesha's origin story:

Goddess Parvati created Ganesha from sandalwood paste and gave him life. She asked him to guard the entrance while she bathed. When Lord Shiva returned and was stopped by the boy, a confrontation led to Ganesha losing his head. Heartbroken Parvati demanded Shiva restore him, so Shiva replaced his head with that of the first creature found — an elephant. Shiva then blessed Ganesha to be worshipped first among all gods.

This story teaches children about family love, duty, and the power of a mother's devotion.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'How do I explain Ganesh Chaturthi to a child?',
        answer: 'Tell them: "Ganesh Chaturthi is Ganesha\'s birthday! We bring a special statue of Ganesha home, pray together, make his favorite sweets (modak), and after a few days, we say goodbye by placing the statue in water." Our books help children visualize Ganesha and understand his significance.',
      },
      {
        question: 'What books are best for Ganesh Chaturthi?',
        answer: 'The Marvelous Hindu Deities board book features Ganesha prominently and is perfect for the festival. Pair it with the Shloka book to learn Ganesha mantras. Together, they create a complete Ganesh Chaturthi experience for children — stories, illustrations, and devotional chanting.',
      },
    ],
    relatedSlugs: ['ganesha-book-for-kids', 'diwali-gifts-for-kids', 'navratri-activities-for-kids'],
  },
  {
    slug: 'holi-activities-for-kids',
    category: 'festival',
    title: 'Holi for Kids - Activities, Stories & Hindu Books | Roots On Rise',
    description: 'Celebrate Holi with children through stories, color activities, and Hindu mythology books. Learn about the festival of colors. Ages 2-8.',
    heading: 'celebrate holi with kids',
    headingHighlight: 'holi',
    subheading: 'The festival of colors comes alive when children understand the stories behind the celebration.',
    heroImage: '/images/books/marvelous-hindu-deities/boardbook/board_book_front_cover.webp',
    content: [
      {
        heading: 'What Is Holi?',
        body: `Holi is the Hindu "Festival of Colors" — one of the most joyous celebrations in the Hindu calendar. Usually falling in March, Holi marks the arrival of spring and celebrates the victory of good over evil through the legend of Holika and Prahlada.

The festival begins with Holika Dahan (bonfire night) and continues the next day with the famous color play — families and communities throw colored powders (gulal) and water at each other in a spectacular celebration of joy, forgiveness, and new beginnings.`,
      },
      {
        heading: 'Holi Activities for Children',
        body: `Make Holi educational and fun:

• **The Prahlada story** — Read about devotee Prahlada and how Vishnu (as Narasimha) saved him from evil, connecting to the Holika bonfire.
• **Natural colors** — Make eco-friendly Holi colors from turmeric (yellow), spinach (green), and beetroot (pink).
• **Art projects** — Create rangoli patterns or splatter-paint art inspired by Holi colors.
• **Krishna and Radha** — Share stories of Krishna playfully coloring Radha, a beloved Holi tradition.
• **Music and dance** — Play Holi songs and let children dance and celebrate.`,
      },
      {
        heading: 'The Story Behind Holi',
        body: `Holi's central legend teaches a powerful lesson: the demon king Hiranyakashipu wanted everyone to worship him, but his own son Prahlada remained devoted to Lord Vishnu. Furious, Hiranyakashipu ordered his sister Holika — who had a magical immunity to fire — to sit in a bonfire holding Prahlada.

But because of Prahlada's pure devotion, Vishnu protected him while Holika perished in the flames. This story teaches children that goodness and faith are the strongest shields against evil. The bonfire (Holika Dahan) represents burning away negativity, and the colors that follow represent the joy of spring and new beginnings.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'How do I explain Holi to a young child?',
        answer: 'Tell them: "Holi is a celebration of spring and happiness where everyone plays with beautiful colors! A long time ago, a boy named Prahlada was so good and brave that nothing bad could hurt him. We celebrate by throwing colors and laughing together." Our books introduce the deities connected to Holi\'s stories.',
      },
      {
        question: 'What books teach kids about Holi?',
        answer: 'The Marvelous Hindu Deities introduces Krishna and Vishnu — both central to Holi traditions. Krishna\'s playful nature connects to the color play, while Vishnu\'s protection of Prahlada is the story behind Holika Dahan. The Shloka book adds devotional mantras for a complete cultural experience.',
      },
    ],
    relatedSlugs: ['krishna-book-for-kids', 'vishnu-book-for-kids', 'diwali-gifts-for-kids'],
  },
];

// =============================================================================
// Topic Pages
// =============================================================================

const TOPIC_PAGES: LandingPage[] = [
  {
    slug: 'hindu-mythology-for-kids',
    category: 'topic',
    title: 'Hindu Mythology for Kids - Children\'s Books About Hindu Gods | Roots On Rise',
    description: 'Introduce children to Hindu mythology through beautifully illustrated books. Learn about gods, goddesses, and ancient stories. Perfect for ages 2-8.',
    heading: 'hindu mythology for kids',
    headingHighlight: 'mythology',
    subheading: 'Ancient stories that have shaped civilizations for millennia — now beautifully adapted for the youngest readers.',
    heroImage: '/images/books/marvelous-hindu-deities/boardbook/board_book_front_cover.webp',
    content: [
      {
        heading: 'Why Hindu Mythology Matters for Children',
        body: `Hindu mythology is one of the oldest and richest storytelling traditions in the world, with stories dating back thousands of years. These aren't just religious texts — they're epic adventures, moral tales, and cultural treasures that have shaped the lives of over a billion people.

For children growing up in diaspora communities, these stories provide a vital connection to heritage. For all children, they offer fascinating world mythology alongside Greek, Norse, and Egyptian traditions — expanding their understanding of human culture and universal values.`,
      },
      {
        heading: 'Getting Started with Hindu Mythology',
        body: `The best way to introduce Hindu mythology to young children is through the major deities:

**Start Here:** Ganesha (the elephant god), Krishna (the playful blue god), and Hanuman (the monkey warrior) — these three deities have the most child-friendly stories and instantly recognizable appearances.

**Then Expand:** Introduce Shiva (the cosmic dancer), Lakshmi (goddess of prosperity), Saraswati (goddess of learning), Vishnu (the preserver), Durga (the warrior goddess), Rama (the ideal prince), and Parvati (the divine mother).

Our books follow this natural progression, making mythology accessible and exciting for even the youngest readers.`,
      },
      {
        heading: 'Building a Hindu Mythology Library',
        body: `A complete children's mythology library includes:

• **The Marvelous Hindu Deities** — The perfect first book covering all 10 major deities with vibrant illustrations. Available in board book (ages 2-5), paperback (ages 3-8), and Kindle.

• **My Little Shloka and Mantra Book** — Adds the devotional dimension with 15 sacred chants and pronunciation guides. Connects stories to spiritual practice.

• **Free Coloring Pages** — Download deity coloring sheets from our website to reinforce learning through creativity.

Together, these create a complete foundation for cultural and spiritual learning.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'What age should I start teaching Hindu mythology?',
        answer: 'You can start as early as age 1-2 with board books that introduce deity images and names. By ages 3-5, children can follow simple stories about Ganesha, Krishna, and Hanuman. Ages 5-8 is ideal for more detailed mythology with moral lessons. Our board book is designed for the youngest readers.',
      },
      {
        question: 'How is Hindu mythology different from Greek mythology?',
        answer: 'While both feature gods, goddesses, and epic stories, Hindu mythology is a living tradition practiced by over a billion people today. The stories aren\'t just historical — they\'re part of daily worship, festivals, and cultural identity. Both traditions share universal themes of good vs. evil, heroism, and divine intervention.',
      },
      {
        question: 'Can non-Hindu children enjoy Hindu mythology books?',
        answer: 'Absolutely! Just as children worldwide enjoy Greek and Norse mythology, Hindu mythology offers fascinating stories, colorful characters, and universal values. Many schools use our books for multicultural education units. The stories teach courage, wisdom, devotion, and kindness — values every family appreciates.',
      },
    ],
    relatedSlugs: ['ganesha-book-for-kids', 'krishna-book-for-kids', 'diwali-gifts-for-kids'],
  },
  {
    slug: 'sanskrit-mantras-for-kids',
    category: 'topic',
    title: 'Sanskrit Mantras for Kids - Shloka Book for Children | Roots On Rise',
    description: 'Teach children Sanskrit mantras and shlokas with pronunciation guides. Beautiful shloka book with 15 Hindu prayers for kids ages 2-14.',
    heading: 'sanskrit mantras for kids',
    headingHighlight: 'mantras',
    subheading: 'Sacred sounds that have been chanted for thousands of years — now accessible for the youngest voices in your family.',
    heroImage: '/images/books/shloka-mantra/hardcover/front-cover.jpg',
    content: [
      {
        heading: 'Why Teach Children Sanskrit Mantras?',
        body: `Sanskrit mantras are more than religious prayers — they are carefully constructed sound patterns that promote focus, calm, and mindfulness. Modern research has shown that chanting and rhythmic repetition can improve concentration, reduce anxiety, and create a sense of peace in children.

For Hindu families, mantras connect children to a spiritual tradition spanning thousands of years. For all families, they offer a unique approach to mindfulness that children find engaging and soothing — especially as a bedtime or morning routine.`,
      },
      {
        heading: 'Starting with Simple Mantras',
        body: `Our Shloka and Mantra book introduces 15 traditional Hindu prayers in order of complexity:

**Beginner mantras** children can learn first:
• **Om** — The universal sound, perfect for starting any practice
• **Om Namah Shivaya** — A simple, rhythmic mantra honoring Lord Shiva
• **Om Gan Ganapataye Namaha** — Invoking Ganesha before new beginnings

**Intermediate mantras** as confidence grows:
• **Gayatri Mantra** — The most sacred Vedic mantra for wisdom and enlightenment
• **Shanti Mantras** — Peace prayers that calm the mind

Each mantra includes the Sanskrit text, English transliteration for pronunciation, and a simple meaning that children can understand.`,
      },
      {
        heading: 'Making Mantra Practice Fun',
        body: `Children learn mantras best when the practice feels natural, not forced:

• **Morning routine** — Start with one short mantra as part of waking up. "Om" takes just a few seconds.
• **Bedtime calm** — Chanting before sleep creates a soothing transition that children look forward to.
• **Together time** — Family chanting is bonding time. Children love participating in "grown-up" activities.
• **No pressure** — Let children listen first, then join when ready. Gentle repetition is key.
• **Celebrate progress** — When children learn a new mantra, acknowledge their achievement.`,
      },
    ],
    featuredBooks: 'shloka',
    faq: [
      {
        question: 'Do I need to know Sanskrit to teach my child mantras?',
        answer: 'Not at all! Our Shloka and Mantra book includes clear English transliterations (phonetic spellings) for every mantra. Parents can read and chant along even without any Sanskrit background. The book is designed for families to learn together.',
      },
      {
        question: 'What age should children start learning mantras?',
        answer: 'You can start playing mantras for babies as soothing background sounds. By ages 2-3, children can attempt simple sounds like "Om." Ages 4-7 is ideal for structured learning with our book. Older children (8-14) can understand the deeper meanings and chant independently.',
      },
      {
        question: 'Which mantra should my child learn first?',
        answer: 'Start with "Om" — it\'s a single syllable that\'s easy to chant and is the foundation of all mantras. Next, try "Om Namah Shivaya" or "Om Gan Ganapataye Namaha" — both are rhythmic and children enjoy the repetition. Our book sequences mantras from simplest to more complex.',
      },
    ],
    relatedSlugs: ['hindu-mythology-for-kids', 'ganesha-book-for-kids', 'diwali-gifts-for-kids'],
  },
  {
    slug: 'indian-culture-books-for-kids',
    category: 'topic',
    title: 'Indian Culture Books for Kids - Hindu Heritage Books for Children | Roots On Rise',
    description: 'Celebrate Indian heritage with beautifully illustrated children\'s books. Mythology, mantras, and cultural education for kids ages 2-8.',
    heading: 'indian culture books for kids',
    headingHighlight: 'culture',
    subheading: 'Helping children build a strong connection to their heritage through stories, art, and sacred traditions.',
    heroImage: '/images/books/marvelous-hindu-deities/boardbook/board_book_front_cover.webp',
    content: [
      {
        heading: 'Why Cultural Books Matter',
        body: `For children growing up in the Indian diaspora, cultural books serve as bridges between the world they live in and the heritage they come from. These books answer the questions children naturally ask: "Why do we do puja?" "Who is Ganesha?" "What language is that prayer in?"

Research shows that children with a strong sense of cultural identity have higher self-esteem, better academic performance, and stronger family bonds. Books are one of the most effective tools for building this identity — they create shared language, familiar stories, and a sense of belonging.`,
      },
      {
        heading: 'Building a Cultural Library',
        body: `A thoughtful cultural library for children includes:

**Mythology & Deities** — Books that introduce Hindu gods and goddesses through stories and illustrations. Our "The Marvelous Hindu Deities" covers 10 major deities in age-appropriate language.

**Devotional Practice** — Books that teach prayers and mantras. "My Little Shloka and Mantra Book" introduces 15 sacred chants with pronunciation guides.

**Festival Connection** — Using these books during Diwali, Navratri, Janmashtami, and other festivals creates living cultural experiences.

**Creative Engagement** — Free coloring pages and activity sheets reinforce learning through hands-on creativity.`,
      },
      {
        heading: 'When to Start Cultural Education',
        body: `The earlier, the better:

• **Ages 0-2:** Read aloud, play devotional music, display deity images. Board books with bright illustrations create positive associations.
• **Ages 2-4:** Name deities, tell simple stories, establish routines (morning prayer, bedtime reading).
• **Ages 4-7:** Deeper stories, festival participation, mantra learning, and connecting culture to daily life.
• **Ages 7+:** Discuss values, compare mythologies, encourage questions, and let children lead family traditions.

Starting early normalizes cultural practice — it becomes part of who they are, not something imposed later.`,
      },
    ],
    featuredBooks: 'both',
    faq: [
      {
        question: 'How do I teach Indian culture to kids born abroad?',
        answer: 'Start with stories and celebrations. Our books make Hindu mythology and mantras accessible in English with beautiful illustrations. Use festivals (Diwali, Holi, Navratri) as anchoring moments. The key is making culture feel natural and joyful, not like homework.',
      },
      {
        question: 'What are the best Indian culture books for toddlers?',
        answer: 'The Marvelous Hindu Deities board book is specifically designed for toddlers — thick durable pages, vibrant illustrations, and simple text introducing 10 Hindu gods and goddesses. It\'s the most popular starting point for cultural education with very young children.',
      },
      {
        question: 'Are these books only for Hindu families?',
        answer: 'While rooted in Hindu tradition, our books are designed for anyone interested in Indian culture and mythology. Schools use them for multicultural education, adoptive families use them to honor children\'s heritage, and curious readers of all backgrounds enjoy the rich stories and beautiful art.',
      },
    ],
    relatedSlugs: ['hindu-mythology-for-kids', 'sanskrit-mantras-for-kids', 'diwali-gifts-for-kids'],
  },
];

// =============================================================================
// Combined Export
// =============================================================================

export const LANDING_PAGES: LandingPage[] = [
  ...DEITY_PAGES,
  ...FESTIVAL_PAGES,
  ...TOPIC_PAGES,
];

/**
 * Get a landing page by slug
 */
export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}

/**
 * Get all landing pages by category
 */
export function getLandingPagesByCategory(category: LandingPageCategory): LandingPage[] {
  return LANDING_PAGES.filter((page) => page.category === category);
}

/**
 * Get related landing pages for internal linking
 */
export function getRelatedPages(page: LandingPage): LandingPage[] {
  if (!page.relatedSlugs) return [];
  return page.relatedSlugs
    .map((slug) => getLandingPageBySlug(slug))
    .filter((p): p is LandingPage => p !== undefined);
}
