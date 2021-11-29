import { useMutation } from "@apollo/client";
import { UnLike } from "../GraphQL/mutation";

export default function useUnLike(id) {
    const [unLike, {loading: loadingLike}] = useMutation(UnLike, {variables: { id: id}});

    return { unLike, loadingLike };
}