import { useState, useEffect } from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const hygraph = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clsbzmlve00mw01w64fhrysua/master');
      
      const QUERY = gql`
        {
          posts {
            id
            title
            datePublished
            content {
              html
            }
            img {
              url
            }
            author {
              name
              avatar {
                url
              }
            }
          }
        }
      `;
      
      try {
        const data = await hygraph.request(QUERY);
        setPosts(data.posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return posts;
};

export default usePosts;