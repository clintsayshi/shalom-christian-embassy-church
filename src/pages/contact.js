import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Banner from "../components/banner";
import Layout from "../components/layout";

function Contact() {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "contact" }, sourceInstanceName: { eq: "content" }) {
        childMarkdownRemark {
          frontmatter {
            title
            heroImage
            snippet
            name
            physicalAddress
            phoneNumbers {
              number
              numberholder
            }
            email
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <Banner title={data.title} img="../images/hero-bg.jpg" />

      <section>
        <div className="container mx-auto flex flex-col sm:items-center">
          <h2 className="py-6 sm:py-10 text-2xl text-center">{data.snippet}</h2>

          <div className="w-full sm:w-10/12 mx-auto flex flex-col sm:flex-row gap-4 md:gap-4 sm:gap-8 justify-between">
            <article className="flex flex-col sm:flex-1 gap-1 items-center">
              <FiPhone className="text-xl mb-4 text-secondary-color" />
              <h4 className="text-base font-medium uppercase text-secondary-color">
                Phone
              </h4>

              {React.Children.toArray(
                data.phoneNumbers.map((item) => (
                  <span className="text-sm">{item.number}</span>
                ))
              )}
            </article>
            <article className="flex flex-col sm:flex-1 gap-1 items-center">
              <FiMapPin className="text-xl mb-4 text-secondary-color" />
              <h4 className="text-base font-medium uppercase text-secondary-color">
                Address
              </h4>
              <address className="text-sm text-center">
                {data.physicalAddress}
              </address>
            </article>
            <article className="flex flex-col sm:flex-1 gap-1 items-center">
              <FiMail className="text-xl mb-4 text-secondary-color" />
              <h4 className="text-base font-medium uppercase text-secondary-color">
                Email
              </h4>
              <span className="text-sm">{data.email}</span>
            </article>
          </div>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8 bg-gray-100"></div>

      <section>
        <div className="container mx-auto flex flex-col items-center">
          <h4 className="grow sm:w-9/12 pb-6 text-xl font-medium text-center">
            Feel free to leave us a message
          </h4>

          <form className="w-full flex flex-col items-center gap-4">
            <input
              className="w-full sm:w-96 py-2 px-4 rounded-sm border border-gray-200"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className="w-full sm:w-96 py-2 px-4 rounded border border-gray-200"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              className="w-full sm:w-96 py-2 px-4 rounded-sm border border-gray-200"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              className="w-full sm:w-96 h-32 max-h-48 py-2 px-4 rounded-sm border border-gray-200"
              name="message"
              placeholder="Message"
              required
            ></textarea>

            <button className="py-2 px-4 bg-gray-800 text-white bg-secondary-color rounded-sm">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8"></div>
    </Layout>
  );
}

export default Contact;
