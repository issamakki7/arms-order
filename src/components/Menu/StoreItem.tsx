import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity: number = getItemQuantity(id);

  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia component="img" height="200" image={imgUrl} alt={name} />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {formatCurrency(price)}
        </Typography>
        <CardActions sx={{ mt: "auto" }}>
          {quantity === 0 ? (
            <Button fullWidth onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: ".5rem",
                }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <Typography variant="h5">{quantity}</Typography>
                <Typography variant="subtitle1">in cart</Typography>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="contained"
                size="small"
              >
                Remove
              </Button>
            </div>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
}
