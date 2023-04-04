export type Locale = 'en' | 'ru' | 'fr' | 'de' | 'es' | 'it' | 'da' | 'no' | 'sv' | 'fi' | 'nl' | 'pl' | 'hu' | 'cs' | 'sk' | 'ro' | 'tr' | 'ja' | 'zh' | 'ko';
export type QuoteType = 'single' | 'double';
type Input = string | string[];

interface Quote {
  double: string;
  single: string;
}

const quotes: Record<Locale, Quote> = {
  en: { double: '“...”', single: '‘...’' },
  ru: { double: '«...»', single: '„...“' },
  fr: { double: '« ... »', single: '‹ ... ›' },
  de: { double: '„...“', single: '‚...‘' },
  es: { double: '«...»', single: '“...”' },
  it: { double: '«...»', single: '“...”' },
  da: { double: '«...»', single: '‘...’' },
  no: { double: '«...»', single: '‘...’' },
  sv: { double: '”...”', single: '’...’' },
  fi: { double: '”...”', single: '’...’' },
  nl: { double: '„...”', single: '‚...’' },
  pl: { double: '„...”', single: '‚...’' },
  hu: { double: '„...”', single: '‚...’' },
  cs: { double: '„...“', single: '‚...‘' },
  sk: { double: '„...“', single: '‚...‘' },
  ro: { double: '„...”', single: '«...»' },
  tr: { double: '“...”', single: '‘...’' },
  ja: { double: '「...」', single: '『...』' },
  zh: { double: '“...”', single: '‘...’' },
  ko: { double: '“...”', single: '‘...’' },
};

function applyQuote(value: string, quote: string): string {
  return quote.replace('...', value);
}

/**
 * Wraps the input string or array of strings in quotes according to the specified locale and quote type.
 *
 * @param input - The string or array of strings to be wrapped in quotes.
 * @param locale - The locale code, determining the language-specific quotes to be used.
 * @param quoteType - The type of quotes to be used: 'single' or 'double'.
 * @returns The input string or array of strings, wrapped in the selected quotes based on the locale and quote type.
 */
export function wrapInQuotes(input: Input, locale: Locale, quoteType: QuoteType): Input {
  const selectedQuote = quotes[locale][quoteType];
  
  if (Array.isArray(input)) {
    return input.map((value) => applyQuote(value, selectedQuote));
  }

  return applyQuote(input, selectedQuote);
}
