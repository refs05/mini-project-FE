import { useQuery } from "@apollo/client";
import { GetTrending } from "../GraphQL/Query";

export default function useGetTrending() {
    const {
        error: errorGetTrending,
        loading: loadingGetTrending,
        data: dataGetTrending
    } = useQuery(GetTrending);

    return { errorGetTrending, loadingGetTrending, dataGetTrending }
}