import { useMutation } from "@apollo/client";
import { StoreFeedBack } from "../graphql/mutation";

export default function useStoreFeedBack(message) {
    const [storeFeedBack, {loading: loadingStore}] = useMutation(StoreFeedBack, {variables: { message: message}});

    return { storeFeedBack, loadingStore };
}