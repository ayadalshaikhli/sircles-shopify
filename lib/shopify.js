import Client from "shopify-buy";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;
const storeApiKey = process.env.SHOPIFY_API_KEY;
const storeApiPass = process.env.SHOPIFY_API_PASS;


const client = Client.buildClient({
  domain: `${domain}`,
  storefrontAccessToken: `${storefrontAccessToken}`,
});

export default client;


async function ShopifyData(query) {
  const URL = `https://${domain}/api/2021-07/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

async function shopifyDataUpdate(query) {
  const response = await fetch(
    `https://sircles-test.myshopify.com/admin/api/2022-07/graphql.json`,
    {
      method: 'POST',
      headers: {
        'X-Shopify-Access-Token': `${storeApiKey}:${storeApiPass}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query })
    }
  )
  }


export async function createNewProduct(){
  const query = 
  `mutation productCreate($input: ayad) {
    productCreate(input: $input) {
      product {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`
  
  const response = await shopifyDataUpdate(query);

  const newProduct = response.data.productCreate.product
    ? response.data.productCreate.product
    : [];

  return newProduct;
}

export async function updateProductLevel(id, delta){

  const query = `
  mutation adjustInventoryLevelQuantity($inventoryAdjustQuantityInput: InventoryAdjustQuantityInput!) {
    inventoryAdjustQuantity(input: $inventoryAdjustQuantityInput) {
      inventoryLevel {
        available
      }
      userErrors {
        field
        message
      }
    }
  }
  `

  const variables = {
      input: {
        availableDelta: delta,
        inventoryLevelId: id,
      },
    };
  }




export async function getProductsInCollection() {
  const query = `
  {
    collectionByHandle(handle: "frontpage") {
      title
      products(first: 25) {
        edges {
          node {
            id
            title
            handle
            description
            descriptionHtml
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);

  const allProducts = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return allProducts;
}

export async function getAllProducts() {
  const query = `{
    products(first: 250) {
      edges {
        node {
          handle
          id
        }
      }
    }
  }`;

  const response = await ShopifyData(query);

  const slugs = response.data.products.edges
    ? response.data.products.edges
    : [];

  return slugs;
}

export async function getProduct(handle) {
  const query = `
  {
    productByHandle(handle: "${handle}") {
    	collections(first: 1) {
      	edges {
          node {
            products(first: 5) {
              edges {
                node {
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                  handle
                  title
                  id
                  totalInventory
                  images(first: 5) {
                    edges {
                      node {
                        originalSrc
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
    	}
      id
      title
      handle
      description
      images(first: 5) {
        edges {
          node {
            originalSrc
            altText
          }
        }
      }
      options {
        name
        values
        id
      }
      variants(first: 25) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            image {
              originalSrc
              altText
            }
            title
            id
            availableForSale
            priceV2 {
              amount
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];

  return product;
}

export async function createCheckout(id, quantity) {
  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
      }) {
        checkout {
          id
          webUrl
        }
      }
    }`;

  const response = await ShopifyData(query);

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];

  return checkout;
}

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
      variantId: "${item.id}",
      quantity:  ${item.variantQuantity}
    }`;
  });

  const query = `
  mutation {
    checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
      checkout {
        id
        webUrl
        lineItems(first: 25) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
}

export async function recursiveCatalog(cursor = "", initialRequest = true) {
  let data;

  if (cursor !== "") {
    const query = `{
      products(after: "${cursor}", first: 250) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }`;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;
      console.log("Cursor: ", cursor);

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  } else {
    const query = `{
      products(first: 250) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
    `;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  }
}

// export async function customerNewCreate(input) {
//   const query = `
//     mutation createCustomer("${input}": CustomerCreateInput!) {
//       customerCreate(input: "${input}") {
//         customerUserErrors {
//           code
//           field
//           message
//         }

//         customer {
//           id
//           email
//         }

//     }`

//   const response = await ShopifyData(query)

//   const checkout = response.data.checkoutCreate.checkout ? response.data.checkoutCreate.checkout : []

//   return checkout
// }

