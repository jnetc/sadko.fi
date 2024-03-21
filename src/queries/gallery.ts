export default `{
 allGallerys {
    edges {
      node {
        seo_title
        seo_description
        title
     		description
       	folder {
          href {
            ...on _ExternalLink {
              url
              target
            }
          }
          name
        }

      }
    }
  }
}`
