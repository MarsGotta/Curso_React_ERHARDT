import { createStore } from 'redux';

const initialState = {
    tabList: {
        filterId: 1,
        filterList: []
    },
    showSearch: false,
    showNav: false,
    showHeaderSearch: true,
    searchList: [],
    searchInput: ''
};

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_TABLIST':
            const { list, id } = action?.detail;
            return {
                ...state,
                tabList: {
                    ...state?.tabList,
                    filterList: [...list].filter((item) => (item.genreId === id || id === 1) && item),
                    filterId: id
                }

            };
        case 'SEARCH_LIST':
            const { searchList, value = '' } = action?.detail;
            const listSearched = [...searchList].filter(({ title, author }) => {
                const searchLowerCase = value?.toLowerCase()
                return title?.toLowerCase().includes(searchLowerCase) || author?.toLowerCase().includes(searchLowerCase)
            })
            return {
                ...state,
                searchList: listSearched.length >= 0 && value !== '' ? listSearched : searchList,
                searchInput: value
            };
        case 'HIDE_HEADER_SEARCH':
            return {
                ...state,
                showHeaderSearch: false
            };
        case 'SHOW_HEADER_SEARCH':
            return {
                ...state,
                showHeaderSearch: true
            };
        default:
            return state;
    }
};

export default createStore(RootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());