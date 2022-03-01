import React from "react"
//import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {

    /*
    const { author } = useStaticQuery(graphql`
      query BioQuery {
        # if there was more than one user, this would need to be filtered
        author: wpUser {
          firstName
          twitter: name
          description
          avatar {
            url
          }
        }
      }
    `)
  */
   
  
    return (
        <footer className="footer">
        © {new Date().getFullYear()}, Paid for by The U.S. Sex Workers' Union and the Weed Collective  
      </footer>
    )
  }
  
  export default Footer