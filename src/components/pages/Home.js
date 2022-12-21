import React, {useState, useEffect} from "react";
import Navbar from "../includes/Navbar";
// import sec2 from "../Images/home/sec2.jpg";
import Items from '../includes/Items'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import prod4 from "../Images/home/prod4.jpg";
import prod5 from "../Images/home/prod5.jpg";
import prod6 from "../Images/home/prod6.jpg";
import ourstore from "../Images/home/ourstore.jpg";
// import comsoonvid from "../Images/home/comsoonvid.webm";

function Home() {
  const [products,setProduct] = useState([])
  const [home,setHome] = useState([])
  useEffect(() => {
    async function fetchProduct() {
      const {data} = await axios.get('/api/products/')
      setProduct(data)
    }
    fetchProduct()
  },[])
  useEffect(() => {
    async function fetchHome() {
      const {data} = await axios.get('/api/home/')
      setHome(data)
    }
    fetchHome()
  },[])
  return (
      <div className="containe">
        <Navbar />
        <section
          style={{
            backgroundImage: `url('${home.banner}')`,
            height: "100vh",
            backgroundSize: "cover",
          }}
        ></section>
        <section>
          <div className="col-8 mx-auto my-5 py-5">
            <img className="w-100" src={home.banner2} alt=""></img>
          </div>
        </section>
        <section>
          <div className="position-relative  mx-auto my-5 d-flex">
            <div className="mx-auto  border border-secondary border-2">
              <h1 className="px-4">MARQUIS </h1>
              <h6 className="bg-white px-2 position-absolute top-100 start-50 translate-middle">
                Collections
              </h6>
            </div>
          </div>
          <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
              <Items product={product} />
            </Col>
          ))}
        </Row>
        </section>
        <section>
          <h2 className="text-center">DISCOVER</h2>
          <h1 className="text-center">OUR BRANDS</h1>
          <hr
            className="mx-auto mt-0"
            style={{
              height: "2px",
              borderWidth: "0",
              color: "black",
              backgroundColor: "#000",
              width: "150px",
            }}
          />
        </section>
        <section>
          <div className="container mb-5">
            <div className="row my-5">
              <div className="col-lg-4 px-4">
                <img className="w-100" src={prod4} alt="" />
                <div className="position-relative  mx-auto my-5 d-flex">
                  <div className="mx-auto  border border-secondary border-2">
                    <h4 className="px-4">MARQUIS </h4>
                    <h6 className="bg-white px-2 position-absolute top-100 start-50 translate-middle">
                      Collections
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 px-4">
                <img className="w-100" src={prod5} alt="" />
                <div className="position-relative  mx-auto my-5 d-flex">
                  <div className="mx-auto  border border-secondary border-2">
                    <h4 className="px-4">MARQUIS </h4>
                    <h6 className="bg-white px-2 position-absolute top-100 start-50 translate-middle">
                      Collections
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 px-4">
                <img className="w-100" src={prod6} alt="" />
                <div className="position-relative  mx-auto my-5 d-flex">
                  <div className="mx-auto  border border-secondary border-2">
                    <h4 className="px-4">MARQUIS </h4>
                    <h6 className="bg-white px-2 position-absolute top-100 start-50 translate-middle">
                      Collections
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="position-relative container border  mx-auto my-5 d-flex">
          <h6 className="bg-white border border-dark py-2 px-4 position-absolute top-100 start-50 translate-middle">
            VIEW ALL
          </h6>
        </div>
        <section className="my-5 position-relative">
          <img className="my-5 w-100" src={ourstore} alt="" />
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 style={{fontSize:85}} className="text-white">OUR STORE</h1>
            <h2 className="text-white text-center">COMING SOON</h2>
          </div>
        </section>
        <section className="my-5 py-5">
          <div className="container bg-black d-flex justify-content-center">
          <video className="videoTag w-100" src={home.video} controls="controls" autoPlay={true} />
          </div>
        </section>
      </div>
      
  );
}
export default Home;
