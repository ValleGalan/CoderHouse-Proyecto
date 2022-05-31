import React from 'react'

const ItemListContainer =  ({prop}) => {
  return (
    <div>
      <div> {prop} </div>
         <app-ItemCount></app-ItemCount>
    </div>
  )
}

export default ItemListContainer

