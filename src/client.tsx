import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clsbzmlve00mw01w64fhrysua/master',
  cache: new InMemoryCache()
});

export default client;