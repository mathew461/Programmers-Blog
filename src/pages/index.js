import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import SEO from "../components/seo"

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
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
            date
          }
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="Home" />
      <BackgroundImage 
        Tag="header" 
        fluid={data.file.childImageSharp.fluid}
        style={{ height: "50vh" }}
      />
      <BlogPreview>
        <h2>Blog Posts</h2>
        {data.allMdx.nodes.map(post => (
          <h3>
              <Link to={post.frontmatter.slug}>
                <h2>{post.frontmatter.title}</h2>
                <p>{post.frontmatter.date}</p>
              </Link>       
          </h3>
        ))}
      </BlogPreview>
    </div>
  )
}

export default IndexPage

const BlogPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  a {
    margin: 1rem;
    background: #f4f4f4;
    color: #000000;
    text-decoration: none;
    display: block;
    padding: 1rem;
    border-radius: 1rem;
  }
  a:hover {
    background: #e4e4e4
  }
  h2 {
      margin-bottom: 0;
  }
  p {
      color: #777777;
      font-size: .8rem;
      font-style: italic;
  }
`