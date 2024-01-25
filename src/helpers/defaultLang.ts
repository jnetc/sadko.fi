export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.substring(1) as 'ru' | 'fi';
  if (lang.includes('ru')) return 'ru';
  return lang;
}
