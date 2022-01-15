function AddItemfunc(props) {
    
    //const [ cart, setCart ] = useState ([])
   // const [ totalcost, setTotalcost] = useState(0)

    const addtoCart = (props) => {
        props.setCart([...props.cart, props.movie])
        const number = Number(props.price.replace(/[^0-9.-]+/g,""));        
        props.setTotalcost(props.totalcost + number) 
        //console.log(props.totalcost)
        //props.cart.map((item, i) => {console.log(item)})
    }

    return (
        <div className="actions">
        <button onClick={() => addtoCart(props)}>Add to Cart</button>
        </div> 
    )
}
export default AddItemfunc;