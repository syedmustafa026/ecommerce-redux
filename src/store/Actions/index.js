

const getDataFromApi = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "ADD_USERS", users: json })
            })
    }
}

export {
    getDataFromApi
}