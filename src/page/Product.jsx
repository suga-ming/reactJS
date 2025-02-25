import { useSearchParams } from "react-router-dom";

const Product = () => {
  let [query] = useSearchParams();
  const queryv = query.get("q");
  console.log("ddd", queryv);
  return <div>Product</div>;
};

export default Product;
