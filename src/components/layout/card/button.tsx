import React, { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Button: FC<CardProps> = (props) => {
  return (
   
    <button className="bg-dark w-32 p-2 rounded-lg text-white hover:bg-pastelBlue hover:text-dark transition-all">{props.children}</button>
      
 
  );
};

export default Button;

