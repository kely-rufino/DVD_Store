import { useState } from 'react';
import Cartstorage from '../components/Cartstorage';
import DVDsList from '../components/DVDsItemsandlists/DVDsList';
      
function AllDVDsPage(props) {
  const [DVDsStorge, LoadDVDsStorge] = useState([]);

        fetch("DVDdata.json")
        .then(response => {
            return response.json();
        }).then(data =>{
            LoadDVDsStorge(data);
        });      
        
        return (
          <section>
            <h1>All DVDs</h1>
            <Cartstorage cart = {props.cart} setCart = {props.setCart} totalcost = {props.totalcost} setTotalcost = {props.setTotalcost}/>          
            <DVDsList DVDs={DVDsStorge} cart = {props.cart} setCart={props.setCart} totalcost = {props.totalcost} setTotalcost={props.setTotalcost}/>
          </section>
        );
      }
      
      export default AllDVDsPage;
