export default `{
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
