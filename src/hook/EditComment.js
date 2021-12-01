import { useMutation } from "@apollo/client";
import { UpdateComment } from "../graphql/mutation";
import { GetComment } from "../graphql/query";

export default function useUpdateComment(comment, rec_id, email, id) {
    const [updateComment, {loading: loadingUpdate}] = useMutation(UpdateComment, {
        refetchQueries: [GetComment]
    }, {variables: { rec_id: rec_id, email: email, comment: comment,  id: id }});

    return { updateComment, loadingUpdate };
}