export default `{
  allPage_articless {
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
  allArticles {
    edges {
      node {
        seo_title
        seo_description
        slug {
          ...on _ExternalLink {
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
