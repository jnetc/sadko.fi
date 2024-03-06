// export default `{
//       allClubss {
//         edges {
//           node {
//             title
//             address
//             description
//           }
//         }
//       }
//     }`;
export default `{
  allHomes {
    edges {
      node {
        body {
          ... on HomeBodyHero {
            type
            primary {
              heading
              text
              primary_button
              secondary_button
              primary_href {
                ...on _ExternalLink {
                  url
                }
              }
              secondary_href {
                ...on _ExternalLink {
                  url
                }
              }
            }
          }
          ... on HomeBodyActivities {
            type
            primary {
              heading
              text
            }
            fields {
              slug {
                ...on _ExternalLink {
                  url
                }
              }
              heading
              text
              icon
            }
          }
          ... on HomeBodyWelcome {
            type
            primary {
              heading
              text
              slug {
                ...on _ExternalLink {
                  url
                }
              }
              secondary_button
            }
            fields {
              amount
              text
            }
          }
          ... on HomeBodyOffer {
            type
            primary {
              heading
              text
              slug {
                ...on _ExternalLink {
                  url
                }
              }
              primary_button
            }
          }
          ... on HomeBodyGallery {
            type
            primary {
              secondary_button
            }
            fields {
              image
            }
          }
          ... on HomeBodyTeachers {
            type
            primary {
              heading
              text
            }
            fields {
             slug {
                ...on _ExternalLink {
                  url
                }
              }
              heading
              text
              image
            }
          }
          ... on HomeBodyFaq {
            type
            primary {
              heading
              text
            }
            fields {
              question
              answer
            }
          }
          ... on HomeBodyFeedbacks {
            type
            primary {
              heading
              text
            }
            fields {
              heading
              text
            }
          }
        }
      }
    }
  }
}`
