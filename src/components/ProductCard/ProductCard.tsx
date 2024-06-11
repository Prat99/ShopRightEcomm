import {
  styled,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { IProductItem } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../reducers/cartReducer";

const ProductCard = styled(Card)`
  width: 250px; /* Adjust width as needed */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled(CardMedia)`
  height: 200px; /* Adjust height as needed */
  object-fit: cover;
`;

const ProductTitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductActions = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ProductItem: React.FC<IProductItem> = ({ title, image, price, id }) => {
  console.log("image ==>", image);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ id, title, image, price }));
  };

  return (
    <ProductCard>
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <ProductTitle variant="h6">{title}</ProductTitle>
        <Typography variant="h6">${price}</Typography>
      </CardContent>
      <ProductActions>
        <IconButton aria-label="Add to cart">
          <Button size="small" variant="outlined" onClick={addToCartHandler}>
            Add to cart
          </Button>
        </IconButton>
        <IconButton aria-label="View details">
          <Button size="small" variant="outlined">
            View details
          </Button>
        </IconButton>
      </ProductActions>
    </ProductCard>
  );
};

export default ProductItem;
