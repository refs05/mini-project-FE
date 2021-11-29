import { gql } from '@apollo/client'

export const LikeSubs = gql`
    subscription LikeSubs($id: Int!) {
        recipe(where: {id: {_eq: $id}}) {
        like
        }
    }
`