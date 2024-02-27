import {FC, useState} from "react"; 
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Card from "../layout/card/Card";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from "react-redux";
import { getTransaction } from "../store/transactionSlice";
import { income, outcome } from "../store/balanceSlice";
import { incomeBalance } from "../store/incomeSlice";
import { outcomeBalance } from "../store/outcomeSlice";


const Transactions:FC = () => {

  const dispatch = useDispatch()
    const [date, setDate] = useState("");
    const [receiver, setReceiver] = useState("")
    const [amount, setAmount] = useState<any>()
    const [type, setType] = useState("")
    const [category, setCategory] = useState("")
    const [activeStep, setActiveStep] = useState(0);
    const data = {
      date: date,
      receiver: receiver,
      amount: amount,
      type: type,
      category: category,
    }
    
console.log(amount)

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
      setAmount("");
      setDate("");
      setCategory("");
      setReceiver("")
      setType("")
    };

    return (
      <Card>
          <div className="m-auto bg-gray w-2/3 py-24 px-20 rounded-lg">
            <Stepper activeStep={activeStep} orientation="vertical">
        <Step >
          <StepLabel sx={{color: "#ffffff"}}>Type</StepLabel>
          <StepContent>
          <div className="bg-pastelLightGreen rounded-2xl flex flex-col items-center p-8 gap-2">
            <div className="bg-dark p-4 rounded-2xl w-1/2 flex justify-center gap-2 items-center text-maxWhite ">
            <label className="px-2 ">Income</label>
             <input type="radio" id="income" name="type" value="income" onChange={(e) => setType(e.target.value)} className="cursor-pointer" ></input>
            <label className="px-2" >Outcome</label>
             <input type="radio" id="outcome"  name="type" value="outcome" onChange={(e) => setType(e.target.value)} className=" cursor-pointer"></input>
            </div>
                          <button
                            onClick={() => {
                              if(type !== "") {
                                handleNext()
                              }
                            }}
                            className="bg-dark text-maxWhite px-4 py-2 mt-4 rounded-lg hover:bg-maxWhite hover:text-dark transition-all m-2"
                          >
                            Continue
                          </button>
          </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Receiver</StepLabel>
          <StepContent>
          <div className="bg-pastelLightGreen rounded-2xl flex flex-col items-center p-8 gap-2">
            <div className="flex flex-col gap-2 w-1/2">
            <label className="text-dark font-medium text-center text-lg"> Add Receiver</label>
            <input type="text" onChange={(e) => setReceiver(e.target.value)} value={receiver} placeholder="John May" className="bg-maxWhite p-4 rounded-2xl shadow-2xl  text-center "></input>
            </div>
            
                          <div>
                            <button
                             className="bg-dark text-maxWhite px-4 py-2 mt-4 rounded-lg hover:bg-maxWhite hover:text-dark transition-all m-2"
                              onClick={() => {
                                if(receiver !== "") {
                                  handleNext()
                                }
                              }}
                            >
                              Continue
                            </button>
                            <button
                             className="bg-dark text-maxWhite px-4 py-2 mt-4 rounded-lg hover:bg-maxWhite hover:text-dark transition-all m-2"
                              onClick={handleBack}
            
                            >
                              Back
                            </button>
                          </div>
          </div>
                    
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Category</StepLabel>
          <StepContent>
          <div  className="bg-pastelLightGreen rounded-2xl flex flex-col items-center p-8 gap-2">
            <div className="flex gap-4 ">
            <div  onClick={() => setCategory("car")} className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center border-dark border-4 hover:scale-110 hover:bg-pastelBlue transition-all cursor-pointer"><CarCrashIcon/></div>
             <div  onClick={() => setCategory("shopping")} className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center border-dark border-4 hover:scale-110 hover:bg-pastelBlue transition-all cursor-pointer"><ShoppingCartIcon/></div>
             <div  onClick={() => setCategory("gift")} className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center border-dark border-4 hover:scale-110 hover:bg-pastelBlue transition-all cursor-pointer"><CardGiftcardIcon/></div>
             <div  onClick={() => setCategory("disease")} className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center border-dark border-4 hover:scale-110 hover:bg-pastelBlue transition-all cursor-pointer"><MedicalServicesIcon/></div>
             <div onClick={() => setCategory("travel")} className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center border-dark border-4 hover:scale-110 hover:bg-pastelBlue transition-all cursor-pointer"><ConnectingAirportsIcon/></div>
             </div>
            
                        <div>
                          <button
                            className="bg-dark text-maxWhite px-4 py-2 mt-4 rounded-lg hover:bg-maxWhite hover:text-dark transition-all m-2"
                            onClick={() => {
                              if(category !== "") {
                                handleNext()
                              } 
                            }}
            
                          >
                            Continue
                          </button>
                          <button
                            className="bg-dark text-maxWhite px-4 py-2 mt-4 rounded-lg hover:bg-maxWhite hover:text-dark transition-all m-2"
                            onClick={handleBack}
            
                          >
                            Back
                          </button>
                        </div>
          </div>
                    
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Amount</StepLabel>
          <StepContent>
          <div className="bg-pastelLightGreen rounded-2xl flex flex-col items-center p-8 gap-2">
            <div className="flex flex-col gap-2 w-1/2">
              <label  className="text-dark font-medium text-center text-lg">Amount</label>
              <input type="number" placeholder="514" className="bg-maxWhite p-4 rounded-2xl shadow-2xl  text-center " onChange={(e) => setAmount(e.target.value)} value={amount}></input>
            </div>
            
                    <div>
                          <button
                            className="bg-dark text-maxWhite px-4 py-2 mt-4 rounded-lg hover:bg-maxWhite hover:text-dark transition-all m-2"
                            onClick={() => {
                              if(amount !== "") {
                                handleNext()
                              }
                            }}
            
                          >
                            Continue
                          </button>
                          <button
                           className="bg-dark text-maxWhite px-4 py-2 mt-4 rounded-lg hover:bg-maxWhite hover:text-dark transition-all m-2"
                            onClick={handleBack}
            
                          >
                            Back
                          </button>
                        </div>
          </div>
                    
          </StepContent>
          
        </Step>
        <Step>
          <StepLabel>Date</StepLabel>
          <StepContent>
          <div  className="bg-pastelLightGreen rounded-2xl flex flex-col items-center p-8 gap-2">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-dark font-medium text-center text-xl">Date</label>
              <input  className="bg-maxWhite p-4 rounded-2xl shadow-2xl  text-center " type="date"  onChange={(e) => setDate(e.target.value)} value={date}></input>
            </div>
                        <div>
                          <button
                        className="bg-dark text-maxWhite px-4 py-2 mt-4 rounded-lg hover:bg-maxWhite hover:text-dark transition-all m-2"
                            onClick={() => {
                              if(date !== "") {
                                dispatch(getTransaction(data))
                                handleReset();
                              } if  (type === "income" && date !== "") {
                                dispatch(income(amount));
                                dispatch(incomeBalance(amount))
                              } if (type === "outcome" && date !== "") {
                                dispatch(outcome(amount)); 
                                dispatch(outcomeBalance(amount))
                              }
                                
                            }}
            
                          >
                            Finish
                          </button>
                          <button
                         className="bg-dark text-maxWhite px-4 py-2 mt-4 rounded-lg hover:bg-maxWhite hover:text-dark transition-all m-2"
                            onClick={handleBack}
            
                          >
                            Back
                          </button>
                        </div>
          </div>
                    
          </StepContent>
        </Step>
            </Stepper>
            
          </div>
      </Card>
    );
}

export default Transactions

// dispatch(getTransaction(data))