import { client } from "@/lib/sanity";

export async function getSubCategories() {
  const query = `*[_type == "subcategory"]{
    subcategory,
  }`;
  const subcategories = await client.fetch(query);
  return subcategories;
}

export async function getProducts() {
  const query = `*[_type == "product" && isCatalogue != true]{
  productID,
  name,
  "category": category->category,
  "productType": productType->subcategory, 
  img,
  goldColor,
  createdAt,
  productDescription
}`;

  const products = await client.fetch(query);

  return products;
}
export async function getCatalogueProducts() {
  const query = `*[_type == "product" && isCatalogue == true]{
  productID,
  name,
  "category": category->category,
  "productType": productType->subcategory, 
  img,
  goldColor,
  createdAt,
  productDescription
}`;

  const products = await client.fetch(query);

  return products;
}

export async function getProductById(productID) {
  const query = `*[_type == "product" && productID == $productID][0]{
        productID,
        name,
        "productType": productType->subcategory, // Fix: 'subcategory' instead of 'name'
        metalType,
        goldPurity,
        goldColor,
        grossWeight,
         diamondClarity,
  diamondColor,
  diamondWeight,
        noDiamonds,
        sourceLink,
        productVideo,
        productDescription,
        imageLink,
        img,
        createdAt
    }`;

  const product = await client.fetch(query, { productID }); // Use parameterized query
  return product;
}
