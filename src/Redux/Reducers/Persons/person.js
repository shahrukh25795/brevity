
import * as actionTypes from '../../Actions/ActionType/actionType';


let initialState = {
    personList: ["old data"],
};

const person = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.PERSONS_LIST):
            return {
                ...state,
                personList: action.payload.personList,
            }
        default:
            return state
    }
};

export default person;