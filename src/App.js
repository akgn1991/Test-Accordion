import React, { useState } from "react";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { CssBaseline} from "@material-ui/core";


function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(true);
  const[name,setName]=useState("")

  const getValue=(value)=>{
    setName (value.firstName+value.lastName)
  }

  return (
    <div>
    
      <Header setPage={setPage} cart={cart} setCart={setCart} name = {name} setName={setName}/>
      {page?<Details cart={cart} setCart={setCart} setPage={setPage} getValue={getValue} name = {name} />:<Cart cart={cart} setCart={setCart}/>}    
      <CssBaseline />
    </div>
  );
}


export default App;
