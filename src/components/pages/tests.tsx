import {FC} from "react";
import Card from "../layout/card/Card";
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { ref, set } from "firebase/database";
import { db } from "../firebase.js";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { uid } from "uid";
import { useForm, SubmitHandler } from "react-hook-form";

interface TransactionInput {
  name: string,
  amount: number,
  date: string,
  receiver: string,
  type: string
}

const ExTransactions:FC = () => {
  
//const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<TransactionInput>();
const onSubmit: SubmitHandler<TransactionInput> = (data) => console.log(data);
const handleError = (errors: any) => {};
console.log(errors)
const registerOptions = {
  receiver: { required: "Receiver is required", minLength: {
    value: 3,
    message: "Receiver must have at least 3 characters",
  },},
  amount: { required: "Amount is required" },
  type: {required: "Type is required" },
  date: {required: "Date is required",},
};

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };


    const [date, setDate] = useState("");
      const [receiver, setReceiver] = useState("")
      const [amount, setAmount] = useState("")
      const [type, setType] = useState("")


      
const nextStep = (e:any) => {
 
setExpanded(false) 
}

const sendData = () => {
  const uuid = uid();
  set(ref(db,`transactions/${uuid}`),{
receiver,
type,
amount,
date,
id: uuid

  })
}

return (
    <Card>
    <div className="w-9/12 mx-auto p-4">
        <h1 className="text-3xl text-center py-8 text-dark font-bold">Add your new transaction</h1>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
         
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
         <div className="flex items-center">
          <div className="bg-pastelDarkGreen w-10 h-10 rounded-full flex items-center justify-center text-2xl text-white">1</div> 
          <h3 className="mx-10 font-bold text-lg text-dark">Receiver</h3> 
          <p>Add Receiver Information: Enter details of the recipient for the transaction.</p>
         </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="w-9/11 bg-pastelDarkGreen p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-8 bg-pastelLightGreen w-1/2 mx-auto h-60 rounded-xl">
              <label className="text-2xl text-dark text-center">Receiver</label>
              <input {...register("receiver", registerOptions.receiver)} type="text" placeholder="John May" className="w-3/4 h-10 rounded-2xl text-center" onChange={(e) => setReceiver(e.target.value)} value={receiver}></input>
              <small className="text-danger text-red">{errors?.receiver && errors.receiver.message}</small>
              <button type="submit" onClick={nextStep} className="btn-transaction">Confirm</button>
            </form>
            
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
      
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <div className="flex items-center">
          <div className="bg-pastelDarkGreen w-10 h-10 rounded-full flex items-center justify-center text-2xl text-white">2</div>  
          <h3 className="mx-10 font-bold text-lg text-dark">Transaction Type</h3> 
          <p>Select Transaction Type: Specify the nature or purpose of the transaction.</p>
         </div>
        </AccordionSummary>
        <AccordionDetails>
        <div className="w-9/11 bg-pastelDarkGreen p-10">
            <h3 className="text-4xl text-white text-center">Select transaction type</h3>
            <form className="flex gap-8 justify-center mt-12 p-10 flex-wrap" onSubmit={handleSubmit(onSubmit)} >
              <div {...register("type", registerOptions.type)} onClick={() => setType("car")} className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center border-white border-4 hover:scale-110 hover:bg-pastelBlue transition-all cursor-pointer"><CarCrashIcon/></div>
              <div {...register("type", registerOptions.type)} onClick={() => setType("shopping")} className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center border-white border-4 hover:scale-110 hover:bg-pastelBlue transition-all cursor-pointer"><ShoppingCartIcon/></div>
              <div {...register("type", registerOptions.type)} onClick={() => setType("gift")} className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center border-white border-4 hover:scale-110 hover:bg-pastelBlue transition-all cursor-pointer"><CardGiftcardIcon/></div>
              <div {...register("type", registerOptions.type)} onClick={() => setType("disease")} className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center border-white border-4 hover:scale-110 hover:bg-pastelBlue transition-all cursor-pointer"><MedicalServicesIcon/></div>
              <div {...register("type", registerOptions.type)} onClick={() => setType("travel")} className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center border-white border-4 hover:scale-110 hover:bg-pastelBlue transition-all cursor-pointer"><ConnectingAirportsIcon/></div>
            <div className="text-center flex flex-col gap-4"><button type="submit" onClick={nextStep} className="btn-transaction">Confirm</button><small className="text-danger text-maxWhite">{errors?.type && errors.type.message}</small></div>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
         <div className="flex items-center">
          <div className="bg-pastelDarkGreen w-10 h-10 rounded-full flex items-center justify-center text-2xl text-white">3</div>  
          <h3 className="mx-10 font-bold text-lg text-dark ">Amount</h3> 
          <p>Verify and confirm the transaction amount before finalizing.</p>
         </div>
        </AccordionSummary>
        <AccordionDetails>
        <div className="w-9/11 bg-pastelDarkGreen p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-8 bg-pastelLightGreen w-1/2 mx-auto h-60 rounded-xl">
              <h3 className="text-2xl text-dark text-center">Amount</h3>
              <input {...register("amount", registerOptions.amount)} type="number" placeholder="514" className="w-3/4 h-10 rounded-2xl text-center" onChange={(e) => setAmount(e.target.value)} value={amount}></input>
              <small className="text-danger text-red">{errors?.amount && errors.amount.message}</small>
              <button onClick={nextStep} className="btn-transaction">Confirm</button>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
         
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
         <div className="flex items-center">
          <div className="bg-pastelDarkGreen w-10 h-10 rounded-full flex items-center justify-center text-2xl text-white">4</div>  
          <h3 className="mx-10 font-bold text-lg text-dark">Date</h3> 
          <p> Specify the date of the transaction.</p>
         </div>
        </AccordionSummary>
        <AccordionDetails>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-9/11 bg-pastelDarkGreen h-96 p-10 flex flex-col items-center gap-8">
                 <input {...register("date", registerOptions.date)} type="date" className="p-4 rounded-md"  onChange={(e) => setDate(e.target.value)} value={date}></input>
                 <small className="text-danger text-red">{errors?.date && errors.date.message}</small>
          <button type="submit" onClick={nextStep}  className="btn-transaction">Confirm</button>
            </div>
        </form>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
         
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          
        >
         <div className="flex items-center">
          <div className="bg-pastelDarkGreen w-10 h-10 rounded-full flex items-center justify-center text-2xl text-white">5</div>  
          <h3 className="mx-10 font-bold text-lg text-dark">Summary</h3> 
          <p>View a summary of the entered information before completing the transaction.</p>
         </div>
        </AccordionSummary>
        <AccordionDetails>
        <div className="w-9/11 bg-pastelDarkGreen p-10">
          <form onSubmit={handleSubmit((data) => {
                    onSubmit(data);
                    sendData()
            })} className="w-1/2 bg-pastelLightGreen mx-auto flex p-4 flex-col items-center gap-4 rounded-xl">
            <h3 className="text-center text-dark text-3xl">Your choices</h3>
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-dark">Reciever</h4>
              <p {...register("receiver", registerOptions.receiver)}>{receiver}</p>
              <small className="text-danger text-red">{errors?.receiver && errors.receiver.message}</small>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h4 className="font-bold text-dark" >Transaction Type</h4>
              <div className="" {...register("type", registerOptions.type)}>{type}</div>
              <small className="text-danger text-red">{errors?.type && errors.type.message}</small>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-dark">Date</h4>
              <p {...register("date", registerOptions.date)}>{date}</p>
              <small className="text-danger text-red">{errors?.date && errors.date.message}</small>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-dark">Amount</h4>
              <p {...register("amount", registerOptions.amount)}>{amount}$</p>
              <small className="text-danger text-red">{errors?.amount && errors.amount.message}</small>
            </div>
            <button type="submit" className="btn-transaction">Confirm</button>
          </form>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
    </Card>
)
}
export default ExTransactions;

/*import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <DemoItem label="Uncontrolled calendar">
          <DateCalendar defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
        <DemoItem label="Controlled calendar">
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
} */


/*
var firebaseConfig = {
  // Tu umieść konfigurację swojego projektu Firebase
};

firebase.initializeApp(firebaseConfig);

// Uzyskanie referencji do bazy danych
var database = firebase.database();

// Dane do wysłania
var dataToSend = {
  receiver: receiver,
  type: type,
  amount: amount,
  date: "02.03.2021"
};

// Referencja do miejsca, gdzie chcesz zapisać dane (np. "transakcje")
var transactionsRef = database.ref('transakcje'); // Zmień 'transakcje' na nazwę swojej kolekcji

// Dodanie danych do bazy
transactionsRef.push(dataToSend)
  .then(function() {
    console.log("Dane zostały pomyślnie wysłane do Firebase!");
  })
  .catch(function(error) {
    console.error("Wystąpił błąd podczas wysyłania danych:", error);
  }); */

  //sendData("02.02.2022")



  /**
 <input
  type="radio"
  id="carType"
  name="type"
  value="car"
  {...register("type", registerOptions.type)}
  className="hidden" // Ukryj domyślny wygląd inputa
/>
<label
  htmlFor="carType"
  className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center border-white border-4 hover:scale-110 hover:bg-pastelBlue transition-all cursor-pointer"
>
  <CarCrashIcon />
</label>


   */