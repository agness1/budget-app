import {FC, useState} from "react";
import Card from "../layout/card/Card";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { addGoal } from "../store/goalSlice";
interface GoalInput {
    name: string,
    amount: string,
    
  }
const Goals:FC = () => {
const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<GoalInput>();
      const onSubmit: SubmitHandler<GoalInput> = (data) => console.log(data);
      const handleError = (errors: any) => {};
      
      const registerOptions = {
        name: { required: "Receiver is required", minLength: {
          value: 3,
          message: "Receiver must have at least 3 characters",
        },},
        amount: { required: "Amount is required" },
      };

const [nameGoal, setNameGoal] = useState("")
const [amountGoal, setAmountGoal] = useState("")

return (
    <Card>
        <div className="bg-pastelLightPurple rounded-2xl p-24 m-auto">
            <h1 className="text-center pb-8 text-4xl text-pastelDarkPurple font-light">Add a new goal</h1>
            <form onSubmit={handleSubmit((data) => {
                    onSubmit(data);
                    dispatch(addGoal(data))
                    
            })} className="bg-pastelDarkPurple h-96 w-96 rounded-2xl flex flex-col p-8 items-center justify-center gap-4 " >
                <label className="text-white text-2xl">Name</label>
                <input {...register("name", registerOptions.name)} type="text" placeholder="bike" className="px-4 py-2 rounded-3xl text-center" onChange={(e) => setNameGoal(e.target.value)} value={nameGoal}></input>
                <small  className="text-danger text-red">{errors?.name && errors.name.message}</small>
                <label className="text-white text-2xl" >Amount</label>
                <input {...register("amount", registerOptions.amount)} type="number" placeholder="200" className="px-4 py-2 rounded-3xl text-center mb-4" onChange={(e) => setAmountGoal(e.target.value)} value={amountGoal}></input>
                <small  className="text-danger text-red">{errors?.amount && errors.amount.message}</small>
                <button type="submit"  className="bg-dark w-32 p-2 rounded-lg text-white hover:bg-pastelBlue hover:text-dark transition-all">Confirm</button>
            </form>
        </div>
    </Card>
)
}
export default Goals;