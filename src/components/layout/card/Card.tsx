import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = (props) => {
  return (
    <section className="md:w-9/12 w-full bg-pastelLightBlue min-h-screen mx-auto rounded-3xl my-10 flex md:flex-row flex-col ">
       <aside className='min-h-screen bg-dark w-1/5 rounded-s-3xl md:flex md:flex-col hidden justify-start text-white pt-20'>
       <div className="mx-auto flex flex-col gap-10">
         <div className="flex items-center gap-2 hover:text-pastelDarkGreen">
       <ShowChartIcon/> <Link to="/"> Overview</Link>
         </div>
         <div className="flex items-center gap-2 hover:text-pastelDarkGreen">
         <FormatListBulletedIcon/> <Link to="/transactions"> Transactions</Link>
         </div>
         <div className="flex items-center gap-2 hover:text-pastelDarkGreen">
          <WorkspacePremiumIcon/> <Link to="/goals"> Goals</Link>
         </div>
       </div>
    </aside>
      {props.children}
    </section>
  );
};

export default Card;

