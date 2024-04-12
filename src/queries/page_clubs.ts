export default `{
  allPage_clubss {
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
  allClubs {
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
