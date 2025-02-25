'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect,useState} from 'react';



const  Product = () => {
  const [products,setProduct]=useState([]);
    // await new Promise((resolve)=>{
    //     setTimeout(() => {
    //         resolve(0)
    //     }, 3000);

    // })
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))
     
        
    },[])
   
return (
  <div>
      <h2 style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold", marginBottom: "5px" }}>
        Products
      </h2>
      {/* Flex container */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", padding: "16px"}}>
        {products.map((product) => (
          <div
            key={product.id}
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
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
              style={{  objectFit: "contain", marginBottom: "12px" }}
            />
            <h3 style={{ fontWeight: "600" }}>{product.title}</h3>
            <p style={{ color: "gray" }}>${product.price}</p>
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
              <Link href={`product/${product.id}`} style={{color: "white"}}>Buy Now</Link>
              
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product

