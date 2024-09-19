import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { isEmpty } from "lodash";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { addToCart, deleteFromCart } from "../../reducers/cartSlice";
import { IProductItem } from "../../types";

interface IBundledCartItem extends IProductItem {
  quantity: number;
}

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItem);

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)?.toFixed(2);
  };

  const addHandler = (item: IProductItem) => {
    dispatch(addToCart({ ...item }));
  };

  const removeHandler = (id: number) => {
    dispatch(deleteFromCart({ id })); //
  };

  const bundledCart = useMemo(() => {
    return cartItems.reduce((ac, cv) => {
      const item = ac.find((i) => i.id === cv.id);
      if (item) {
        item.quantity += 1;
      } else {
        ac.push({ ...cv, quantity: 1 });
      }
      return ac;
    }, [] as IBundledCartItem[]);
  }, [cartItems]);

  return (
    <div>
      {!isEmpty(cartItems) ? (
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={12} md={6}>
            {bundledCart.map((item) => {
              return (
                <Card sx={{ display: "flex", width: "auto" }}>
                  <Stack direction="row" spacing={2}>
                    <Box>
                      <CardMedia
                        sx={{
                          height: 140,
                          width: 120,
                          display: "block",
                          objectFit: "cover",
                          maxWidth: "100%",
                        }}
                        image={item.image}
                        title={"product image"}
                      />
                    </Box>
                    <Box>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                          ${item.price?.toFixed(2)}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          Quantity: {item?.quantity}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" onClick={() => addHandler(item)}>
                          Add(+)
                        </Button>
                        <Button
                          size="small"
                          onClick={() => removeHandler(item?.id)}
                        >
                          Remove(-)
                        </Button>
                      </CardActions>
                    </Box>
                  </Stack>
                </Card>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5">Price Details</Typography>
                <Typography variant="h6">
                  Total Items: {cartItems.length}
                </Typography>
                <Divider />
                <Typography variant="h6">
                  Total Price: ${getCartTotal()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  {" "}
                  <Link to="/checkout">Checkout </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h5">Cart is empty, please add items</Typography>
      )}
    </div>
  );
};

export default Cart;
