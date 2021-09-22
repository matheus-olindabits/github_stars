import { gql } from "apollo-angular";


export const USER = gql`
    query{
        user(login: "mechztcc"){
        name
        }
    }
`;