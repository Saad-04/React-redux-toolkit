
import { useGetAccountsQuery } from "../api/adminSlice";


export const AdminComponent = () => {
const {data,isLoading,error} = useGetAccountsQuery()
  console.log(data)
  console.log(error)
    return (
      <div className="p-4 border border-gray-300 rounded">
        <h2 className="text-xl font-bold mb-2">Admin Component</h2>
        {/* <p className="mb-4 text-black">amount:{amount} </p> */}
        {data && data.map((account) => <p className='text-black'>{account.id}:{account.amount}</p>)}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Increment +
        </button>
      </div>
    );
    }