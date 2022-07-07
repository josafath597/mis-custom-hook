import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const [state, setState] = useState(
        {
            data: [],
            isLoading: true,
            error: null
        }
    )

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setTimeout(() => {

            setState({
                data,
                isLoading: false,
                error: null
            })
            
        }, 100);


    }

    useEffect(() => {
        getFetch();
    }, [url]);
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    };
}
