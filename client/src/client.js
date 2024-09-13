import { createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = createClient({
    projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:process.env.REACT_APP_SANITY_DATASET,
    useCdn:false,
    apiVersion: '2022-02-01',
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
