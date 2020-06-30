const reducer = (state, action) => {
    const {type,  context} =action
    const {loginUser,register} = state;
    switch (type) {
        case 'API_SUCCESS':{
            return {
                ...state,
                ...context
            }
        }
        case 'HANDLE_INPUT':{
            const {target:{value,id}}=context
            return {
                ...state,
                loginUser:{...loginUser,[id]:value}
            }
        }
        case 'FIREBASE_INITIAL':{
            const {val}=context
            return {
                ...state,
                isFirebaseLoaded:val
            }
        }
        case 'LOGIN':{
            
            return {
                ...state,
               routeRedirect:true
            }
        }

        default: {
            return state    
    }
        }
}
 
export default reducer