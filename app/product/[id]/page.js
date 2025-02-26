'use client'
import Link from 'next/link';
import React, { useState,useEffect } from 'react'


function  ProductPage ({params}) {

  const {id}=React.use(params);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => {
          setProduct(json);
          setLoading(false)
        })
        .catch(err => {
          console.error("Error fetching product:", err)
          setLoading(false);  
        },[id]);
        
  })
  if (loading) {
    // Show a loading state (e.g., a simple "Loading..." message or a spinner)
    return <div>Loading...</div>;
  }
  return (
    <>
   
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
        <img
          src={product?.image}
          alt={product?.title}
          width={200}
          height={200}
          style={{ objectFit: "contain", marginBottom: "12px" }}
        />
        <h3 style={{ fontWeight: "600" }}>{product?.title}</h3>
        <p style={{ color: "gray" }}>${product?.price}</p>
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
    <button style={{
            marginTop: "8px",
            backgroundColor: "yellow",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }} > <Link href='/product'>Go To Products</Link></button>
    </>
    
  );
};

export default ProductPage