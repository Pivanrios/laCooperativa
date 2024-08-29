import Link from 'next/link';

//React confirmation order, render on the user view
function CustomerConfirmation({order}) {
  return (
    <div className='flex flex-col gap-2 bg-blue-800 m-2 text-white w-80'>
        <h3>Confirmation Order # {order.orderNum}</h3>
        <div>
          <p>Para: {order.customer}</p>
          <p>Dish: {order.dish}</p>
          <p>Entrega: {order.delivery}</p>
          <p>Breakroom: {order.breakroom} </p>
        </div>
        <div>
          <h4>Politicas de entrega</h4>
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