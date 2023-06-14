import { useDispatch, useSelector } from "react-redux";
import { increment } from "../reducers/action";
export const RewardComponent = () => {
    const dispatch =useDispatch()
    const reward= useSelector(state=>state.reward.rewardPoints)
 
    return (
      <div className="p-4 border border-gray-300 rounded">
        <h2 className="text-xl font-bold mb-2">Reward Component</h2>
       
        <p className="mb-4 text-black">points:{reward} </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch(increment(100))}>
          Increment +
        </button>
      </div>
    );
    }