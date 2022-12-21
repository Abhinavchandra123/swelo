import React from 'react'
// import { Card  } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function item({product}) {
  return (
    <div className=" px-4">
      <img className="w-100 shadow" src={product.image} alt="" />
      <div className="text-center my-5">
        <h2>{product.brand}</h2>
        <h3>{product.name}</h3>
        <Link to={`/products/${product.id}/`}>
          <h6
          style={{ width: "fit-content" }}
          className="px-3 mx-auto border bordr-2 border-dark"
        >LEARN MORE</h6>
        </Link>
      </div>
    </div>
    // <Card className="my-3 p-3 rounded">
    //     <a href={`/product/${product._id}`}>
    //       <Card.Img src={product.image} />
    //     </a>
    //     <Card.Body>
    //       <a className='text-decoration-none' href={'/product/${product._id}'}>
    //         <Card.Title as="div" >
    //           <strong className="text-dark">{product.name}</strong>
    //         </Card.Title>
    //       </a>
    //     </Card.Body>
    // </Card>
  );
}

export default item
