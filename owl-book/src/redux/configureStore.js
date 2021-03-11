import { createStore } from 'redux';

const initialState = {
    tabList: {
        filterId: 1,
        filterList: []
    }
};

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_TABLIST':
            const { list, id } = action?.detail;
            debugger
            return {
                ...state,
                tabList: {
                    ...state?.tabList,
                    filterList: [...list].filter((item) => (item.genreId === id || id === 1) && item),
                    filterId: id
                }

            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};

export default createStore(RootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());