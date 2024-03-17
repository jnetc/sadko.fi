export default `{
  allPage_concertss {
    edges {
      node {
        seo_title
        seo_description
        title
        description
         articles {
            article {
            ... on  Concerts {
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
