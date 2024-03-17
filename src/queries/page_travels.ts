export default `{
  allPage_travelss {
    edges {
      node {
        seo_title
        seo_description
        title
        description
         articles {
            article {
            ... on  Travels {
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
