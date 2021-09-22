import { gql } from "apollo-angular";


export const USER = gql`
    query{
        user(login: "mechztccs"){
        name
        }
    }
`;