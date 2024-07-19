"use client"
import { useState } from "react"


function DishForm() {
    //getValue from inputs
    const [name, setName] =  useState("");//string < 30 char
    const [price,setPrice]= useState(0);//float price to sell in dlls
    const [cost, setCost] = useState(0);//float in pesos cost of ingredients
    const [desc, setDesc] = useState("");//text area <100 char
    const [sides, setSides] = useState([]);//array of sides
    const [imaUrl, setImgUrl] = useState("");// string 

    //create object to send and POST
    //validate data input
    //POST in database
  return (
    <form action="" className="flex flex-col bg-slate-400 p-5 mx-20 my-2">
        <label htmlFor="">Name:
            <input type="text" 
                    name="name" 
                    id="name" 
                    onChange={(e)=>setName(e.target.value)}
                    required/>
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