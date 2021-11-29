import { useSubscription } from "@apollo/client";
import { LikeSubs } from "../GraphQL/subscription";

export default function useLikeSubs(id) {
    const {
        data: dataLikeSubs,
        loading: loadingLikeSubs,
        error: errorLikeSubs
    } = useSubscription(LikeSubs, {variables: {id:id}});
    
    return { dataLikeSubs, loadingLikeSubs, errorLikeSubs };
}