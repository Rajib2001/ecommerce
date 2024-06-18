import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"about - ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/riya_about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
          {/* <h2>Welcome to RIYA ECOMMERCE SHOPING APP!</h2>  */}
          <h6>
          We aim to offer our customers a variety of the latest Cloth T-shirts/Jeans/Shoes/Watch/Jacket. <br /> <br />
          We’ve come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. <br />
          <br />

We always keep an eye on the latest trends in T-shirts/Jeans/Shoes/Watch/Jacket and put our customers’ wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of the T-shirts/Jeans/Shoes/Watch/Jacket industry

          </h6>


          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
