export default `{
  allPage_rulesAndPaymentss {
    edges {
      node {
        seo_title
        seo_description
        title
        sub_title
        rules {
          name
          href {
            ... on _ExternalLink {
              url
            }
          }
        }
      }
    }
  }
}`

export const repeatableQuery = `{
  allRulesAndPayments {
    edges {
      node {
        seo_title
        seo_description
        slug {
          ... on _ExternalLink {
            url
          }
        }
        title
        description
        text
      }
    }
  }
}`
