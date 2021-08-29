import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import banner from "../images/banner.png"

const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "banner.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage 
        Tag="header" 
        fluid={data.file.childImageSharp.fluid}
        style={{ height: "50vh" }}
      />
    </Layout>
  )
}

export default IndexPage
