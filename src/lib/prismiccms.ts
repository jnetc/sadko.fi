import * as prismic from "@prismicio/client";

const repositoryName = import.meta.env.PRISMIC_REPOSITORY_NAME;
const accessToken = import.meta.env.PRISMIC_ACCESS_TOKEN;


export async function CMS(lang: "fi" | "ru") {

  const client = prismic.createClient(repositoryName, {
    accessToken,
    // fetchOptions: { cache: "force-cache" },
    defaultParams: { lang },
  });

  const response = await client.getAllByType("clubs", {
    graphQuery: `{
      allClubss {
        edges {
          node {
            title
            address
            description
          }
        }
      }
    }`,
  });

  return response;
}
