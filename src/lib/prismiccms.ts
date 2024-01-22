import * as prismic from "@prismicio/client";

const repositoryName = import.meta.env.PRISMIC_REPOSITORY_NAME;
const accessToken = import.meta.env.PRISMIC_ACCESS_TOKEN;


export async function CMS(lang: "fi" | "ru", query: string) {

  const client = prismic.createClient(repositoryName, {
    accessToken,
    // fetchOptions: { cache: "force-cache" },
    defaultParams: { lang },
  });

  const response = await client.getAllByType("home", {
    graphQuery: query,
  });

  return response[0].data as const;
}
