/**
 * Cloudflare Worker for LetsGrowPatients.com
 * Handles routing, redirects, and security headers
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  let { pathname } = url;

  // Redirect www to non-www
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '');
    return Response.redirect(url.toString(), 301);
  }

  // Force HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  // Clean URL routing (optional — for Cloudflare Pages this is handled automatically)
  // Map /services -> /services.html, etc.
  const cleanRoutes = ['/services', '/ai-solutions', '/about', '/pricing', '/contact'];
  if (cleanRoutes.includes(pathname)) {
    pathname = pathname + '.html';
  }

  // Trailing slash redirect
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1);
    return Response.redirect(url.toString(), 301);
  }

  // Fetch the asset
  url.pathname = pathname;
  let response = await fetch(url.toString());

  // Clone response to add security headers
  response = new Response(response.body, response);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}
