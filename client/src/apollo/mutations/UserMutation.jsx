import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
export const SignUp = (email, username, password) => {
    const [userData, setUserData] = useState([])
    const [newUser] = useMutation(NEW_USER);
    setUserData([
        email,
        username,
        password
    ]);
    const NEW_USER = gql`
    newUser(email: String, username: String, password: String) {
         token
    }`;
}