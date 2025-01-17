import { addProduct } from "@/src/lib/products"



function DishForm() {
    //getValue from inputs

    //create object to send and POST
    //validate data input
    //POST in database
  return (
    <form action={addProduct} className="flex flex-col bg-slate-400 p-5 mx-20 my-2">
        <label htmlFor="">Name:
            <input type="text" 
                    name="name" 
                    id="name" 
                    required/>
        </label>
        <label htmlFor="">Price:
            <input type="number" name="price" id="price" required/>
        </label>
        <label htmlFor="">Cost of Ingredients:
            <input type="number" name="cost" id="cost" required />
        </label>
        <label htmlFor="">Description:
            <textarea name="desc" id="desc" required></textarea>
        </label>
        <label htmlFor="">Sides:
            <input type="text" name="sides" id="sides" />
        </label>
        <label htmlFor="">Image:
            <button className="text-white bg-blue-700 rounded-full">+</button>
            <input type="text" name="imagen" id="imagen" />
        </label><br></br>
        <label htmlFor="">Ingredientes:
            <input type="text" name="ing" id="ing" />
        </label>
        <button className="btn">submit</button>
    </form>
  )
}

export default DishForm