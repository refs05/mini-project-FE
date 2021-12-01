import { gql } from '@apollo/client'

export const StoreComment = gql`
    mutation StoreComment($comment: String!, $recipe_id: Int!, $user_id: Int!) {
        insert_comment(objects: {comment: $comment, recipe_id: $recipe_id, user_id: $user_id}) {
        returning {
            id
            comment
            recipe_id
            user_id
        }
        }
    }
`

export const StoreFeedBack = gql`
    mutation StoreFeedBack($message: String!) {
        insert_feedback(objects: {message: $message}) {
        affected_rows
        }
    }
`

export const UpdateLike = gql`
    mutation UpdateLike($id: Int!) {
        update_recipe(where: {id: {_eq: $id}}, _inc: {like: 1}) {
        affected_rows
        }
    }
`

export const UnLike = gql`
    mutation UnLike($id: Int!) {
        update_recipe(where: {id: {_eq: $id}}, _inc: {like: -1}) {
        affected_rows
        }
    }
`

export const UpdateComment = gql `
    mutation EditComment($rec_id: Int!, $email: String!, $id: Int!, $comment: String!) {
        update_comment(where: {recipe_id: {_eq: $rec_id}, user: {email: {_eq: $email}}, id: {_eq: $id}}, _set: {comment: $comment}) {
        affected_rows
        returning {
            comment
            user {
            email
            }
        }
        }
    }
`

