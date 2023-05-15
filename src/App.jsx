import { ApolloProvider } from "@apollo/client";
import { client, clientExpe } from "./lib/apollo.js";
import  RouterReact  from "./Router";

export default function App() {
  return (
    <>
      <ApolloProvider client={client}  expe={clientExpe}>
       <RouterReact/>
      </ApolloProvider>
    </>
  );
}
