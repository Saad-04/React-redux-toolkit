
import { useAddAccountMutation, useDeleteAccountMutation, useGetAccountsQuery } from "../api/adminSlice";
export const style = {
container:"p-4 border border-gray-300 rounded",
h2:"text-xl font-bold mb-2",
button:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
}

export const AdminComponent = () => {
const {data,isLoading} = useGetAccountsQuery()
const [addAccount] = useAddAccountMutation()
const [deleteAccount,{isError}] = useDeleteAccountMutation()
 console.log(isError)
    return (
      <div className={style.container}>

        <h2 className={style.h2}>Admin Component</h2>
        {/* <p className="mb-4 text-black">amount:{amount} </p> */}
        {isLoading ? (<p>loading...</p>) : (data.map((account) => (<div key={account.id}><p className='text-black'>{account.id}: {account.amount}<button className={style.button} onClick={() => {deleteAccount(account.id);}}>delete account</button></p>
    </div>
  ))
)}


          <button className={style.button} onClick={()=>addAccount(300,data.length+1)} >add acount</button>
      </div>
    );
    }