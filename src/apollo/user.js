import {gql} from "apollo-boost";


export const SIGN_UP_COMPOSER = gql`
    mutation newUser($email: String, $username: String, $password: String){
        newUser(email: $email, username: $username, password: $password){
            token
        }
    }
`

export const SIGN_IN_COMPOSER = gql`
    mutation login($email: String, $password: String){
        login(email: $email, password: $password){
            token
        }
    }
`