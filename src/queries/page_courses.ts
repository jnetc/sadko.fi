export default `{
  allPage_coursess {
    edges {
      node {
        seo_title
        seo_description
        title
        description
         articles {
            article {
            ... on  Courses {
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
