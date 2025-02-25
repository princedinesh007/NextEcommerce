import React from 'react'

const ProductId = async({params}) => {
  return (
    <div>page:{await params.productid}</div>
  )
}

export default ProductId