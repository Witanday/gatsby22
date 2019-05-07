/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})


const path = require('path')
exports.createPages=({ graphql,actions })=>{
    const {createPage}= actions;
    return graphql(`
    {
  allContentfulProduct{
    edges{
      node{
        id
        title
        
      }
    }
  }
}`)
.then(result =>{
    result.data.allContentfulProduct.edges.forEach(({node})=>{
        createPage({
        path:`product/${node.title}`, 
        component: path.resolve('src/template/template-product.js'), 
        context :{id :node.id}})
    })
})
.catch(err =>console.log(err))
}

