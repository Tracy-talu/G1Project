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
  
    
        return(
        <>
            
            {food.map((food)=>(
             
             <div className="Container" key={food.id}>
                <img src={food.image}></img>
                
                <div className="Card-body">
                    <h5 className="card-title" >{food.food}</h5>
                    <h5 className="card-title" >{food.price}</h5>
                    
                    <button onClick={added} className="btn"style={{backgroundColor:"lightblue"}}>Add To Cart</button>
                    <button className="remove" onClick={remove} style={{backgroundColor:"lightblue",BorderRadius:"5px"}}>Remove From Cart</button>
                </div>
               </div>
               
            ))}
             </>
          

        ) 
}   

export default Cart