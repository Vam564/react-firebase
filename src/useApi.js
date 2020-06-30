import React,{  useEffect,useReducer } from 'react'
import reducer from './reducer/reducer'
import firebase from './firebase/config'
const useApi =()=> {
    const INITIAL_STATE = {
        
        loginUser:{
            email:'',
            user:'',
            password:''
        },
        isFirebaseLoaded:false,
        index:null,
        count:true,
        register:{
            userReg:'',
            emailReg:'',
            passwordReg:''
        },
        routeRedirect:false,
        User:'User'
        

    }
    
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const {login,register}=state

    // useEffect(() => {
    //     //document.getElementById("myinput").style.background = 'linear-gradient(to right, #2874f0 0%, #2874f0 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'

    //     fetch('https://jsonblob.com/api/4e238965-8e9e-11ea-b722-d12f7d7a3eee').then(response => response.json()).then(json => {
    //         let { carousel, mobiles, filterDropDown } = json
    //         setTimeout(() => {
    //             dispatch({ type: 'API_SUCCESS', context: { shoppingCart: [...mobiles], dropDown: [...filterDropDown],carousel:[...carousel], isAPILoaded: true } })
    //         }, 2000)

    //     })
    // }, []);
    useEffect(() => {
		firebase.isInitialized().then(val => {
			dispatch({type:'FIREBASE_INITIAL',context:{val}})
		})
	})

    const handleInput = ({target}) =>{
        dispatch({type:'HANDLE_INPUT',context:{target}})
    }
    return {
        state,
        // AddToCart,
        // display,
         handleInput,
        // incrementCounter,
        // decrementCounter,
        // deleteItem,
        // handleInputLog,
        // handleInputReg,
        // handleLog,
        // handleReg,
        // dropDownFilter
}
}

export default useApi
