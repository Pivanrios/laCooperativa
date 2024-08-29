//Next components
import Link from 'next/link';

//React confirmation order, render on the user view
function CustomerConfirmation({order}) {
  return (
    <div className='flex flex-col gap-2 bg-amber-500 bg-opacity-80 m-2 text-black w-80 p-2 rounded-sm'>
        <h3 className='font-bold text-lg'>Confirmation Order # {order.orderNum}</h3>
        <div>
          <p>Para: {order.customer}</p>
          <p>Dish: {order.dish}</p>
          <p>Entrega: {order.delivery}</p>
          <p>Breakroom: {order.breakroom} </p>
        </div>
        <div>
          <h4 className='font-bold'>Politicas de entrega</h4>
          <ol>
            <li>Manda un Screenshot de esta confirmacion al whatsapp ...</li>
            <li>Envia comprobante de pago a la cuenta ....</li>
            <li>Para cancelar avisar con 10 hrs de anticipacion ...</li>
          </ol>
          Gracias por su preferencia!
        </div>
        <Link href={"/profile"} className='btn'>Confirm</Link>
    </div>
  )
}

export default CustomerConfirmation