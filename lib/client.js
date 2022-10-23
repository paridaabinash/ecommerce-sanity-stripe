import SanityClient from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
    projectId: '08q2s463',
    dataset: 'production',
    apiVersion: '2022-10-20',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client); // sanity

export const urlFor = (source)=> builder.image(source);