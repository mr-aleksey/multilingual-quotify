import { wrapInQuotes, Locale, QuoteType } from './wrapInQuotes';

describe('wrapInQuotes', () => {
  it('wraps a single string with double quotes based on locale', () => {
    const input = 'Hello, world!';
    const locale: Locale = 'en';
    const quoteType: QuoteType = 'double';

    const result = wrapInQuotes(input, locale, quoteType);

    expect(result).toEqual('“Hello, world!”');
  });

  it('wraps a single string with single quotes based on locale', () => {
    const input = 'Привет, мир!';
    const locale: Locale = 'ru';
    const quoteType: QuoteType = 'single';

    const result = wrapInQuotes(input, locale, quoteType);

    expect(result).toEqual('„Привет, мир!“');
  });

  it('wraps an array of strings with double quotes based on locale', () => {
    const input = ['Bonjour', 'le', 'monde'];
    const locale: Locale = 'fr';
    const quoteType: QuoteType = 'double';

    const result = wrapInQuotes(input, locale, quoteType);

    expect(result).toEqual(['« Bonjour »', '« le »', '« monde »']);
  });

  it('wraps an array of strings with single quotes based on locale', () => {
    const input = ['안녕하세요', '세계'];
    const locale: Locale = 'ko';
    const quoteType: QuoteType = 'single';

    const result = wrapInQuotes(input, locale, quoteType);

    expect(result).toEqual(['‘안녕하세요’', '‘세계’']);
  });
});
