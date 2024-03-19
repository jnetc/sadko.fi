export default `{
  allPage_articless {
    edges {
      node {
        seo_title
        seo_description
        title
        description
         articles {
            article {
            ... on  Articles {
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
