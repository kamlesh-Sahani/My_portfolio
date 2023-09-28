import { createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId:"",
    dataset: '',
    useCdn:false,
    apiVersion: '2022-02-01',
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
