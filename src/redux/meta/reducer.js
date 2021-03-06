import {
    SET_META,
} from './actions';

const initState = {
    meta: 'meta'
};

const meta = (state = initState, action) => {
    switch (action.type) {
        case SET_META:
            return {
                ...state,
                ...action.meta,
            };
        default:
            return state;
    }
};

export default meta;