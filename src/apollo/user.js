import {gql} from "apollo-boost";


export const SIGN_UP_COMPOSER = gql`
mutation newUser($email: String, $username: String, $password: String){
    newUser(email: $email, username: $username, password: $password){
        token
    }
}
`