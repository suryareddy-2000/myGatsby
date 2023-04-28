// Step 1: Import React
import * as React from 'react'
import {Link,useStaticQuery,graphql} from 'gatsby'
import Layout from './layout'
// Step 2: Define your component
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description,
          port
        }
      }
    }
  `)

  return (
    <Layout pageTitle="Home">
      <main>
        <h1>Welcome to my Gatsby</h1>
        <p>{data.site.siteMetadata.port}</p>
    </main>
    </Layout>
    
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
