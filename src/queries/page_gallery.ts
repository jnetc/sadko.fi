export default `{
 allPage_gallerys {
    edges {
      node {
        seo_title
        seo_description
        title
     		sub_title
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
