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
import { addToCart } from "../../reducers/cartSlice";

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
  // console.log("image ==>", image);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ id, title, image, price }));
  };

  return (
    <ProductCard sx={{ justifyContent: "flex-end" }}>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
        sx={{ height: "auto" }}
      />
      <CardContent>
        <ProductTitle variant="h6">{title}</ProductTitle>
        <Typography variant="h6">${price}</Typography>
      </CardContent>
      <ProductActions>
        <IconButton aria-label="Add to cart" onClick={addToCartHandler}>
          <Button size="small" variant="outlined" disableRipple={true}>
            Add to cart
          </Button>
        </IconButton>
        <IconButton
          aria-label="View details"
          sx={{ "&:hover": { backgroundColor: "inherit" } }}
        >
          <Button size="small" variant="outlined" disableRipple={true}>
            View details
          </Button>
        </IconButton>
      </ProductActions>
    </ProductCard>
  );
};

export default ProductItem;
