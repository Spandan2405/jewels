import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const useCdn = "true";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
});

const builder = imageUrlBuilder(client);

// options is optional. Passing nothing = identical to old behavior.
export const urlFor = (source, options) => {
  let img = builder.image(source);
  if (options?.width) img = img.width(options.width);
  if (options?.height) img = img.height(options.height);
  if (options?.width || options?.height) {
    img = img.auto("format").quality(options.quality || 75);
  }
  return img.url();
};
