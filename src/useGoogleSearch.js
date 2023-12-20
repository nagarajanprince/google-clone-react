import { useState, useEffect } from "react";
import API_KEY from './Keys';
import axios from "axios";

const CONTEXT_KEYS = "a201ab2237efd4cc2";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
       term &&  axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEYS}&q=${term}`)
        .then(res => {
            setData(res.data);
        })
    },[term]);

    return { data };
}


export default useGoogleSearch;


