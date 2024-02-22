import {FC, useState, useEffect} from "react";
import Card from "../../layout/card/Card";
import { Link } from "react-router-dom";
import { GraphQLClient, gql } from 'graphql-request';
import usePosts from "../../../hooks/usePosts";

const Blog:FC = () => {

const posts = usePosts()


  const blogContent = () => {
    if (posts.length !== 0) {
      return (
        <>
          {posts.map((content: any, index:number) => {
            console.log(content.id)
              return (
                
                <Link to={`/article/${content.id}`}>

                    <div key={index} className="flex flex-col items-center gap-8 bg-maxWhite rounded-2xl p-8 shadow-2xl cursor-pointer hover:scale-105 transition-all my-8">
                         <h1 className="text-2xl font-medium">{content.title}</h1>
                         <p>{content.datePublished}</p>
                         <img src={content.img.url} className="w-1/2 rounded-2xl"/>
                    </div>
                </Link>
              );
            })
          }
        </> 
      );
    }
    return null; 
  };


return (
        <Card>
            <div className="w-9/12 p-8  flex flex-col gap-8 m-auto ">
            {blogContent()}
           </div>
        </Card>
)
}
export default Blog
