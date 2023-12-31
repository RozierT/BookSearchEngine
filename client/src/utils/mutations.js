import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput!) {
    saveBook(input: $input) {
        _id
        username
        email
        savedBooks {
            authors
            description
            bookId
            title
            image
            link
        }
        bookCount
    }
}
`

export const DELETE_BOOK = gql`
    mutation deleteBook($bookId: String!) { 
        deleteBook(bookId: $bookId) {
        _id
        username
        email
        savedBooks {
            authors
            description
            bookId
            title
            image
            link
        }
        bookCount
        }
}
`