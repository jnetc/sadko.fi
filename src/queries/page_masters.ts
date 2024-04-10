export default `{
  allPage_masterss {
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
  allMasters {
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
        teacher
        date
        time
        age
        price
        address
        phone
        email
        has_blank
        facebook {
          ... on _ExternalLink {
            url
            target
          }
        }
        instagram {
          ... on _ExternalLink {
            url
            target
          }
        }
        text
      }
    }
  }
}`
