
import React from 'react'
import {
    graphql,
    Link
} from "gatsby";
import Img from "gatsby-image"
import Layout from '../components/layout';

export default function product({data}) {
const {title,price} = data.contentfulProduct
const {description} = data.contentfulProduct.description
const {fluid} = data.contentfulProduct.image
  return (
    <Layout>
       < Img fluid = {
            fluid
           } > </Img> <
           h3 style = {
               {
                   padding: '10px',
                   margin: '10px'
               }
           } > {
               title
           } {
               '  '
           } < span style = {
               {
                   padding: '10px',
                   marginLeft: '10px',
                   color: 'grey'
               }
           } > $ {
               price
           } </span></h3 >
           < p > {
               description
           } </p>
      < Link to = "/product" > Go back to Product </Link>
    </Layout>
  )
}
export const query = graphql `
query($id: String) {
    contentfulProduct(id: {
        eq: $id
    }) {
        title
        price
        description {
            description
        }
        image {
            fluid {
                ...GatsbyContentfulFluid_tracedSVG
            }
        }
    }
}
`
