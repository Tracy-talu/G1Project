import{useState,useEffect}from "react"

function Cart() {
    const [food, setFood] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3002/food")
        .then((response) => response.json())
        .then((data) => setFood(data));
    }, []);
  
    function remove() {
      alert("Item removed!");
    }
  
    function added() {
      alert("Item added!");
    }
  
    const Card = food.map((food) => {
        return(
            <>
            <din>
                <nav>
                <h1>Cart</h1>	
                </nav>
            </din>
            <div className="Container">
                <img src={food.image} alt=""/>
                <div className="Card-body">
                    <h5 className="card-title" >{food.food}</h5>
                    <h5 className="card-title" >{food.price}</h5>
                    
                    <button onClick={added} className="btn btn-succes">Add To Cart</button>
                    <button className="remove" onClick={remove} style={{backgroundColor:"red",BorderRadius:"5px"}}>Remove From Cart</button>
                </div>
            </div>
          
            </>
        )

    })
    
    
    
  
}
export default Cart