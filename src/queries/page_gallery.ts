export default `{
 allPage_gallerys {
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
