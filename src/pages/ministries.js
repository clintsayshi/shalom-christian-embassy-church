import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import Banner from "../components/banner";
import Layout from "../components/layout";

function Ministries() {
  //
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "ministries" }, sourceInstanceName: { eq: "content" }) {
        childMarkdownRemark {
          frontmatter {
            title
            heroImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            snippet
            ministries {
              desc
              name
            }
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter;

  const heroImage = getImage(data.heroImage);

  const ministries = data.ministries.map((item) => {
    const id = item.name.replace(" ", "-").toLowerCase();
    return {
      name: item.name,
      desc: item.desc,
      id,
    };
  });

  return (
    <Layout>
      <Banner title={data.title} image={data.heroImage} />

      <div className="container mx-auto h-px sm:my-4"></div>

      <section className="container mx-auto sm:flex">
        <div className="w-56 h-screen hidden sm:flex flex-col justify-start">
          <nav className="w-full  sticky top-0">
            {React.Children.toArray(
              ministries.map((item) => {
                return (
                  <a
                    className="block p-2 capitalize font-medium hover:bg-gray-100"
                    href={`#${item.id}`}
                  >
                    {item.name}
                  </a>
                );
              })
            )}
          </nav>
        </div>

        <div className="sm:w-2/3 sm:py-4 flex flex-col gap-4">
          {React.Children.toArray(
            ministries.map((item) => (
              <article id={item.id} className="py-4 sm:pl-4 sm:shadow">
                <h4 className="mb-2 text-2xl">{item.name}</h4>
                <p className="text-sm ">{item.desc}</p>
              </article>
            ))
          )}
        </div>
      </section>

      <div className="container mx-auto h-px my-8"></div>
    </Layout>
  );
}

export default Ministries;
