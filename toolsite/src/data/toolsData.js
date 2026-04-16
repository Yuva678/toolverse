export const toolsData = [
  // Text Tools
  {
    id: 'word-counter',
    slug: 'word-counter',
    category: 'Text Tools',
    title: 'Word Counter',
    shortDesc: 'Instantly count words, characters, sentences, and paragraphs.',
    icon: '📝',
    seoContent: {
      intro: 'A fast, client-side word counter designed for students, writers, and SEO professionals.',
      whatItDoes: 'Analyzes your text instantly to calculate exact word and character lengths (with and without spaces).',
      howToUse: 'Just paste your text into the box. Results will update automatically as you type.',
      useCases: 'Ensuring your essays meet the 1000-word criteria or optimizing Twitter character limits.',
      examples: 'Input: "Hello World" -> 2 Words, 11 Characters.',
      faqs: [{ q: 'Is it private?', a: 'Yes, no text is sent to a server.' }],
      tips: 'Use this tool before submitting any academic paper or social media post.'
    }
  },
  {
    id: 'case-converter',
    slug: 'case-converter',
    category: 'Text Tools',
    title: 'Case Converter',
    shortDesc: 'Convert text between UPPERCASE, lowercase, Title Case, and more.',
    icon: '🔡',
    seoContent: {
      intro: 'Easily fix capitalization issues with your raw text in a single click.',
      whatItDoes: 'Transforms your string into various standardized case formats.',
      howToUse: 'Paste your block of text, then click the desired format button.',
      useCases: 'Fixing emails accidentally typed with Caps Lock on.',
      examples: 'apple -> APPLE -> Apple',
      faqs: [{ q: 'Can it do snake_case?', a: 'Yes! It handles programming cases perfectly.' }],
      tips: 'Programmers love the snake_case and kebab-case generators for file naming.'
    }
  },
  {
    id: 'text-sorter',
    slug: 'text-sorter',
    category: 'Text Tools',
    title: 'Text Sorter',
    shortDesc: 'Sort lists alphabetically (A-Z or Z-A) and ignore or respect casing.',
    icon: '📋',
    seoContent: {
      intro: 'Organize massive lists of items, names, or code alphabetically in milliseconds.',
      whatItDoes: 'Takes line-break separated lists and applies standard alphabetical sorting.',
      howToUse: 'Paste your list into the text area, select A-Z or Z-A, and hit Sort.',
      useCases: 'Sorting student names, grocery lists, or CSV column lists.',
      examples: 'Zebra, Apple -> Apple, Zebra',
      faqs: [{ q: 'Does it ignore blanks?', a: 'Empty lines are automatically removed during the sort.' }],
      tips: 'Use the Case Sensitive checkmark if you want capital letters to be prioritized above lowercases.'
    }
  },
  {
    id: 'remove-duplicate-lines',
    slug: 'remove-duplicate-lines',
    category: 'Text Tools',
    title: 'Remove Duplicate Lines',
    shortDesc: 'Instantly strip out duplicate entries from large datasets and text lists.',
    icon: '🧹',
    seoContent: {
      intro: 'A must-have tool for cleaning up messy lists or corrupted data dumps.',
      whatItDoes: 'Scans your list line-by-line and strips any exact string duplicates.',
      howToUse: 'Paste your list and click Remove Duplicates. Only unique strings remain.',
      useCases: 'Cleaning up email lists before sending out a mass newsletter.',
      examples: 'Line A, Line B, Line A -> Line A, Line B',
      faqs: [{ q: 'Is it case sensitive?', a: 'Yes, "Apple" and "apple" are treated as distinct lines.' }],
      tips: 'Make sure your trailing spaces are cleaned first for maximum accuracy.'
    }
  },
  {
    id: 'text-repeater',
    slug: 'text-repeater',
    category: 'Text Tools',
    title: 'Text Repeater',
    shortDesc: 'Repeat a string or paragraph up to 10,000 times instantly.',
    icon: '🔁',
    seoContent: {
      intro: 'Generate large volumes of placeholder or repeated text natively.',
      whatItDoes: 'Takes an initial string and clones it N times using your chosen separator.',
      howToUse: 'Type your word, set the count, pick a separator (Space, New Line), and generate.',
      useCases: 'Creating test mock data for UI inputs or spamming fun messages in chat.',
      examples: '"Help" x 3 -> "Help Help Help"',
      faqs: [{ q: 'Is there a limit?', a: 'Capped at 10,000 to prevent your browser from freezing.' }],
      tips: 'Use "New Line" if you need to generate quick mock CSV rows.'
    }
  },

  // Student Tools
  {
    id: 'age-calculator',
    slug: 'age-calculator',
    category: 'Student Tools',
    title: 'Age Calculator',
    shortDesc: 'Compute precise age in years, months, and days.',
    icon: '📅',
    seoContent: {
      intro: 'Find the exact age between two given dates with leap year compensation.',
      whatItDoes: 'Calculates chronological differentials using JavaScript date logic.',
      howToUse: 'Set your birth date, set the end date, and click calculate.',
      useCases: 'HR verification and baby milestone tracking.',
      examples: 'Jan 1 2000 to Jan 1 2025 -> 25 Years.',
      faqs: [{ q: 'Does it calculate leap years?', a: 'Yes, standard JS dates account for leap days natively.' }],
      tips: 'Look at the "Total Days" metric to see exactly how many days you have been alive.'
    }
  },
  {
    id: 'gpa-calculator',
    slug: 'gpa-calculator',
    category: 'Student Tools',
    title: 'GPA Calculator',
    shortDesc: 'Calculate your college or high school semester Grade Point Average.',
    icon: '🎓',
    seoContent: {
      intro: 'Takes the stress out of finals week weighting and math.',
      whatItDoes: 'Multiplies course credits by standard 4.0 scale letter grades to yield a true GPA.',
      howToUse: 'Add your courses, define the credits, select your letter grade, and watch it calculate.',
      useCases: 'Figuring out what grade you need in Biology to maintain a 3.5 overall GPA.',
      examples: '3 Credit A, 3 Credit B -> 3.5 GPA',
      faqs: [{ q: 'Is this the 4.0 scale?', a: 'Yes, we use the standard US 4.0 collegiate grading scale.' }],
      tips: 'Play with the "Grade" dropdown to project different potential outcomes for finals week.'
    }
  },
  {
    id: 'percentage-calculator',
    slug: 'percentage-calculator',
    category: 'Student Tools',
    title: 'Percentage Calculator',
    shortDesc: 'Easily solve complex percentage math problems.',
    icon: '➗',
    seoContent: {
      intro: 'Tackle percentage tracking without needing complex formulas.',
      whatItDoes: 'Solves "X% of Y", "X is what % of Y", and "Change from X to Y".',
      howToUse: 'Find the specific formula you need, input the two numbers, and see live results.',
      useCases: 'Calculating retail discounts, sales tax, or stock market fluctuations.',
      examples: 'What is 15% of 150? -> 22.50',
      faqs: [{ q: 'Does it handle decimals?', a: 'Yes, precise float point mathematics are used.' }],
      tips: 'Percentage difference is very useful for marketers tracking month-over-month traffic.'
    }
  },
  {
    id: 'random-number',
    slug: 'random-number',
    category: 'Student Tools',
    title: 'Random Number Generator',
    shortDesc: 'Generate a sequence of completely randomized numbers based on parameters.',
    icon: '🎲',
    seoContent: {
      intro: 'A fair, pseudorandom engine for generating digits within bounds.',
      whatItDoes: 'Uses the browser Math.random() cryptography curve to yield fair number picks.',
      howToUse: 'Define a Minimum and Maximum, specify how many outputs you want, and execute.',
      useCases: 'Raffles, giveaways, standard deviation statistics, or board games.',
      examples: 'Min 1, Max 10, Count 3 -> [7, 2, 9]',
      faqs: [{ q: 'Are these truly random?', a: 'They are pseudorandom, standard for non-security purposes.' }],
      tips: 'Set Min to 1 and Max to 100 to roll percentage dice.'
    }
  },

  // Developer Tools
  {
    id: 'json-formatter',
    slug: 'json-formatter',
    category: 'Developer Tools',
    title: 'JSON Formatter & Validator',
    shortDesc: 'Format, minify, and validate JSON payloads instantly.',
    icon: '{ }',
    seoContent: {
      intro: 'The ultimate debugging tool for REST APIs and server configuration arrays.',
      whatItDoes: 'Removes minification, beautifies JSON spacing, and checks syntax validity natively.',
      howToUse: 'Paste your raw data, click Format, and inspect the beautifully indented output.',
      useCases: 'Debugging an API endpoint returning a massive unformatted string.',
      examples: '{"a":1} -> {\n  "a": 1\n}',
      faqs: [{ q: 'Is it safe?', a: '100% Client-side. Your production data never hits our servers.' }],
      tips: 'Use the Validation tool before committing configuration files to your Git repository.'
    }
  },
  {
    id: 'base64',
    slug: 'base64',
    category: 'Developer Tools',
    title: 'Base64 Encoder & Decoder',
    shortDesc: 'Safely encode or decode strings into the Base64 format.',
    icon: '💻',
    seoContent: {
      intro: 'Utility for translating raw text arrays into basic system-transportable ASCII Base64.',
      whatItDoes: 'Runs btoa and atob commands natively to swap data layers.',
      howToUse: 'Paste standard text to Encode, or paste Base64 blocks to Decode.',
      useCases: 'Preparing Authorization headers for HTTP fetch operations.',
      examples: '"Text" -> "VGV4dA=="',
      faqs: [{ q: 'Is Base64 encryption?', a: 'No! It offers no real security. It is merely data transport encoding.' }],
      tips: 'Make sure your text is parsed cleanly without trailing spaces before encoding.'
    }
  },

  // Image Tools (Placeholders linked to the UI wrapper)
  {
    id: 'image-resizer',
    slug: 'image-resizer',
    category: 'Image Tools',
    title: 'Image Resizer',
    shortDesc: 'Instantly change the width/height dimensions of your photos.',
    icon: '🖼️',
    seoContent: { intro: 'Scale down massive 4k images into standard web-friendly dimensions.', whatItDoes: 'Recalculates image arrays.', howToUse: 'Drop image, set dimensions.', useCases: 'Blog thumbnails.', examples: '', faqs: [], tips: 'Maintain aspect ratio to avoid stretching.' }
  },
  {
    id: 'image-compressor',
    slug: 'image-compressor',
    category: 'Image Tools',
    title: 'Image Compressor',
    shortDesc: 'Reduce file size without losing noticeable quality.',
    icon: '🗜️',
    seoContent: { intro: 'A fast way to drop 5MB PNGs down to 300KB.', whatItDoes: 'Strips unused meta and slightly lowers quality headers.', howToUse: 'Drop image, slide quality bar.', useCases: 'Web design.', examples: '', faqs: [], tips: 'Target 80% compression for maximum savings vs quality layout.' }
  },
  {
    id: 'jpg-to-png',
    slug: 'jpg-to-png',
    category: 'Image Tools',
    title: 'JPG to PNG Converter',
    shortDesc: 'Turn lossy JPGs into lossless PNG files quickly.',
    icon: '🔄',
    seoContent: { intro: 'Shift file encoding natively.', whatItDoes: 'Canvas element translation.', howToUse: 'Upload and convert.', useCases: 'Graphic design.', examples: '', faqs: [], tips: 'Converting JPG to PNG won\'t magically create transparency if none existed.' }
  },
  {
    id: 'png-to-jpg',
    slug: 'png-to-jpg',
    category: 'Image Tools',
    title: 'PNG to JPG Converter',
    shortDesc: 'Convert heavy PNG photos to universally compatible JPGs.',
    icon: '🔄',
    seoContent: { intro: 'Drop file sizes by converting to standard photograph encodings.', whatItDoes: 'Flattens transparent layers into white backgrounds.', howToUse: 'Upload and convert.', useCases: 'Saving server space.', examples: '', faqs: [], tips: 'PNGs with transparent backgrounds run faster when natively baked via JPG white space.' }
  }
];

export function getToolBySlug(slug) {
  return toolsData.find(t => t.slug === slug) || null;
}
