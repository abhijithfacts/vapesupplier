"use client";
import React, { useEffect } from "react";
import { httpService } from "@/services/httpService";
import "./productsStyle.css";
import Productcard from "@/components/productcard/productcard";

const Products = () => {
  const reqData = { containerId: ["GetLayout"], layoutName: "homepage" };

  const fetchData = async () => {
    try {
      const data = await httpService("open", reqData);
      console.log(data);
    } catch (error) {
      console.error("Error fetching open data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="product-grid-container">
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
     <Productcard/>
    </div>
  );
};

export default Products;
