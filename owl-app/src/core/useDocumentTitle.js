import { useEffect } from 'react';

export function useUpdateDocumentTitle(title) {
    useEffect(() => {
        document.title = title
    }, [title])
}