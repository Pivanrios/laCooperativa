'use client'
import React, { useEffect, useState } from 'react'
//componetns
import ProductPreview from './ProductPreview'
import Link from 'next/link' //Link to send to other page
//data base
import {getDocs, Docs, collection, data} from 'firebase/firestore'
import { db } from '@/firebaseconfig'

function DishGallery({dishes}) {
  const [seleccion, setSeleccion] = useState([]);
  //const seleccion = dishes.slice(0,3) //here were gonna slice depending on the width of the screen, add breakpoints
  useEffect(()=>{
    const setData = async()=>{
      try {
        const array  = []
        console.log("Setting data..")
        const products = collection(db, "productos");
        console.log("Productos:",products);
        const coleccion = await getDocs(products);
        console.log("Coleccion:",coleccion.snapshot)
        coleccion.forEach((doc)=>{
          console.log("uno",doc.data())
          array.push(doc.data());
        })
        setSeleccion(array)

      } catch (error) {
        console.error
      }
    }
    setData();
  },[]);
  return (
    <div className='container flex flex-col items-center bg-yellow-500 py-3 px-2 md:py-5 px-10 gap-1'>{//this is the section were we display our dishes 
      }<h3 className='text-3xl font-bold'>Dishes</h3>
      <div className='container flex sm:flex-row flex-col gap-2 justify-between sm:overflow-x-scroll no-scrollbar sm:whitespace-nowrap '>
      {seleccion.map((d)=>{//we map to our dishes and render product component sending the information via prop
        return <ProductPreview d={d} key={d.id}/>
      })}
      </div>
      <Link href={"/platillos"} className='self-end'>mas-----</Link>
    </div>
  )
}

export default DishGallery