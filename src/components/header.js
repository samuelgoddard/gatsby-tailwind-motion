import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
import Nav from '../components/nav'

const Header = ({ siteTitle }) => (
  <header className="py-8 md:py-16">
    
    <div className="container">
      <div className="flex flex-wrap items-center mb-4">
        <motion.button
          className="w-5 h-5 mr-3 block bg-black rounded"
          animate={{ rotate: 180 }}
          transition={{
            loop: Infinity,
            duration: 2,
            ease: "anticipate"
          }}
        />

        <Link className="font-bold block text-lg md:text-xl inline-block" to="/">
          {siteTitle}
        </Link>
      </div>

      <Nav />

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
