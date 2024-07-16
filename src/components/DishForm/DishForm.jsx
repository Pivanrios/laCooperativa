

function DishForm() {
  return (
    <form action="">
        <label htmlFor="">Name:
            <input type="text" name="name" id="name" required/>
        </label>
        <label htmlFor="">Price:
            <input type="number" name="price" id="price" required/>
        </label>
        <label htmlFor="">Cost of Ingredients:
            <input type="number" name="ingCosts" id="ingCosts" required />
        </label>
        <label htmlFor="">Description:
            <textarea name="desc" id="desc" required></textarea>
        </label>
        <label htmlFor="">Sides:
            <input type="text" name="sides" id="sides" />
        </label>
        <label htmlFor="">Image:
            <button className="text-white bg-blue-700 rounded-full">+</button>
        </label><br></br>
        <label htmlFor="">Cost of Ops:
            <input type="number" name="opsCost" id="opsCost" />
        </label>
        <button className="btn">submit</button>
    </form>
  )
}

export default DishForm