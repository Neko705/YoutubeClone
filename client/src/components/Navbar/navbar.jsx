import React,{useEffect, useState} from "react";
import './navbar.css'
import logo from './youtube.ico'
import Searchbar from "./SearchBar/searchbar";
import {RiVideoAddLine} from 'react-icons/ri';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BiUserCircle} from 'react-icons/bi'
import {GoogleLogin} from 'react-google-login'
import { Link } from "react-router-dom";
import {gapi} from 'gapi-script'
import {useDispatch, useSelector} from 'react-redux'
import { login } from "../../actions/auth";
import Auth from "../../pages/Auth/auth";


function Navbar({toggleDrawer,setEditcreatechanelbtn}){

    const [AuthBtn, setAuthBtn] = useState(false)
   // const CurrentUser = null;
   // const CurrentUser={
   //     result:{
   //         email:"xyz@gmail.com",
   //         name:"xyz",
   //         joinedOn:"2222-07-15T09:57:23.489Z",
   //     },
   // };
   const CurrentUser = useSelector((state)=>state.currentUserReducer)
   console.log(CurrentUser)
   useEffect (()=>{
    function start(){
        gapi.client.init({
            clientId:'74752645783-ugjgvunr2r5ndrb601csqem9vca1fp26.apps.googleusercontent.com',
            scope:"email",
        });
    }
    gapi.load('client:auth2',start)
   },[])

    const dispatch=useDispatch();
    const onSuccess=(response)=>{
        const Email=response?.profileObj.email;
        console.log(Email);
        dispatch(login({email:Email}))
    }
    const onFailure=(response)=>{
        console.log('Failed',response)
    }
    return(
        <>
        <div className="container_navbar">
            <div className="Burger_logo_navbar">
                <div className="burger" onClick={()=>toggleDrawer()}>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <Link to={'/'} className="logo_div_navbar">
                    <img src={logo} alt="" />
                    <p className="logo_title_navbar">YouTube</p>
                </Link>
            </div>
            <Searchbar />
            <RiVideoAddLine size={24} className={"vid_bell_Navbar"}/>
            <IoMdNotificationsOutline size={24} className="vid_bell_Navbar"/>
            <div className="User_cont_navbar">
                {
                    CurrentUser ? (
                    <>
                      <div className="channel_logo_app" onClick={()=>setAuthBtn(true)}>
                        <p className="fstchar_logo_app">
                            {
                                CurrentUser?.result.name ?(
                                    <>
                                    {CurrentUser?.result.name.charAt(0).toUpperCase()}
                                    </>
                                ):(
                                    <>
                                    {CurrentUser?.result.email.charAt(0).toUpperCase()}
                                    </>)
                            }
                        </p>
                      </div>
                    </>
                    ):(
                    <>
                    <GoogleLogin
                    clientId={"74752645783-ugjgvunr2r5ndrb601csqem9vca1fp26.apps.googleusercontent.com"}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    render={(renderProps)=>(
                        <p onClick={renderProps.onClick} className="auth_btn">
                        <BiUserCircle  size={40} />
                    </p>)
                    }
                    />
                    </>
                )}
            </div>
        </div>
        {
            AuthBtn &&
            <Auth setEditcreatechanelbtn={setEditcreatechanelbtn} setAuthBtn={setAuthBtn} User={CurrentUser}/>
        }
        </>
    );
}

export default Navbar


