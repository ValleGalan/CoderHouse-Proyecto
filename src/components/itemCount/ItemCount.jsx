import React, { useState, useEffect } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import "./ItemCount.scss";

const ItemCount = ({ initial, min, max, setQuantity }) => {
  const [counter, setCounter] = useState(initial);

  const handleIncrement = () => {
    counter < max ? setCounter(counter + 1) : console.log("Máximo alcanzado");
  };

  const handleDecrement = () => {
    counter > min ? setCounter(counter - 1) : console.log("Mínimo alcanzado");
  };

  useEffect(() => {
    setQuantity(counter);
  }, [counter, setQuantity]);

  return (
    <div className="counter" style={{ width: "15rem" }}>
      <div className="counter__content">
        <div className="counter__content-controls">
          <span
            className="counter__content-controls-subtract"
            onClick={handleDecrement}
          >
            <RemoveIcon />
          </span>
          <span className="counter__content-controls-value"> {counter} </span>
          <span
            className="counter__content-controls-add"
            onClick={handleIncrement}
          >
            <AddIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;

/*

import React from 'react'
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ItemListContainer from '../itemListContainer/ItemListContainer';

export default function ItemCount() {
    const [itemCount, setItemCount] = React.useState(1);
    return (
        <div>
           <p>hola</p>
            <ButtonGroup>
                <Button onClick={() => { setItemCount(Math.max(itemCount - 1, 0)); }}>
                    {" "} <RemoveIcon fontSize="small" />
                    
                </Button>
                <Button onClick={() => { setItemCount(itemCount + 1); }} >
                    {" "} <AddIcon fontSize="small" />
                </Button>
            </ButtonGroup>
        </div>
    )
}
*/