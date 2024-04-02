export default `{
  allSchedules {
    edges {
      node {
        place
        href {
          ... on _ExternalLink {
            url
          }
        }
        monday {
          name
          time
          age
          price
          label
        }
        tuesday {
          name
          time
          age
          price
          label
        }
        wednesday {
          name
          time
          age
          price
          label
        }
        thursday {
          name
          time
          age
          price
          label
        }
        friday {
          name
          time
          age
          price
          label
        }
        saturday {
          name
          time
          age
          price
          label
        }
        sunday {
          name
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
