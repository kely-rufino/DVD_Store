import Cartstorage from '../components/Cartstorage';
import DVDsList from '../components/DVDsItemsandlists/DVDsList';
import RemoveItemfunc from '../components/RemoveItemfunc';
      
function AllDVDsPage(props) {

        fetch("DVDdata.json")
        .then(response => {
            return response.json();
        }).then(data =>{
            props.LoadDVDsStorge(data);
        })
        
        return (
          <section>
            <h1>All DVDs</h1>
            <Cartstorage cart = {props.cart} setCart = {props.setCart} totalcost = {props.totalcost} setTotalcost = {props.setTotalcost}/>          
            <DVDsList DVDsStorge={props.DVDsStorge} cart = {props.cart} setCart={props.setCart} totalcost = {props.totalcost} setTotalcost={props.setTotalcost}/>            
          </section>
        );
      }
      
      export default AllDVDsPage;
