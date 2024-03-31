// Manual for Prismic richtext - v2
// https://prismic.io/docs/technical-reference/prismicio-richtext
import * as prismic from "@prismicio/client";
import * as prismicR from "@prismicio/richtext";
import { marked } from "marked";
// Types
import type { RichTextField } from "@prismicio/client";

import type {Pages, Relationship, TypeLanguages} from "@Types";

const repositoryName = import.meta.env.PRISMIC_REPOSITORY_NAME;
const accessToken = import.meta.env.PRISMIC_ACCESS_TOKEN;


export async function single(query: string, page: Pages, lang: TypeLanguages ) {

  // const pages = ["home", "schedule", "about", "membership", "blank-hobby", "blank-camp", "blank-membership"]

  const client = prismic.createClient(repositoryName, {
    accessToken,
    // fetchOptions: { cache: "force-cache" },
    defaultParams: { lang },
  });

  const response = await client.getSingle(page, {
    graphQuery: query,
  });

  return response;
}
export async function single2(query: string, page: Pages, lang: TypeLanguages ) {

  // const pages = ["home", "schedule", "about", "membership", "blank-hobby", "blank-camp", "blank-membership"]

  const client = prismic.createClient(repositoryName, {
    accessToken,
    // fetchOptions: { cache: "force-cache" },
    defaultParams: { lang },
  });

  const response = await client.getSingle(page, {
    graphQuery: query,
  });

  return response;
}
export async function singleWithLinks(query: string, page: Pages, link: Relationship, lang: TypeLanguages) {


  let queryFetchLink;

  if (["clubs", "camps", "masters", "courses", "festivals", "celebrations", "concerts", "travels", "projects", "useful", "parents", "articles"].includes(link)) {
    queryFetchLink = [`${link}.title`, `${link}.description`, `${link}.image`, `${link}.slug`, `${link}.text`]
  } else if (link === "teacher") {
    queryFetchLink = [`${link}.image`, `${link}.color`, `${link}.name`, `${link}.description`, `${link}.slug`, `${link}.text`, `${link}.links`]
  } else if (link === "feedback") {
    queryFetchLink = [ `${link}.color`, `${link}.name`, `${link}.slug`, `${link}.text.rich-text-field`]
  }

  const client = prismic.createClient(repositoryName, {
    accessToken,
    // fetchOptions: { cache: "force-cache" },

    defaultParams: { lang },
  });

  const response = await client.getSingle(page, {
    fetchLinks: queryFetchLink,
    graphQuery: query,
  });
  // console.log("RESPONCE_", response.data.feedbacks[2].feedback.data);
  // console.log("RESPONCE_", response.data.teachers[0].teacher.data);


  return response;
}

export async function repeatable(query: string, page: Pages, lang?: TypeLanguages, filters?: {path: string, value: string| number| boolean}) {

  const client = prismic.createClient(repositoryName, {
    accessToken,
    // fetchOptions: { cache: "force-cache" },
    defaultParams: { lang },
  });

  const response = await client.getAllByType(page, {
    graphQuery: query,
    filters: filters === undefined ? filters : [prismic.filter.at(filters.path, filters.value)],
    orderings: [{ field: "document.last_publication_date", direction: "desc" } ],
  });

  return response;
}
// export async function repeatable2(query: string, page: Pages, lang?: TypeLanguages,) {

//   const client = prismic.createClient(repositoryName, {
//     accessToken,
//     // fetchOptions: { cache: "force-cache" },
//     defaultParams: { lang },
//   });

//   const response = await client.getAllByType(page, {
//     graphQuery: query,
//     filters: [prismic.filter.at('my.teacher.carousel_visible', false)],
//     orderings: [{ field: "document.last_publication_date", direction: "desc" } ],
//   });

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

///////////////// MARKDOWN SERIALIZER ////////////////
// Used to convert links into URLs.
const linkResolver = (doc: any) => `/${doc.uid}`;

// An object mapping rich text block types to Markdown.
const markdownSerializer = prismicR.wrapMapSerializer({
  heading1: ({ children }) => `# ${children.join("")}\n\n`,
  heading2: ({ children }) => `## ${children.join("")}\n\n`,
  heading3: ({ children }) => `### ${children.join("")}\n\n`,
  heading4: ({ children }) => `#### ${children.join("")}\n\n`,
  heading5: ({ children }) => `##### ${children.join("")}\n\n`,
  heading6: ({ children }) => `###### ${children.join("")}\n\n`,
  paragraph: ({ children }) => `${children.join("")}\n\n`,
  preformatted: ({ text }) => `\`\`\`\n${text}\n\`\`\`\n\n`,
  strong: ({ children }) => `**${children.join("")}**`,
  em: ({ children }) => `_${children.join("")}_`,
  listItem: ({ children }) => `- ${children.join("")}\n`,
  oListItem: ({ children }) => `1. ${children.join("")}\n`,
  list: ({ children }) => `${children.join("")}\n`,
  oList: ({ children }) => `${children.join("")}\n`,
  image: ({ node }) =>
    node.linkTo
      ? `[![${node.alt}](${node.url})](${node.linkTo.url})\n\n`
      : `![${node.alt}](${node.url})\n\n`,
  embed: ({ node }) => `${node.oembed.html}\n\n`,
  hyperlink: ({ node, children }) =>
    `[${children.join("")}](${prismic.asLink(node.data, { linkResolver })})`,
  label: ({ children }) => children.join(""),
  span: ({ text }) => text.replace("\n", "<br/>"),
});

// Convert a rich text or title field into Markdown using the Markdown
// serializer from above.

export async function toMarkdown(array: RichTextField) {
  const markdown = prismicR.serialize(array, markdownSerializer).join("");
  const md = await marked.parse(markdown);
  return md.replaceAll('<br/>', '')
}
