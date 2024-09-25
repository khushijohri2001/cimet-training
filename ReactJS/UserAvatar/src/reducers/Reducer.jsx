const Reducer = (state, action) => {
    switch(action.type){
        case "ADD_AVATAR": return{
            ...state,
            users:[...state.users, action.payload ]
        };
        case "REMOVE_AVATAR": {
            const updatedUsers = state.users.filter((user) => user.id !== action.payload);
            
            return{
                ...state,
                users: updatedUsers
            }
        }
    }
}

export default Reducer