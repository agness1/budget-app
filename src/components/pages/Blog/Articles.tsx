import { FC} from "react";
import Card from "../../layout/card/Card";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useParams } from "react-router-dom";
import usePosts from "../../../hooks/usePosts";
//import { FinancialArticle } from "../../../types/types";

const Articles: FC = () => {
  const posts = usePosts();

  const { id }: any = useParams();

  const getArticle = () => {
    if (posts.length !== 0) {
      const content: any = posts
        ? posts.find((item: any) => item.id === id)
        : null;
      return (
        <>
          <h1 className="text-2xl font-bold p-4">{content.title}</h1>
          <p className="text-xs font-light p-4">{content.datePublished}</p>
          <img src={content.img.url} className="rounded-lg w-3/4 m-2" />
          <p className="p-4 text-center text-lg mt-4">{content.content.text}</p>
          <p className="font-medium flex items-center gap-2 p-4">
            Author:
            <p className="font-bold">{content.author.name}</p>
              <img src={content.author.avatar.url} alt="author" className="w-14"/>
          </p>
        </>
      );
    }
  };

  return (
    <Card>
       <div className="w-9/12 mx-auto my-8 shadow-2xl bg-maxWhite p-8 flex flex-col items-center relative">
      <Link to="/blog">
        <ArrowBackIcon className="absolute left-8 text-pastelDarkGreen" />
      </Link>
      {getArticle()}
    </div>  
    </Card>
 
  );
};
export default Articles;
