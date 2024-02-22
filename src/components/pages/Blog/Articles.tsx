import {FC, useState, useEffect} from "react";
import Card from "../../layout/card/Card";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from "react-router-dom";

  import usePosts from "../../../hooks/usePosts";
import { FinancialArticle } from "../../../types/types";



const Articles = () => {

const posts = usePosts();
console.log(posts)
  const {id}:any = useParams();
console.log(id)
const content : any = posts ? posts.find((item:FinancialArticle) => item.id === id): null;




 /*const post = () => {
 if (posts[index] !== undefined) {
const content = posts[index]
 console.log(content)
 if(content.length !== 0){
  return (
    <>
     <h1>{content.title}</h1>
     <p>{content.datePublished}</p>
     <img src={content.img.url}/>
     <p>{content.content.html}</p>
     <p>
      Author:
       <p>{content.author.name}</p>
     </p>
    </>
 
 )
 }

}
 }*/


 

return (
  <Card>
      <div className="w-9/12 mx-auto my-8 shadow-2xl bg-maxWhite p-8 flex flex-col items-center relative">
        <Link to="/blog">
            <ArrowBackIcon className="absolute left-8 text-pastelDarkGreen"/>
        </Link>
       { <>
     <h1>{content.title}</h1>
     <p>{content.datePublished}</p>
     <img src={content.img.url}/>
     <p>{content.content.html}</p>
     <p>
      Author:
       <p>{content.author.name}</p>
     </p>
    </>}
      </div>
  </Card>
)
}
export default Articles