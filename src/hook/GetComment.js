import { useQuery } from "@apollo/client";
import { GetComment } from "../GraphQL/Query";

export default function useGetComment(id) {
    const {
        error: errorGetComment,
        loading: loadingGetComment,
        data: dataGetComment,
        refetch
    } = useQuery(GetComment, {variables: { id: id }});

    return { errorGetComment, loadingGetComment, dataGetComment, refetch }
}