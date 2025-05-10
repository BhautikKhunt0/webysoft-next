/**
 * Configuration for SSR implementation
 * This can be toggled when issues arise, allowing for a graceful fallback
 */

// Set this to false if SSR causes issues with certain components
export const SSR_ENABLED = true;

// The mode of SSR to use
export type SSRMode = 'full' | 'hybrid' | 'static';

// Static: Server pre-renders HTML but without data
// Hybrid: Server pre-renders HTML with some dynamic data
// Full: Server pre-renders everything including data fetching
export const SSR_MODE: SSRMode = 'hybrid';

/**
 * Helper function to get HTML head tags for SEO
 * These will be included regardless of SSR mode
 */
export function getSSRHeadTags(path: string) {
  const baseUrl = 'https://webysoft.replit.app';
  const title = path === '/' 
    ? 'WebySoft - Web Development Services'
    : path.includes('portfolio')
      ? 'Our Portfolio - WebySoft' 
      : 'WebySoft';

  const description = path === '/'
    ? 'WebySoft offers comprehensive web development solutions for businesses of all sizes.'
    : path.includes('portfolio')
      ? 'Explore our portfolio of stunning websites and web applications.'
      : 'WebySoft - Professional Web Development';

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${baseUrl}${path}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <link rel="canonical" href="${baseUrl}${path}" />
  `;
}