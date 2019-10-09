import { Link } from "gatsby"
import React from "react"
import { motion } from 'framer-motion'

const Header = () => (
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
          Gatsby x Tailwind x Framer Motion
        </Link>
      </div>

      <nav>
        <ul className="flex flex-wrap">
          <li>
            <Link
              activeClassName="is--active"
              className="link mr-3"
              to="/">
                Home
            </Link>
          </li>
          <li>
            <Link
              activeClassName="is--active"
              className="link mr-3"
              to="/about">
                About
            </Link>
          </li>
          <li>
            <a
              className="link mr-3"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/samuelgoddard/gatsby-tailwind-motion">
                Github
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
