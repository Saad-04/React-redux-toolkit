
import { useAddAccountMutation, useDeleteAccountMutation, useGetAccountsQuery } from "../api/adminSlice";
const style = {
container:"p-4 border border-gray-300 rounded",
h2:"text-xl font-bold mb-2",
button:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
}

export const AdminComponent = () => {
const {data,isLoading,error} = useGetAccountsQuery()
const [addAccount,response] = useAddAccountMutation()
const [deleteAccount,res] = useDeleteAccountMutation()
 
    return (
      <div className={style.container}>

        <h2 className={style.h2}>Admin Component</h2>
        {/* <p className="mb-4 text-black">amount:{amount} </p> */}
        {data && data.map((account) => {
          
          <p className='text-black'>{account.id}:{account.amount}
          <button className={style.button} onClick={()=>deleteAccount(account.id)} >delete acount</button></p>
          }
          )}
          <button className={style.button} onClick={()=>addAccount(300,data.length +1)} >add acount</button>
      </div>
    );
    }