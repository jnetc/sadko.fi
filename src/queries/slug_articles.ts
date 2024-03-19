export default `{
  allCampss {
    edges {
      node {
        seo_title
        seo_description
        slug {
          ... on _ExternalLink {
            url
          }
        }
        image
        title
        description
        author
        text
      }
    }
  }
}`
