export const FILTER_TABLIST = 'FILTER_TABLIST';
export const SEARCH_LIST = 'SEARCH_LIST';
export const HIDE_HEADER_SEARCH = 'HIDE_HEADER_SEARCH';
export const SHOW_HEADER_SEARCH = 'SHOW_HEADER_SEARCH';

export const filterTabList = ({ id, list }) => ({
    type: FILTER_TABLIST,
    detail: {
        id,
        list
    }
});

export const searchAllList = ({ value, searchList }) => ({
    type: SEARCH_LIST,
    detail: {
        value,
        searchList
    }
});

export const headerSearchHide = () => ({
    type: HIDE_HEADER_SEARCH,
});

export const headerSearchShow = () => ({
    type: SHOW_HEADER_SEARCH,
});