import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

//llamar a css
import './cartWidget.css';
export default function ButtonCartWidget() {
    //estado del contador
  const [itemCount, setItemCount] = React.useState(1);
  return (
    <div class="container">
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
      </div>
    </div>
  );
}