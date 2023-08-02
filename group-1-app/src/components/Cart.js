
function Cart(){
  function remove(){
   alert("Item removed!")
  }
   function added(){
    alert("Item added!")
   }
  
    return(
        <>
        <din>
            <nav>
            <h1>Cart</h1>	
            </nav>
        </din>
        <div className="Container">
                    
            <img scr="" alt=""/>
            <div className="Card-body">
                <h5 className="card-title">Title</h5>
                <p className="Card-desc"></p>
                <button onClick={added} className="btn btn-succes">Add To Cart</button>
                <button className="remove" onClick={remove} style={{backgroundColor:"red",BorderRadius:"5px"}}>Remove From Cart</button>
            </div>
        </div>
        </>
    )
}
export default Cart