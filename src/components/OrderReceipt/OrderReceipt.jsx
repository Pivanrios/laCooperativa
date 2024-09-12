

import Link from 'next/link';


//the receipt generated once status is paid
function OrderReceipt({order}) {
    //states
  
  return (
    <div className='flex flex-col gap-2 bg-green-900 text-white bg-opacity-80 m-2 text-black w-80 p-2  rounded-sm'>
        <h3 className='font-bold text-lg'>Recibo de Order # {order.orderNum}</h3>
        <div>
          <p>Para: {order.customer}</p>
          <p>Dish: {order.dish}</p>
          <p>Total: {order.total}</p>
        </div>
        <div>
          <h4 className='font-bold'>Politicas de Devolucion</h4>
          <ol>
            <li>Tiene derecho a cancelar su pedido hasta las 10 pm un dia antes de la entrega.</li>
            <li>En caso de una no conformidad, usted tiene derecho a la devolución de su dinero. Siempre y cuando el producto sea retornado con el 90% del contenido</li>
          </ol>
          Gracias por su preferencia! - review
        </div>
        <Link href={"/"} className='btn'>Confirm</Link>
    </div>
  )
}

export default OrderReceipt