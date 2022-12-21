import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
// import topbg from "../Images/product/topbg.jpg";
import Navbar from "../includes/Navbarwhite";
import axios from 'axios';
import Items from '../includes/Items'
import { Col, Row } from "react-bootstrap";


function Product() {
  const [product,setProduct] = useState([])
  const pramas = useParams();
  useEffect(() => {
    async function fetchProduct() {
      const {data} = await axios.get(`/api/products/${pramas.id}`)
      console.log(data)
      setProduct(data)
    }
    fetchProduct()
  },[pramas.id])

  const [products,setProducts] = useState([])

  useEffect(() => {
    async function fetchProduct() {
      const {data} = await axios.get('/api/products/')
      setProducts(data)
    }
    fetchProduct()
  },[])
  return (
    <>
      <Navbar />

      <section className=" position-relative">
        
        <img className=" w-100" src={product.image} alt="" />
        <div className="position-absolute bottom-0 start-0">
          <div className=" mx-auto my-5 d-flex ps-5">
            <div className="position-relative">
              <h4 className="px-3 mb-0 border-start text-white border-end border-top">
                MARQUIS
              </h4>
              <div className="row g-0">
                <div className="col border-start border-bottom h-50 pt-2"></div>
                <div className="col border-botto h-50 ">
                  <h6 className="px-1 text-white">Collections</h6>
                </div>
                <div className="col border-bottom h-50 border-end pt-2"></div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="position-absolute bottom-0 end-0 me-4">
          <p className="border text-white border-white p-1  m-5">
            AVAILABLE IN 105 ML
          </p>
        </div>
        
      </section>
     
      <div
        id="productCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={product.png1} className="mx-auto d-block w-100" alt="..." />
            
          </div>
          <div className="carousel-item">
            <img src={product.png2} className="mx-auto d-block w-100" alt="..." />
            {/* <div
              className="position-absolute top-50 start-50 translate-middle d-none d-md-block border border-white"
              style={{ borderRadius: "50%", height: "450px", width: "450px" }}
            >
              <div
                className="position-absolute p-5 top-50 start-50 translate-middle carousel-caption d-none d-md-block border border-white bg-dark"
                style={{
                  borderRadius: "50%",
                  height: "400px",
                  width: "400px",
                  opacity: ".7",
                }}
              >
                <div>
                  <h1 className="pt-5 mt-5 text-warning">NOTE</h1>
                  <h4>
                    GRAPEFRUIT, BERGAMOT, PLUM, STRAWBERRY, BLACKCURRANT,
                    COCONUT
                  </h4>
                </div>
              </div>
            </div> */}
          </div>
          <div className="carousel-item">
            <img src={product.png3} className="mx-auto d-block w-100" alt="..." />
            {/* <div
              className="position-absolute top-50 start-50 translate-middle d-none d-md-block border border-white"
              style={{ borderRadius: "50%", height: "450px", width: "450px" }}
            >
              <div
                className="position-absolute p-5 top-50 start-50 translate-middle carousel-caption d-none d-md-block border border-white bg-dark"
                style={{
                  borderRadius: "50%",
                  height: "400px",
                  width: "400px",
                  opacity: ".7",
                }}
              >
                <div>
                  <h1 className="pt-5 mt-5 text-warning">NOTE</h1>
                  <h4>
                    GRAPEFRUIT, BERGAMOT, PLUM, STRAWBERRY, BLACKCURRANT,
                    COCONUT
                  </h4>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to="0"
            className="active btn btn-circle"
            aria-current="true"
            aria-label="Slide 1"
            style={{
              borderRadius: "50%",
              height: "10px",
              width: "10px",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{
              borderRadius: "50%",
              height: "10px",
              width: "10px",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{
              borderRadius: "50%",
              height: "10px",
              width: "10px",
            }}
          ></button>
        </div>
        <div
              className="position-absolute top-50 start-50 translate-middle d-none d-md-block border border-white"
              style={{ borderRadius: "50%", height: "450px", width: "450px" }}
            >
              <div
                className="position-absolute p-5 top-50 start-50 translate-middle carousel-caption d-none d-md-block border border-white bg-dark"
                style={{
                  borderRadius: "50%",
                  height: "400px",
                  width: "400px",
                  opacity: ".7",
                }}
              >
                <div>
                  <h1 className="pt-5 mt-5 text-warning">NOTE</h1>
                  <h4>
                    GRAPEFRUIT, BERGAMOT, PLUM, STRAWBERRY, BLACKCURRANT,
                    COCONUT
                  </h4>
                </div>
              </div>
            </div>
      </div>
      
      <section className="">
        <div className="containe">
        <video className="videoTag w-100" src={product.video} controls="controls" autoPlay={true} />
        </div>
      </section>
      <section className="my-5 py-4">
        <div className="position-relative container border border-dark w-75  mx-auto my-5 d-flex">
          <h6 className="bg-white border border-dark py-2 px-4 position-absolute top-100 start-50 translate-middle">
            MORE MARQUIS COLLECTIONS
          </h6>
        </div>
      </section>
      <section>
      <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
              <Items product={product} />
            </Col>
          ))}
      </Row>
      </section>
    </>
  );
}


export default Product;
