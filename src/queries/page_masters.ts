export default `{
  allPage_masterss {
    edges {
      node {
        seo_title
        seo_description
        title
        description
         articles {
            article {
            ... on  Masters {
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
