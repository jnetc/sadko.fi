export default `{
  allTeacherss {
    edges {
      node {
        seo_title
        seo_description
        title
        description
        teachers {
          teacher {
            ... on Teacher {
              image
              color
              name
              description
              slug {
                ... on _ExternalLink {
                  url
                }
              }
              text
              links {
                link_name
                link {
                  ... on _ExternalLink {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`
