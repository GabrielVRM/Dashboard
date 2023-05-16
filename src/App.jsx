import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo.js";
import  RouterReact  from "./Router";

export default function App() {
  return (
    <>
      <ApolloProvider client={client}  >
       <RouterReact/>
      </ApolloProvider>
    </>
  );
}
