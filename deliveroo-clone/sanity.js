import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

const client = createClient({
    projectId: "vbh5bu05",
    dataset: "deliveroo-clone",
    useCdn: true,
    apiVersion: "2021-10-21",
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);

export default client;
