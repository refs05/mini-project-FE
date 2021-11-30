import { useMutation } from "@apollo/client";
import { UpdateLike } from "../graphql/mutation";

export default function useUpdateLike(id) {
    const [updateLike, {loading: loadingLike}] = useMutation(UpdateLike, {variables: { id: id}});

    return { updateLike, loadingLike };
}