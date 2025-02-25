'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';  // If you want to use the Image component
import { useRouter } from 'next/navigation';


const ProductId = () => {
  const router=useRouter()
  const {product_id}=router.query;
  console.log(product_id)


  const [product, setProduct] = useState(null);
  useEffect(() => {

      fetch(`https://fakestoreapi.com/products/1`)
        .then(res => res.json())
        .then(json => setProduct(json))
        .catch(err => console.error("Error fetching product:", err));
    
  },[product_id]); // Dependency array so the effect runs only when product_id changes



  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", padding: "16px" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "300px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          padding: "16px",
          textAlign: "center",
        }}
      >
        {/* Add the product image */}
        <Image
          src={product?.image}
          alt={product?.title}
          width={200}
          height={200}
          style={{ objectFit: "contain", marginBottom: "12px" }}
        />
        <h3 style={{ fontWeight: "600" }}>{product?.title}</h3>
        <p style={{ color: "gray" }}>${product?.price}</p>
        <p>{product?.description}</p> {/* Show the description of the product */}
        <button
          style={{
            marginTop: "8px",
            backgroundColor: "blue",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductId;
