import { Button } from "@mui/material";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import storeItems from "../../data/items.json";
import { formatCurrency } from "../../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div style={{ flexGrow: 1 }}>
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span style={{ fontSize: ".65rem", color: "gray" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div style={{ fontSize: ".75rem", color: "gray" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </div>
  );
}
