import axios from 'axios'
import cookies from 'universal-cookie'

const cookie = new cookies()//cookies hasil import diatas adalah yg terbarunya cookie

export const onLoginClick = (user,pass)=>{
    return(dispatch)=> {
        axios.get(" http://localhost:2019/users",{
        params:{
            username:user,
            password:pass
        }
    }).then(res => {
        if(res.data.length>0){
            console.log(res.data[0])
            
            const {id,username}=res.data[0]
            dispatch({
                type:"Login Success",
                // payload:{ID : id, USERNAME : username} /* ini bentuk lain nya dr yg bawah */
                payload:{id,username}
            })
            // console.log(res.data);

            cookie.set('masihLogin',username,{path:'/'})//akan diarahkan ke home
        } else {
            
            dispatch({
                type:'AUTH_ERROR',
                payload:  'Username and Password gak match'
            })
        
            setTimeout(()=>{
                dispatch({
                    type:'AUTH_NO_MESS'
                })
            },3000)
        }
        
        
    }).catch(err=>{
        console.log("system eror");
        
    })

    }
}

export const onLogoutUser =()=>{
    cookie.remove('masihLogin')
    return {
        type:'Logout user' //tidak pakai dispatch karena mereturn sebuah objek
    }
}

export const keepLogin = (user) => {
    return dispatch => {

        axios.get('http://localhost:1996/users', {

            params: {

                username: user

            }

        })
            .then(res => {

                if(res.data.length > 0){

                    dispatch({

                        type: 'Login Success',

                        payload: {username: user}

                    })

                }

            })

    }

}