'use client'
import { getDishes } from "@/src/lib/crud"

async function OrderForm() {
    //getDishes
    const dishes = await getDishes();
    console.log("dishes:")
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
            <input list="dish" />
            <datalist id="dish">
                {dishes.map((dish)=>(
                    <option value={dish.name}></option>
                ))}
            </datalist>
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
                    id="quantity"
                    value={0} />
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