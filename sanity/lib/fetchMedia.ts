import { client } from "./client"; // Double-check this points correctly to your client.ts file

/**
 * TEST FUNCTION: Fetches and logs every asset in the DB.
 * Call this once inside a layout or page to verify your connection!
 */
export async function testSanityConnection() {
  const query = `*[_type == "mediaAsset"]{
    title,
    "slug": slug.current,
    assetType,
    "imageUrl": imageFile.asset->url,
    "videoUrl": videoFile.asset->url
  }`;

  try {
    const data = await client.fetch(query);
    console.log("================ SANITY FETCH SUCCESS ================");
    console.log(JSON.stringify(data, null, 2));
    console.log(`Successfully fetched ${data.length} media assets.`);
    console.log("======================================================");
    return data;
  } catch (error) {
    console.error("================ SANITY FETCH FAILED =================");
    console.error(error);
    console.log("======================================================");
    return [];
  }
}

/**
 * PRODUCTION FUNCTION: Fetches a single specific image or video by its slug handle
 * Perfect for dropping directly into individual layout components.
 */
export async function getMediaAssetBySlug(slug: string) {
  const query = `*[_type == "mediaAsset" && slug.current == $slug][0]{
    title,
    assetType,
    "url": select(
      assetType == "image" => imageFile.asset->url,
      assetType == "video" => videoFile.asset->url
    )
  }`;
  
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error(`Error fetching media asset with slug: ${slug}`, error);
    return null;
  }
}