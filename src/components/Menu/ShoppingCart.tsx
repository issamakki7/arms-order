import { Drawer, Stack, Typography, Button } from "@mui/material";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const { cartItems } = useShoppingCart();

  const handleSubmit = () => {
    //Implement Submit Functionality
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="h6" component="div">
          Cart
        </Typography>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div
          style={{ marginLeft: "auto", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0),
          )}
        </div>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Drawer>
  );
}
