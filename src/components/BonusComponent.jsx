
import { useDispatch, useSelector } from "react-redux";
import {incrementByBonus} from '../slice/bonusSlice'


export const BonusComponent = () => {
  const dispatch =useDispatch()
const points = useSelector(state=>state.bonus.points)
    return (
      <div className="p-4 border border-gray-300 rounded">
        <h2 className="text-xl font-bold mb-2">Bonus Component</h2>
        {/* <p className="mb-4 text-black">amount:{amount} </p> */}
        <p className="mb-4 text-black">points:{points} </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch(incrementByBonus())}>
          Increment +
        </button>
      </div>
    );
    }