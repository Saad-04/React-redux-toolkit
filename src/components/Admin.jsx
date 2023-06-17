
import { useGetAccountsQuery } from "../api/adminSlice";

const {data,isLoading,error} = useGetAccountsQuery()

export const AdminComponent = () => {
  
    return (
      <div className="p-4 border border-gray-300 rounded">
        <h2 className="text-xl font-bold mb-2">Admin Component</h2>
        {/* <p className="mb-4 text-black">amount:{amount} </p> */}
        <p className="mb-4 text-black">{data && data.map((acount)=>{
            <span>{acount.id}:{acount.amount}</span>
            })}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Increment +
        </button>
      </div>
    );
    }