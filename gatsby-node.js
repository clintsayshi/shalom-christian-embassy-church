const path = require("path");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.onCreateNode = ({ node, actions }) => {
  fmImagesToRelative(node); // convert image paths for gatsby images
};

/*
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const eventTemplate = path.resolve("./src/templates/event-template.js");

    resolve(
      graphql(
        `
          {
            events: allStoryblokEntry(
              filter: { field_component: { eq: "project" } }
            ) {
              edges {
                node {
                  id
                  name
                  slug
                  full_slug
                  field_component
                  content
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const allEvents = result.data.events.edges;

        allProjects.forEach((entry) => {
          // 👇 the name of content type
          if (entry.slug !== "event") {
            const page = {
              path: `/${entry.node.full_slug}`,
              component: eventTemplate,
              context: {
                story: entry.node,
              },
            };
            createPage(page);
          }
        });
      })
    );
  });
}; */
