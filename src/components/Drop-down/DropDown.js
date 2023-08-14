import React, { useContext } from "react";
import "./DropDown.css";
import { NavLink } from "react-router-dom";
import avatarPic from "../../assets/VoteAble logo.png";
import Context from "../../Context/Context";
import Menuu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import avatarImg from '../../assets/avatarIcon.jpeg';




function DropDown(props) {
  const ctx = useContext(Context);

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const [banchorEl, setBanchorEl] = React.useState(null);
  const bopen = Boolean(banchorEl);
  const bhandleClick = (event) => {
    setBanchorEl(event.currentTarget);
  };
  const bhandleClose = () => {
    setBanchorEl(null);
  };
  const logout = async () => {
    localStorage.removeItem('name');
    localStorage.removeItem('gender');
    localStorage.removeItem('password');
    localStorage.removeItem('class');
    localStorage.removeItem('house');

    window.location.reload();
  };

  return (
    <div>
      <div
        className="tsBG"
        onClick={() => {
          ctx.setIsDropVal(false);
        }}
      ></div>
      <div className="dropdown">
        <NavLink to="/home" style={{ marginTop: '15px' }}>
          <img src={avatarPic} alt="header" className="img" onClick={() => {
            ctx.setIsDropVal(false);
          }} />
        </NavLink>
        {localStorage.getItem('name') ? (
          <div className='profile-tab-btn' title="see-profile" style={{ padding: '10px' }}>
            <img src={avatarImg} alt='avatarImg' className="avatarImg" />
            <p className='h5' style={{ margin: '10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '175px' }}>
              {localStorage.getItem('name')}
            </p>
          </div>
        ) : ''}
        {!localStorage.getItem('name') ? <NavLink to="/login">
          <button className="btnn" style={{ fontSize: '16.5px' }} onClick={() => {
            ctx.setIsDropVal(false);
          }}>Login</button>
        </NavLink> : ''}
        {localStorage.getItem('name') ?
          <div>
            <button className="btnn" style={{ fontSize: '16.5px' }} aria-controls={bopen ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={bopen ? 'true' : undefined}
              onClick={bhandleClick
              }>Poll Hub
            </button>
            <Menuu
              id="basic-menu"
              anchorEl={banchorEl}
              open={bopen}
              onClose={bhandleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <NavLink to="/polls" style={{ textDecoration: 'none', color: 'black' }} onClick={() => {
                ctx.setIsDropVal(false);
              }}>
                <MenuItem>Polls</MenuItem>
              </NavLink >
              <NavLink to="/my-poll-chains" style={{ textDecoration: 'none', color: 'black' }} onClick={() => {
                ctx.setIsDropVal(false);
              }}>
                <MenuItem>Poll Chains</MenuItem>
              </NavLink >
            </Menuu>
          </div> : ''}

        {/* <form action='http://localhost:8000/v1/create-checkout-session' method="POST">
          <button className="btnn" type="submit">Donate</button>
        </form> */}
        {localStorage.getItem('name') ? <NavLink to="/subscribe">
          <button className="btnn" style={{ fontSize: '16.5px' }} onClick={() => {
            ctx.setIsDropVal(false);
          }}>Donate</button>
        </NavLink > : ''}
        {/* {Cookies.get('jwt') ?
          <div>
            <button className="btnn" style={{ fontSize: '16.5px' }} aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>Create
            </button>
            <Menuu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <NavLink to="/create-poll" style={{ textDecoration: 'none', color: 'black' }} onClick={() => {
                ctx.setIsDropVal(false);
              }}>
                <MenuItem>Create Poll</MenuItem>
              </NavLink >
              <NavLink to="/create-poll-chain" style={{ textDecoration: 'none', color: 'black' }} onClick={() => {
                ctx.setIsDropVal(false);
              }}>
                <MenuItem>Create Poll Chain</MenuItem>
              </NavLink >
            </Menuu>
          </div> : ''} */}
        {localStorage.getItem('name') ? <button className="btnn" style={{ fontSize: '16.5px' }} onClick={logout}>
          Logout
        </button> : ''}
      </div>
    </div>
  );
}

export default DropDown;
