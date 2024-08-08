export default `{
  allPage_blankss {
    edges {
      node {
        seo_title
        seo_description
        title
        sub_title
        blank {
          name
          href {
            ... on _ExternalLink {
              url
              target
            }
          }
        }
      }
    }
  }
}`;

export const campsBlankQuery = `{
  allPage_blankCamps {
    edges {
      node {
        seo_title
        seo_description
        title
        sub_title
        important
      }
    }
  }
}`;

export const clubsBlankQuery = `{
  allPage_blankClubs {
    edges {
      node {
        seo_title
        seo_description
        title
        sub_title
        important
      }
    }
  }
}`;
// export const campsBlankQuery = `{
//   allPage_blankCamps {
//     edges {
//       node {
//         seo_title
//         seo_description
//         title
//         sub_title
//         important
//         select {
//           ... on Page_blankCampSelect {
//             option {
//               ... on Camp {
//                 title
//                 date
//                 time
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }`

// export const clubsBlankQuery = `{
//   allPage_blankClubs {
//     edges {
//       node {
//         seo_title
//         seo_description
//         title
//         sub_title
//         important
//         select {
//           ... on Page_blankClubSelect {
//             option {
//               ... on Club {
//                 title
//                 date
//                 time
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }`
