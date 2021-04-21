import React from "react"

import Layout from "../components/layout"

import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Footer></Footer>
  </Layout>
)

export default IndexPage