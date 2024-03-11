// import { lang } from '@Layouts//Layout.astro';
export default `{
  allMasterss {
    edges {
      node {
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
