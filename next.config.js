module.exports = {
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
    SHOPIFY_ADMIN_STORE_NAME: process.env.SHOPIFY_ADMIN_STORE_NAME,
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
    SHOPIFY_API_PASS: process.env.SHOPIFY_API_PASS,

  },
  images: {
    domains: ['cdn.shopify.com']
  }
}