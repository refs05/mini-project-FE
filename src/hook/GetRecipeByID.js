import { useQuery } from "@apollo/client";
import { GetRecipeByID } from "../graphql/query";

export default function useGetRecipeByID(id) {
    const {
        error: errorGetRecipeByID,
        loading: loadingGetRecipeByID,
        data: dataGetRecipeByID
    } = useQuery(GetRecipeByID, {variables: { id: id }});

    return { errorGetRecipeByID, loadingGetRecipeByID, dataGetRecipeByID }
}