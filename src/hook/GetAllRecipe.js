import { useQuery } from "@apollo/client";
import { GetAllRecipe } from "../GraphQL/Query";

export default function useGetAllRecipe() {
    const {
        error: errorGetAllRecipe,
        loading: loadingGetAllRecipe,
        data: dataGetAllRecipe
    } = useQuery(GetAllRecipe);

    return { errorGetAllRecipe, loadingGetAllRecipe, dataGetAllRecipe }
}