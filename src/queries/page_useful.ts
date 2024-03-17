export default `{
  allPage_usefulss {
    edges {
      node {
        seo_title
        seo_description
        title
        description
         articles {
            article {
            ... on  Useful {
              slug {
                ... on _ExternalLink {
                  url
                }
              }
              image
              title
              description
              text
            }
          }
        }
      }
    }
  }
}`
