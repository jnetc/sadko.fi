export default `{
  allPage_clubss {
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
        primary_button
        primary_href {
          ... on _ExternalLink {
            url
            target
          }
        }
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
