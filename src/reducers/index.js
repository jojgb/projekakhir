import {combineReducers} from 'redux'

const init = {
    id :'',
    username:'',
    error:'',
    success:''
}
const AuthReducer =(state = init ,action)=> {
    switch (action.type){
        case 'Login Success':
        return{...state,id: action.payload.id , username : action.payload.username}/* ...untuk mengambil nilai objek lama ke objek baru */
        /* id di init ditimpa dari payload.id */
        
        case 'AUTH_ERROR':
        return {...state,error:action.payload, success : ''}

        case 'AUTH_SUCCESS':
        return {...state,error:'',success:action.payload}

        case 'AUTH_NO_MESS':
        return {...state,error:'',success:''}

        case 'Logout user':
        return {...state,...init}

        default :
        return state
    }
}

export default combineReducers(
    {
        auth : AuthReducer
    }
)