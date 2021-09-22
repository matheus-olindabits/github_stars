import { gql } from "apollo-angular";


export function userQuery(usuario: String) {
    return gql`
    query { 
        user(login: "${usuario}") {
        name, avatarUrl, bio, location, email, url, id
        starredRepositories {
        totalCount,
        nodes {
            name, id
        }
        }
    }
    }
    `;    
}


export function starQuery(idUsuario: String, idRepository: String) {
    return gql`
    mutation {
        addStar(input: {starrableId: "${idRepository}", clientMutationId: "${idUsuario}"} ) {
            __typename
      }
    }
    `;    
}
