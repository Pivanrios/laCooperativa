//function
import ListOfProducts from '@/src/components/ListOfProducts/ListOfProducts';

function AdminProducts() {

  return (
    <div className='w-screen flex flex-col mx-14 items-center'>
      <h2>Products</h2>
      <button
            className='bg-green-700 self-end rounded-full px-2 mb-1'>Add</button>
      <ListOfProducts />
    </div>
  )
}

export default AdminProducts