import { gql } from '@apollo/client'

export const GetTrending = gql`
    query GetTrending {
        recipe(order_by: {like: desc}) {
        difficulty
        id
        like
        thumb
        title
        comments {
            id
            comment
        }
        }
    }
`

export const GetRecipeByID = gql`
    query GetRecipeByID($id: Int!) {
        recipe(where: {id: {_eq: $id}}) {
        datePublish
        desc
        difficulty
        id
        ingredient
        like
        portion
        publisher
        step
        thumb
        time
        title
        }
    }
`

export const GetAllRecipe = gql`
    query GetAllRecipe {
        recipe {
        difficulty
        like
        title
        thumb
        time
        id
        comments {
            id
            comment
        }
        }
    }
`

export const GetUserID = gql`
    query GetUserId($email: String = "", $password: String = "") {
        user(where: {password: {_eq: $password}, email: {_eq: $email}}) {
        id
        email
        password
        }
    }
`

export const GetComment = gql`
    query GetComment($id: Int!) {
        comment(where: {recipe_id: {_eq: $id}}) {
        id
        comment
        user {
            id
            email
        }
        }
    }
`