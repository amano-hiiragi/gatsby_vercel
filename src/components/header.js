import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header class="header">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 class="header__title">
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      {/* <div>
        <p><Link to="/" style={{ float: `right`, textDecoration: `none`, }}>About</Link></p>
      </div> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
