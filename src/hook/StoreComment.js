import { useMutation } from "@apollo/client";
import { StoreComment } from "../graphql/mutation";
import { GetComment } from "../graphql/query";

export default function useStoreComment(comment, recipe_id, user_id) {
    const [storeComment, {loading: loadingStore}] = useMutation(StoreComment, {
        refetchQueries: [GetComment]
    }, {variables: { comment: comment, recipe_id: recipe_id, user_id: user_id }});

    return { storeComment, loadingStore };
}