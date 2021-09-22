import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {InMemoryCache, ApolloLink} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import { HttpClientModule } from '@angular/common/http';

const uri = 'https://api.github.com/graphql'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const auth = setContext((operation, context) => {
    const token = localStorage.getItem('token');

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `bearer ${token}`
        }
      };
    }
  });

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const link2 = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }
  
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });
  const cache = new InMemoryCache();

  return {
    link,
    link2,
    cache
  }
}

@NgModule({
  exports: [
    HttpClientModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
