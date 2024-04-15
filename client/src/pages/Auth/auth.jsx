import React from 'react'
import "./auth.css"
import { GoogleLogout } from 'react-google-login';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/currentuser';
import { Link } from 'react-router-dom';

function Auth({User,setAuthBtn,setEditcreatechanelbtn}) {
    const dispatch=useDispatch();
    const onLogoutSuccess=()=>{
        dispatch(setCurrentUser(null));
        alert("Log Out Successfull");
    }
  return (
    <div className='Auth_container' onClick={()=>setAuthBtn(false)}>
        <div className="Auth_container2">
            <p className='user_details'>
                <div className="channel_logo_app">
                    <p className="fstchar_logo_app">
                        {
                            User?.result.name?(
                            <>{User?.result.name.charAt(0).toUpperCase()}</>
                            ):(
                            <>{User?.result.email.charAt(0).toUpperCase()}</>)
                        }
                    </p>
                </div>
                    <div className="email_auth">{User?.result.email}</div>
            </p>
            <div className="btns_auth">
            {User?.result.name ? (
            <>
            {
                <Link to={`/chanel/${User?.result._id}`} className="btn_auth">
                    Your Channel
                </Link>
            }
            
            </>
          ) : (
            <>
            <input
                type="submit"
                className="btn_auth"
                value="Create Your Chanel"
                onClick={() => setEditcreatechanelbtn(true)}
              />
            </>
          )}
            </div>
            <div>
                <GoogleLogout
                    clientId={"74752645783-ugjgvunr2r5ndrb601csqem9vca1fp26.apps.googleusercontent.com"}
                    onLogoutSuccess={onLogoutSuccess}
                    render={(renderProps)=>(
                        <div onClick={renderProps.onClick} style={{color:"white"}} className='btn_auth'>
                            <BiLogOut/>
                            Log Out
                        </div>
                    )}
                />
            </div>
        </div>
    </div>
  )
}

export default Auth;


