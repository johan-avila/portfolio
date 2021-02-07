import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//GraphQL Api npm i -S apollo-client-preset react-apollo graphql-tag graphql
import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { HttpLink} from "apollo-link-http" 
import { InMemoryCache } from "apollo-cache-inmemory"

//Aqui definimos la uri y otras cosas como headers podriamos definirlos aqui por si necesitamos un access o bearer token 
const httpLink = {
    uri: "https://graph-pl-dir.herokuapp.com/api",
    // headers
}

const client = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache()
})

const Root = ()=> (
    <ApolloProvider client={client} >
        <App />
    </ApolloProvider>
)

ReactDOM.render(<Root />,document.getElementById('root'));