import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/auth-reducer'

const Header = props => {
  const user = { ...localStorage };

  return (
      <header style={{background: 'yellow', gridArea: 'header'}}>
        <ul>
          {
            !!user.token
            ? <li> 
                <div style={{'fontSize': '18px'}}><NavLink to='/user'>{`${props.firstName} ${props.lastName}`}</NavLink></div>
                <div><button onClick={ props.logout }>Log out</button></div>
              </li>
            : <li>
                <div><NavLink to='/login'>Login</NavLink></div>
                <div><NavLink to='/register'>Log up</NavLink></div>
              </li>
          }
        </ul>
      </header>
  )
}


const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  firstName: state.auth.firstName,
  lastName: state.auth.lastName
})

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)