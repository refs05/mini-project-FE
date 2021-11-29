import { useMutation } from "@apollo/client";
import { UpdateLike } from "../GraphQL/mutation";

export default function useUpdateLike(id) {
    const [updateLike, {loading: loadingLike}] = useMutation(UpdateLike, {variables: { id: id}});

    return { updateLike, loadingLike };
}