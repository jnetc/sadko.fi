// Manual for Prismic richtext - v2
// https://prismic.io/docs/technical-reference/prismicio-richtext
import * as prismic from "@prismicio/client";
import * as prismicR from "@prismicio/richtext";
import { marked } from "marked";
// Types
import type { RichTextField } from "@prismicio/client";

import type {Pages, Links, TypeLanguages} from "@Types";

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
export async function singleWithLinks(query: string, page: Pages, link: Links, lang: TypeLanguages ) {

  const client = prismic.createClient(repositoryName, {
    accessToken,
    // fetchOptions: { cache: "force-cache" },
    defaultParams: { lang },
  });

  const response = await client.getSingle(page, {
    fetchLinks: [`${link}.title`, `${link}.description`, `${link}.image`, `${link}.slug`, `${link}.text`],
    graphQuery: query,
  });

  return response;
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
