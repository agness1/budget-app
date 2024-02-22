import React, {FC} from 'react';
import Card from '../layout/card/Card';
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { selectTransactionData } from '../store/transactionSlice';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, registerables } from 'chart.js';
import { selectGoalsData } from '../store/goalSlice';
import { Doughnut} from "react-chartjs-2"

const HomePage: FC = () => {
  
ChartJS.register(...registerables);

const transactionData = useSelector(selectTransactionData);
console.log(transactionData)
const goals = useSelector(selectGoalsData);
const balancee = useSelector((state:any) => state.balance );
const income = useSelector((state:any) => state.incomeBalance)
const outcome = useSelector((state:any) => state.outcomeBalance)
console.log(outcome)
const transactionHistory = transactionData.map((item:any) => {

return (
    <tr className='border-y border-lightGray'>
     <td className='p-2'>{item.receiver}</td>
     <td className='p-2'>{item.type}</td>
     <td className='p-2'>{item.category}</td>
     <td className='p-2'>{item.date}</td>
     <td className='p-2 font-bold'>{item.amount}</td>
    </tr>
)
})

const goalsHistory = goals.map((item:any) => {

    return (
<div className='bg-dark w-9/11 h-40 rounded-2xl shadow-xl flex flex-col justify-evenly text-maxWhite'>
    <p className=' text-xl'>{item.name}</p>
    <p className=''>{item.amount}$</p>
</div>
    )
})
    return (  
    <Card>
        <div className='h-full md:w-2/5 md:p-8 p-4'>
            <div className='p-4'>
                <h1 className='text-3xl text-dark font-medium'>Weekly sumup</h1>
                <p className='font-light text-gray'>Get summary of your online transactions here.</p>
            </div>
            <div className='bg-maxWhite mx-auto rounded-2xl my-4 shadow-2xl p-8 flex md:flex-row flex-col gap-4 text-center md:text-left'>
            <div className="bg-blue md:w-3/5 mx-auto rounded-3xl text-white flex flex-col justify-around p-4 relative">
                <p className="font-bold text-lg">cloudcash</p>
                <p className="font-bold">1111 1111 1111 1111</p>
                <div className="flex gap-10">
                    <p>Mike Smith</p>
                    <p>06/29</p>
                </div>
                <img src="/vector.png" alt='vector' className="w-3/4 absolute bottom-0 right-0"></img>
            </div>
            <div className='flex flex-col justify-center gap-4 md:gap-0'>
                <div>
                    <p className='text-blue font-bold text-2xl'>{balancee} $</p>
                    <p className='font-light text-gray'>Current balance</p>
                </div>
                <div>
                    <p className='text-pastelDarkGreen font-bold'>{income} $</p>
                    <p className='font-light text-gray'>Income</p>
                </div>
                <div>
                    <p className='text-pastelDarkPurple font-bold'>{outcome} $</p>
                    <p className='font-light text-gray'>Outcome</p>
                </div>
            </div>
            </div>
            <div className=' bg-maxWhite mx-auto rounded-2xl md:my-4 shadow-2xl p-2  mt-10'>
        <h3 className='p-2 text-2xl text-dark font-medium'>Transaction history</h3>

        <table className='mx-auto'>
  <tbody>
    <tr>
      <td className='p-2 font-light text-gray'>Reciever</td>
      <td className='p-2 font-light text-gray'>Type</td>
      <td className='p-2 font-light text-gray'>Category</td>
      <td className='p-2 font-light text-gray' >Date</td>
      <td className='p-2 font-light text-gray'>Amount</td>
    </tr>
    {transactionHistory}
  </tbody>
</table>
            </div>
        </div>
        <div className=' md:w-2/5 rounded-e-3xl p-8'>
                <div className='p-4'>
                    <div className='flex items-center gap-2'>
                        <h3 className='font-medium text-dark text-3xl'>Goals</h3>
                        <div className='w-6 h-6 bg-yellow rounded-full flex items-center justify-center hover:scale-105 transition-all hover:bg-pastelDarkGreen'><Link to="/goals">
                            <AddIcon></AddIcon>
                        </Link></div>
                    </div>
                    <p className='font-light text-gray'>Define specific financial targets for effective planning.</p>
                </div>
            <div className='h-1/4 flex gap-4 p-4'>
                <Carousel className='w-full '>
                 {goalsHistory}   
                </Carousel>
            </div>
            <div>
            </div>
            <div className='bg-maxWhite h-1/3 shadow-2xl rounded-2xl mt-8 p-4'>
                <h3 className='text-dark font-medium text-2xl'>Outcome Statistics</h3>
                <Doughnut  data={{labels:['Przychody','Wydatki'],
            datasets:[{
                label:'Podsumowanie miesiąca',
                data: [income, outcome],
                backgroundColor:['green','red']
            }],    
        }}
        height={200}
        width={200}
        options={{
            maintainAspectRatio:false
        }} ></Doughnut>
            </div>
        </div>
    </Card>
    )
}
export default HomePage;















