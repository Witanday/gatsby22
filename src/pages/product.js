import React from 'react'
import {
    graphql,Link
} from "gatsby";
import Img from "gatsby-image"
import Layout from '../components/layout';

export default function product({data}) {
  console.log(data)
  return (
    <Layout>
      <h1>Hello from product</h1>
      {data.products.edges.map( ({node:product})=>{
        return( <div key={product.id} style={{padding:'10px',margin : '20px'}}>
          <Img fixed={product.image.fixed}></Img>
          <h3 style={{ padding: '10px', margin: '10px' }}>{product.title} {'  '} <span style={{ padding: '10px',marginLeft: '10px', color:'grey' }}>${product.price}</span></h3>
          < Link to = {
            `product/${product.title}`
          } > Detail </Link>
        </div>)
      })}
      < Link to = "/" > Go back to the homepage </Link>
    </Layout>
  )
}
export const query =graphql`
{
  products: allContentfulProduct {
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        image {
          fixed(width: 300) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`
