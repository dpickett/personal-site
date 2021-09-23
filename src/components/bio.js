/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            company
            companyUrl
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/dan-pickett.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
        <p>
          Written by <strong>{author.name}</strong> {author?.title || null} of <a href={author?.companyUrl}>{author?.company}</a>
        </p>

        <ul>
            <li>
              <a href={`https://twitter.com/${social?.twitter || ``}`}>
                Twitter
              </a>
            </li>
            <li>
              <a href={`https://github.com/${social?.github || ``}`}>
                GitHub
              </a>
            </li>
          </ul>
          </div>
      )}
    </div>
  )
}

export default Bio
