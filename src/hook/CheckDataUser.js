import { useLazyQuery } from "@apollo/client";
import { GetUserID } from "../GraphQL/Query";

export default function useGetUserID(email, password) {
    const [ getUserID, {
        error: errorGetUserID,
        loading: loadingGetUserID,
        data: dataGetUserID
    }] = useLazyQuery(GetUserID, {variables: { email: email, password: password }});

    return { getUserID, errorGetUserID, loadingGetUserID, dataGetUserID }
}