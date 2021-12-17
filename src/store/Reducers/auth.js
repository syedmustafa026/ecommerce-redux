const INITIAL_STATE = {
    phone: 34545454,
    email: "ghous@gmail.com",
    users: []
}

const auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATE":
            return ({
                ...state,
                email: action.new_email
            })
        case "ADD_USERS":
            return ({
                ...state,
                users: action.users
            })
        default:
            return state;
    }
}

export default auth;