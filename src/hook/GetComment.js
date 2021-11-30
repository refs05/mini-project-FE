import { useQuery } from "@apollo/client";
import { GetComment } from "../graphql/query";

export default function useGetComment(id) {
    const {
        error: errorGetComment,
        loading: loadingGetComment,
        data: dataGetComment,

    } = useQuery(GetComment, {variables: { id: id }});

    return { errorGetComment, loadingGetComment, dataGetComment }
}