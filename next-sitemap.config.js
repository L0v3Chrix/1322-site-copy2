/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.1322legacystrategies.com',
  generateRobotsTxt: false, // We created a custom robots.txt
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*', '/_next/*'],
  transform: async (config, path) => {
    // Custom priorities for important pages
    const priorities = {
      '/': 1.0,
      '/about': 0.9,
      '/learn': 0.9,
      '/learn/foundations': 0.9,
      '/learn/deep-dives': 0.85,
      '/blog': 0.8,
      '/tools': 0.85,
      '/tools/interest-bleed-calculator': 0.85,
      '/tools/family-bank-projector': 0.85,
      '/tools/policy-estimator': 0.8,
      '/tools/opportunity-cost': 0.8,
      '/case-studies': 0.8,
      '/qualify': 0.75,
    }
    
    // Blog posts get good priority
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.75,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Learning content
    if (path.startsWith('/learn/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
