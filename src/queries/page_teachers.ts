export default `{
  allPage_teacherss {
    edges {
      node {
        seo_title
        seo_description
        title
        description
      }
    }
  }
}`

export const repeatableQuery = `{
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
