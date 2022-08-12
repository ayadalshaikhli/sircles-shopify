<div class="card">
	<div class="card-header">
		<!-- Name -->
		<div class="row product_info">
			<div class="col-lg-8 col-sm-7">
				<h3>Product Name</h3>
			</div>
			<div class="col-lg-3 col-sm-3">
				<h3 class="float-right">$XX.00</h3>
			</div>
			<div class="col-lg-1 col-sm-2">
				<button type="button" class="btn float-right" id="x-btn">X</button>
			</div>
		</div>
	</div>
	<div class="card-body">
		<div class="row">
			<!-- Product Images -->
			<div class="col-lg-7 col-md-6 col-12">
				<div class="row">
					<div class="col-lg-12 mx-auto text-center">
						<div id="main-image-content-box">
							<img class="main_image" src="assets/images/products/lavendar.jpg" title="Main Image">
						</div>
						<div id="player-carousel" class="carousel" data-autoplay="false" data-items="3" data-lightbox="gallery">
							<!-- portfolio item -->
							<div class="portfolio-item img-zoom ct-photography ct-marketing ct-media">
								<div class="portfolio-item-wrap">
									<div class="portfolio-image ">
										<a href="#"><img src="assets/images/products/lavendar.jpg" alt=""></a>
									</div>
									<div class="img_to_main portfolio-description" data-img_url="assets/images/products/lavendar.jpg">
										
									</div>
								</div>
							</div>
							<!-- portfolio item -->
							<div class="portfolio-item img-zoom ct-photography ct-marketing ct-media">
								<div class="portfolio-item-wrap">
									<div class="portfolio-image">
										<a href="#"><img src="assets/images/products/lavendar_4.jpg" alt=""></a>
									</div>
									<div class="img_to_main portfolio-description" data-img_url="assets/images/products/lavendar_4.jpg">
										
									</div>
								</div>
							</div>
							<!-- portfolio item -->
							<div class="portfolio-item img-zoom ct-photography ct-marketing ct-media">
								<div class="portfolio-item-wrap">
									<div class="portfolio-image">
										<a href="#"><img src="assets/images/products/lavendar_art.jpg" alt=""></a>
									</div>
									<div class="img_to_main portfolio-description" data-img_url="assets/images/products/lavendar_art.jpg">
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
			<!--- Product Info -->
			<div class="col-lg-5 col-md-6 col-12">
				<!-- Category -->
				<div class="row product_info">
					<div class="col-7">
						<h4>Category</h4>
					</div>
					<div class="col-5">
						<span class="float-right"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></span>
					</div>
				</div>
				
				<!-- Sizes -->
				<div class="row justify-content-between product_info">
					<div class="col-md-3 col-sm-4 col-12">
						<h4>Sizes:</h4>
					</div>
					<div class="col-md-9 col-sm-8 col-12">
						<div class="sizes_btn_group">
							<button class="btn sizes_btn" type="button">S</button>
							<button class="btn sizes_btn" type="button">M</button>
							<button class="btn sizes_btn" type="button">L</button>
							<button class="btn sizes_btn" type="button">XL</button>
							<button class="btn sizes_btn" type="button">2XL</button>
						</div>
					</div>
				</div>
				
				<!-- Color -->
				<div class="row justify-content-between product_info">
					<div class="col-md-4 col-sm-4 col-12">
						<h4>Color:</h4>
					</div>
					<div class="col-md-7 col-sm-8 col-12">
						<select name="colors">
							<option value="black">Black</option>
							<option value="white">White</option>
							<option value="red">Red</option>
							<option value="blue">Blue</option>
							<option value="green">Green</option>
						</select>
					</div>
				</div>
				
				<!-- Quantity -->
				<div class="row justify-content-between product_info">
					<div class="col-lg-4 col-md-5 col-sm-6 col-12">
						<h4>Quantity:</h4>
					</div>
					<div class="col-lg-6 col-md-7 col-sm-6 col-12">
						<td class="cart-product-quantity">
							<div class="quantity float-right">
								<input type="button" class="minus" value="-">
								<input type="text" class="qty text-center" value="2" name="quantity">
								<input type="button" class="plus" value="+">
							</div>
						</td>
					</div>
				</div>
				
				<!-- Add to Cart -->
				<div class="row product_info">
					<div class="col-12">
						<button class="btn float-right" id="add-to-cart-portal-btn">Add to Cart</button>
					</div>
				</div>
			
				<!-- Description -->
				<div class="row">
					<div class="col-12">
						<h4>Description</h4>
					</div>
					<div class="col-12">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
				</div>
			
				<!-- Reviews -->
				<div class="row">
					<div class="col-12">
						<h4>Reviews</h4>
					</div>
					<div class="col-12">
						<p>Lorem ipsum dolor sit amet, tellus in metus vulputate eu. Justo nec ultrices dui sapien eget mi proin sed.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>



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

// async function addAnotherProduct(miki) {
  //   const URLL = `https://${domain}/admin/api/2022-07/products.json`;
  //   const mark = {
  
  //     endpoint: URLL,
  //     method: "POST",
  //     headers: { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'X-Shopify-Access-Token': storeApiKey + ':' + storeApiPass
  //   },
  //     body: JSON.stringify({miki})
  //     };
  
  //     try{
  //       const dataa = await fetch(URLL, mark).then((response) => {
  //       return response.json()
  //     });
  //     return dataa
  //     } catch (error){
  //       throw new Error("no miki")
  //     }
  // }
  
  // export async function newProduct(){
  //   const query = `
  //   mutation {
  //     productCreate(input: {
  //       title: "Shiny new product"
  //       body_html: "<p>This is the product body</p>"
  //       vendor: "My vendor"
  //       product_type: "My type"
  //       published: true
  //     }) {
  //       product {
  //         title
  //       }
  //     }
  //   }`;
  //   const response = await addAnotherProduct(miki);
  
  //   const newproduct = response.data.productCreate.product
  //     ? response.data.productCreate.product
  //     : [];
  
  //   return newproduct;
  // }

// Admin API




// const url = `https://${storeApiKey}:${storeApiPass}@${domain}/admin/api/2021-07/graphql.json`;

// export async function mark(query, variables)  {
//   const {
//     data: { data, errors },
//   } = await axios({
//     url: url,
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//     },
//     data: {
//       query,
//       variables,
//     },
//   });

//   if (errors) {
//     console.error(errors);
//     throw new Error("Error accessing graphql");
//   }

//   return data;
// };

// async function updateInventoryLevel(id, delta) {
//   const query = `
//   mutation inventoryAdjustQuantity($input: InventoryAdjustQuantityInput!) {
//         inventoryAdjustQuantity(input: $input) {
//           inventoryLevel {
//             available
//           }
//           userErrors {
//             field
//             message
//           }
//         }
//       }`;

//   const variables = {
//     input: {
//       availableDelta: delta,
//       inventoryLevelId: id,
//     },
//   };

//   try {
//     const res = await sendQuery(query, variables);
//     return {
//       statusCode: 200,
//       body: JSON.stringify(res),
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify(error),
//     };
//   }
// }