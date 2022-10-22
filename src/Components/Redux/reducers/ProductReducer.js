import { ADD_TO_CART } from "../actions/Constants";

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data]
        default:
            return data
    }
}