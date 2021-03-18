import { useState, useEffect } from 'react';

export function useAPI(url, options) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const doFetch = async (url, options) => {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        doFetch(url, options)
    }, [url, options])

    return {
        response: data,
        error,
        isLoading,
        refetch: doFetch
    }
}