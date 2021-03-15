export const FILTER_TABLIST = 'FILTER_TABLIST';
export const DECREMENT = 'DECREMENT';

export const filterTabList = ({ id, list }) => ({
    type: FILTER_TABLIST,
    detail: {
        id,
        list
    }
});

export const decrement = () => ({
    type: DECREMENT
});