export default `{
  allPage_eventss {
     edges {
      node {
        seo_title
        seo_description
        title
        sub_title
      }
    }
  }
}`;

export const repeatableQuery = `{
  allEvents {
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
        has_blank
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
}`;
