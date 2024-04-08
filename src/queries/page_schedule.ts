export default `{
  allPage_schedules {
    edges {
      node {
        seo_title
        seo_description
        title
        subtitle
        text
      }
    }
  }
}`

export const repeatableQuery = `{
  allSchedules {
    edges {
      node {
        name
        address
        href {
          ... on _ExternalLink {
            url
          }
        }
        monday {
          name
          info
          time
          age
          price
          label
        }
        tuesday {
          name
          info
          time
          age
          price
          label
        }
        wednesday {
          name
          info
          time
          age
          price
          label
        }
        thursday {
          name
          info
          time
          age
          price
          label
        }
        friday {
          name
          info
          time
          age
          price
          label
        }
        saturday {
          name
          info
          time
          age
          price
          label
        }
        sunday {
          name
          info
          time
          age
          price
          label
        }
      }
    }
  }
}
`
