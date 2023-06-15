import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, getUserAcount, increment, incrementByAmount } from "../slice/accountSlice";
// import { useSelector } from "react-redux";
// import { decrement, increment } from "../slice/accountSlice";

export const AccountComponent = () => {
  const [value,setValue]= useState(0)
  const amount = useSelector(state=>state.acount.amount)
  const points = useSelector(state=>state.bonus.points)
   const dispatch =useDispatch()

  

    return (
      <div className="p-4 border border-gray-300 rounded">
        <h2 className="text-xl font-bold mb-2">Account Component</h2>
        <p className="mb-4">account: ${amount}</p>
        <p className="mb-4">points: ${points}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={()=>dispatch(increment())}>
          Increment
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={()=>dispatch(decrement())}>
          Decrement
        </button>
        <input type="text" className="border border-gray-400 rounded px-2 py-1" onChange={(e)=>setValue(+ e.target.value)}
        />
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={()=>dispatch(incrementByAmount(value))}>
          Increment By +{value}
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={()=>dispatch(getUserAcount(13))} > getuser amount</button>
        
      </div>
    );
  };