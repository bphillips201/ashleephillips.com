import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import styles from "../styles/modules/page.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className={`${styles.page} chunk`}>
      <div className="wrapper wrapper-thin">
        <h1>Page not found</h1>
      </div>

      <div className="wrapper wrapper-small">
        <center>
          <p>
            That page has been removed (or never existed at all). Sorry about
            that.
          </p>

          <Link to="/" title="Go home">
            Go home
          </Link>
        </center>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
