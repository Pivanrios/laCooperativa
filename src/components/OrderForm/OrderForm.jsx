
function OrderForm() {
  return (
    <>
    <form action="" className="flex flex-col m-1">
        <label htmlFor="">Customer:
            <input type="text" 
                    name="customer" 
                    id="customer" />
        </label>
        <label htmlFor="">Delivery Date:
            <input type="date" 
                    name="delivery" 
                    id="dalivery" />
        </label>
        <label htmlFor="">Dish:
            <input type="text" 
                    name="dish" 
                    id="dish" />
        </label>
        <label htmlFor="">Breakroom:
            <input list="breakroom"/>
            <datalist id="breakroom">
                <option value="Main"></option>
                <option value="South(smoking area)"></option>
                <option value="West (inbound)"></option>
                <option value="East (singles)"></option>
            </datalist>
        </label>
        <label htmlFor="">Quantity:
            <input type="number"
                    name="quantity"
                    id="quantity" />
        </label>
        <label htmlFor="">Discount:
            <input type="text"
                    name="disc"
                    id="disc" />
        </label>
        <button className="btn">Submit</button>
    </form>
    </>
  )
}

export default OrderForm