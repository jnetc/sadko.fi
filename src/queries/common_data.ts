export default `{
  allCommon_datas {
    edges {
      node {
        notification
        description
        address
        goelocation {
          ...on _ExternalLink {
            url
          }
        }
        phone
        telegram {
          ...on _ExternalLink {
            url
          }
        }
        whatsapp {
          ...on _ExternalLink {
            url
          }
        }
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
        tiktok {
          ...on _ExternalLink {
            url
          }
        }
      }
    }
  }
}`
