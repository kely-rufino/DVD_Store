import { useState } from "react";

function ShoppingCart() {

  const [isAdded, setIsAdded] = useState([]);


  return (
    <div>
      <button onClick={(e) => isAdded(e.target.value)}/>
      <button onChange= {() => setIsAdded}/>
        <div>

        </div>
    </div>
  );
}

export default ShoppingCart;
