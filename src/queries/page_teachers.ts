export default `{
  allPage_teacherss {
    edges {
      node {
        seo_title
        seo_description
        title
        sub_title
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
        chips {
          club
        }
      }
    }
  }
}`
