export default `{
  allFeedbacks_pages {
    edges {
      node {
        seo_title
        seo_description
        title
        sub_title
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
