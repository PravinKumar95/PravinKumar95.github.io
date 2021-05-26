import * as React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
// styles

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle={'home page'} children={<h1>Children</h1>}></Layout>
  )
}

export default IndexPage
