export default function publishDate(date: string, lang: 'ru' | 'fi') {
  const d = Date.parse(date);
  return new Intl.DateTimeFormat(lang, {day: '2-digit', month: '2-digit', year: '2-digit' }).format(d)
}
