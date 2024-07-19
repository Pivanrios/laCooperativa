import { getDishes } from "@/src/lib/crud"
import { addOrder } from "@/src/lib/orders";

async function OrderForm() {
    //getDishes
    const dishes = await getDishes();
    console.log("dishes:")
    return (
    <>
    <form action={addOrder} className="flex flex-col m-1">
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
            <input list="dishList" name="dish" id="dish" />
            <datalist id="dishList">
                {dishes.map((dish)=>(
                    <option value={dish.name}></option>
                ))}
            </datalist>
        </label>
        <label htmlFor="">Breakroom:
            <input list="breakroomList" name="breakroom" id="breakroom"/>
            <datalist id="breakroomList">
                <option value="Main"></option>
                <option value="South(smoking area)"></option>
                <option value="West (inbound)"></option>
                <option value="East (singles)"></option>
            </datalist>
        </label>
        <label htmlFor="">Quantity:
            <input type="number"
                    name="quantity"
                    id="quantity"
                    placeholder="0" />
        </label>
        <label htmlFor="">Discount:
            <input type="text"
                    name="disc"
                    id="disc" />
        </label>
        <p><strong>Total:</strong></p>
        <button className="btn">Submit</button>
    </form>
    </>
  )
}

export default OrderForm