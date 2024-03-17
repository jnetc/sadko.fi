export default `{
  allPage_projectss {
    edges {
      node {
        seo_title
        seo_description
        title
        description
         articles {
            article {
            ... on  Projects {
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
