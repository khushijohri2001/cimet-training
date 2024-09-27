const Reducer = (state, {type,payload}) => {
    switch(type){
        case "TRENDING_TOGGLE": return {
            ...state, trending: {data: payload.data, isLoading: payload.isLoading}
        }
        // case "POPULAR_TOGGLE": return {
        //     ...state, isPopular: payload
        // }
        default: state
    }
}

export default Reducer;