import { useSelector } from "react-redux"
import { AccountComponent } from "./components/AccountComponent"
import {BonusComponent} from './components/BonusComponent'
import { RewardComponent } from "./components/RewardComponent"


export function App() {
  
 const acount = useSelector(state=>state.acount)
 const amount = useSelector(state=>state.acount.amount)
 const points = useSelector(state=>state.bonus.points)
 const reward= useSelector(state=>state.reward.rewardPoints)
  return (
    <>
      <div className="APP mx-auto">
        <h4 className="text-2xl font-bold mb-4"> App</h4>
{acount.pending?<p></p>: <h3 className="text-2xl font-bold mb-4">amount acount: {amount}</h3>}
       
        <h3 className="text-2xl font-bold mb-4">points bonus:{points} </h3>
        <h3 className="text-2xl font-bold mb-4"> reward:{reward} </h3>
        <div className="grid grid-cols-2 gap-4">
          <AccountComponent />
           <BonusComponent /> 
           <RewardComponent /> 
        </div>
      </div>
    </>
  )
}

