import * as prismic from "@prismicio/client";
import type {Pages, TypeLanguages} from "@Types";

const repositoryName = import.meta.env.PRISMIC_REPOSITORY_NAME;
const accessToken = import.meta.env.PRISMIC_ACCESS_TOKEN;


export async function single(query: string, page: Pages,lang: TypeLanguages ) {

  // const pages = ["home", "schedule", "about", "membership", "blank-hobby", "blank-camp", "blank-membership"]

  const client = prismic.createClient(repositoryName, {
    accessToken,
    // fetchOptions: { cache: "force-cache" },
    defaultParams: { lang },
  });

  const response = await client.getAllByType(page, {
    graphQuery: query,
  });

  return response[0].data;

}
export async function repeatable(query: string, page: Pages, lang?: TypeLanguages,) {

  const client = prismic.createClient(repositoryName, {
    accessToken,
    // fetchOptions: { cache: "force-cache" },
    defaultParams: { lang },
  });

  const response = await client.getAllByType(page, {
    graphQuery: query,
  });

  return response;
}
// export async function repeatable(query: string, page: Pages, lang?: TypeLanguages,) {

//   function clientFn(lang?: TypeLanguages) {
//     // Check for language, because getStaticPaths we can pass it
//     // to generate pages [slug]
//     if (!lang) {
//       return prismic.createClient(repositoryName, {
//         accessToken,
//       });
//     }
//     return prismic.createClient(repositoryName, {
//       accessToken,
//       // fetchOptions: { cache: "force-cache" },
//       defaultParams: { lang },
//     });
//   }

//   const client = clientFn(lang);

//   const response = await client.getAllByType(page, {
//     graphQuery: query,
//   });

//   // console.log("CMS",response);

//   return response;
// }
export async function staticPath( query: string, page: Pages) {

  const client = prismic.createClient(repositoryName, {
    accessToken,

  });

  const response = await client.getAllByType(page, {
    graphQuery: query,
  });
  return response;

}
