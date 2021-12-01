import { useMutation } from "@apollo/client";
import { DeleteComment } from "../graphql/mutation";
import { GetComment } from "../graphql/query";

export default function useDeleteComment(id) {
    const [deleteComment, {loading: loadingDelete}] = useMutation(DeleteComment, {
        refetchQueries: [GetComment]
    } , {variables: { id: id},});

    return { deleteComment, loadingDelete };
}