import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

import Header from "./header"
import "./layout.css"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const ChildContainer = styled.div`
  flex-grow: 1;
  padding: 1rem;
  h1 {
    text-align: center;
  }
  /* margin-top: 97px; */
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>  
        {/* < Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
        <ChildContainer>{children}</ChildContainer>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </PageContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout