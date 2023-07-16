import { Container, Grid, Typography } from "@mui/material";
import { StoreItem } from "../../components/Menu/StoreItem";
import storeItems from "../../data/items.json";
import "./MenuCart.css";

export function Store() {
  return (
    <Container>
      <Typography
        style={{
          marginTop: "7rem",
          textAlign: "center",
        }}
        className="menu-main"
        variant="h1"
        component="h1"
      >
        Menu
      </Typography>

      <Container className="category">
        <Typography className="menu-title" variant="h2" component="h2">
          Sandwiches
        </Typography>
        <hr className="line-sand"></hr>
        <Grid container spacing={12}>
          {storeItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <StoreItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container className="category">
        <Typography className="menu-title" variant="h2" component="h2">
          Combos
        </Typography>
        <hr className="line-combos"></hr>
        <Grid container spacing={12}>
          {storeItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <StoreItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container className="category">
        <Typography className="menu-title" variant="h2" component="h2">
          Beverages
        </Typography>
        <hr className="line-bev"></hr>
        <Grid container spacing={12}>
          {storeItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <StoreItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
