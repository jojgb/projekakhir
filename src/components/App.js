import React , { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import cookies from 'universal-cookie'
import  Home from './Home'
import Login from './Login'
import Header from './Header'
import {keepLogin} from '../actions'
import { connect } from 'react-redux';


const cookie = new cookies()
class App extends Component{
    //lifecycle hook /method
    componentDidMount(){ //akan dijalankan sekali ketika pertama kali komponen di render
        //render akan dijalankan dulu sekali baru didmount dijalankan
        var userCookie=cookie.get('masihLogin')
        if (userCookie !== undefined){
            console.log("cookie ada")

            // function keepLogin akan me-loginkan ulang username yg tersimpan pada file cookie

            this.props.keepLogin(userCookie)
        }
    }
    render (){ //render adalah function bawaan
    return  ( 
        <BrowserRouter>
        
        <div>
        <Header/>
            <Route path="/" exact component={Home}/> 
            <Route path="/login" component={Login}/>
        </div>
        </BrowserRouter>
    )
  }
}

export default connect(null, {keepLogin})(App)