import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({

    uri: 'https://api-sa-east-1.hygraph.com/v2/clhm5tj66552e01uh8vstazt4/master',
    cache:new InMemoryCache()

})

