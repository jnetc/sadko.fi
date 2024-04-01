export default `{
  allCommon_datas {
    edges {
      node {
        address
        goelocation {
          ...on _ExternalLink {
            url
          }
        }
        phone
        whatsapp
        email
        facebook {
          ...on _ExternalLink {
            url
          }
        }
        instagram {
          ...on _ExternalLink {
            url
          }
        }
      }
    }
  }
}`
