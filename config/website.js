const meta = {
  // Metadata
  siteTitle: 'Ahmed BESBES - Data Science Portfolio',
  siteDescription: 'Ahmed BESBES - Data Scientist in the making.',
  siteTitleAlt: 'Ahmed BESBES',
  siteShortName: 'Ahmed BESBES',
  siteUrl: 'https://www.ahmedbesbes.com', // No trailing slash!
}

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@ahmed_besbes_',
}

const website = {
  ...meta,
  ...social,
  disqusShortName: 'ahmedbesbes',
  googleAnalyticsID: "UA-79148290-1",
  
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
}

module.exports = website