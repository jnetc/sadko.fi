export default `{
  allTeachers {
    edges {
      node {
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
}`
