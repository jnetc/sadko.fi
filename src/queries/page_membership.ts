export default `{
  allPage_memberships {
    edges {
      node {
        seo_title
        seo_description
        title
     		sub_title
        text
        secondary_button
        secondary_href {
          ...on _ExternalLink {
            url
          }
        }
      }
    }
  }
}`
