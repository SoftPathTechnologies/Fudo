import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "7avh6pzi",
    dataset: 'production',
    apiVersion: '2022-11-22',
    useCdn: true,
    token: "skDTegbFA22peRZNNinEOpqIS2xejONF9eaBrsOMrQGrYahbnM0W2h1k0NfSAFwQV5UHKmbtoacwQ2zoIfMhvcGpc2xBLwptqwZzs3f2ODQEaZyEopw4OLUEdYGz71jFunGUz0uNUy4JYO3QW4PqQwJDeF1FuVsypjbofpAYp7mjLvobdTs8"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);