export default `{
  allFeedbacks_pages {
    edges {
      node {
        seo_title
        seo_description
        title
        description
      }
    }
  }
}`

export const repeatableQuery = `{
  allFeedbacks {
    edges {
      node {
        color
        name
        slug {
          ... on _ExternalLink {
            url
          }
        }
        text
      }
    }
  }
}`
