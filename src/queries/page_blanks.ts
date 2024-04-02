export default `{
  allPage_blankss {
    edges {
      node {
        seo_title
        seo_description
        title
        description
        blank {
          name
          href {
            ... on _ExternalLink {
              url
              target
            }
          }
        }
      }
    }
  }
}`
