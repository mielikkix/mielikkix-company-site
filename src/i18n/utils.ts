import { ui, defaultLang, type Lang } from './ui';

export function t(lang: Lang) {
  return ui[lang];
}

/** Strips a leading /no locale prefix, returning the language-agnostic route (always starts with "/"). */
export function getRouteSlug(pathname: string): string {
  let slug = pathname.startsWith('/no') ? pathname.slice(3) : pathname;
  if (slug === '') slug = '/';
  if (!slug.startsWith('/')) slug = `/${slug}`;
  return slug;
}

/** Builds the URL for the given route slug (e.g. "/pricing") in the target language. */
export function localizedPath(pathname: string, lang: Lang): string {
  const slug = getRouteSlug(pathname);
  if (lang === defaultLang) return slug;
  return slug === '/' ? '/no' : `/no${slug}`;
}
