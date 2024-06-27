import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};
const server = "anskpxkldmdmdkdlcmcmdk";
const ProductCard = ({
  productId,
  name,
  price,
  stock,
  handler,
  photo,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button onClick={() => handler() } >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
