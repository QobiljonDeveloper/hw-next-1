import React from "react";
import ProudctsView from "@/components/ProudctsView";

const Products = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return (
    <div>
      <ProudctsView data={data} />
    </div>
  );
};

export default Products;
