export function sendGAEvent(name, params = {}) {
  if (typeof window.gtag !== "undefined") {
    if (window.gtag) window.gtag("event", name, params);
  }
}

export function trackPageview(url) {
  if (!window.gtag) return;
  window.gtag("event", "page_view", {
    page_location: url,
    page_path: new URL(url, window.location.origin).pathname,
    page_title: document.title,
  });
}
