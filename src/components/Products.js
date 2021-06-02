import {  Grid } from "@material-ui/core";
import React, { useState } from "react";
import MediaCards from "./cards/MediaCards";


export default function Products({cart,setCart}) {


 const [products] = useState([
  {
    title: "iPhone13",
    price: 95000,
    image: "/img/iphone13.jpg",
    description:"5.4-inch (13.7 cm diagonal) Super Retina XDR display | Ceramic Shield, tougher than any smartphone glass | A14 Bionic chip, the fastest chip ever in a smartphone | Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording | 12MP True Depth front camera with Night mode, 4K Dolby Vision HDR recording | Industry-leading IP68 water resistance | Supports Mag Safe accessories for easy attach and faster wireless charging "
  },
  {
    title: "Samsung A71",
    price: 65000,
    image: "/img/Samsung A71.png",
    description:"Quad camera setup - 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera +5MP (F2.2) depth camera + 5MP (F2.4) macro camera | 32 (F2.0) front facing punch hole camera 17.04 centimeters (6.7-inch) super Amoled infinity-O display, FHD+ multi-touch capacitive touchscreen with 2400 x 1080 pixels resolution 16M color support Memory, Storage & SIM: 8GB RAM | 128GB internal memory | Dual SIM (nano+nano) dual-standby (4G+4G) Android v9.0 operating system with 2.3GHz+1.7GHz Qualcomm | SM7150 octa core processor" 
  },
  {
    title: "Shirt",
    price: 2000,
    image: "/img/Shirt.jpeg",
    description:"Shirt Fabric | 1 Shirt Fabric | Ideal For Men" 
  },
 ]);

 const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.title === item.title
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  return (
    <Grid container spacing={3} direction={"row"} justify={"space-between"} style={{marginLeft:"25px"}}>
      {products.map((product, index) => {
        return (
          <Grid key={index} item xs={6}>
            <MediaCards product={product} action={addToCart}/>
          </Grid>
        );
      })}
    </Grid>
    
  );
} 
