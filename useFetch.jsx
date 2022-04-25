import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null})

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [ ])

    
    useEffect ( () => {

        setState({data: null, loading: true, error: null})

        const getData = async () => {
            const response = await fetch(url)
            const json = await response.json();

            setTimeout(() => {

                if (isMounted.current) {
                    
                    setState ( {
                        loading: false,
                        error: null,
                        data: json
                    } )

                } else {
                    console.log('setState no se llamo')
                }
                

            }, 10);


        }
        getData()
    }, [url])
  
    return state;

}
