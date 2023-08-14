import React, {
  useState, useContext, useCallback, useEffect
} from "react";
import avatarPic from "../../assets/VoteAble header image 2.png";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Menu from '@mui/icons-material/Menu';
import DropDown from "../../components/Drop-down/DropDown.js";
import Context from "../../Context/Context";
// import Cookies from 'js-cookie';
import Menuu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import avatarImg from '../../assets/avatarIcon.jpeg';
import { useNavigate } from 'react-router-dom';


function Header(props) {
  const ctx = useContext(Context);
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const handleClick = useCallback((event) => {
  //   setAnchorEl(event.currentTarget);
  // }, [anchorEl]);

  // const handleClose = useCallback(() => {
  //   setAnchorEl(null);
  // });

  const [banchorEl, setBanchorEl] = React.useState(null);
  const bopen = Boolean(banchorEl);
  const bhandleClick = (event) => {
    setBanchorEl(event.currentTarget);
  };
  const bhandleClose = () => {
    setBanchorEl(null);
  };


  const logout = useCallback(async () => {
    localStorage.removeItem('name');
    localStorage.removeItem('gender');
    localStorage.removeItem('password');
    localStorage.removeItem('class');
    localStorage.removeItem('house');

    setIsLoggedOut(true);
  }, []);

  useEffect(() => {
    if (isLoggedOut) {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, [isLoggedOut]);

  return (
    <div>
      {ctx.isDrop ? (
        <DropDown message={props.message}
        />
      ) : (
        ""
      )}
      <div className="navBar">
        <Menu
          className="Menu"
          style={{ fontSize: '30px' }}
          onClick={() => {
            ctx.setIsDropVal(true);
          }}
        />
        <Link to="/home" style={{ height: '50px' }}>
          <img src={avatarPic} alt="header" style={{ objectFit: 'contain', height: "50px" }} />
        </Link>
        {!localStorage.getItem('name') ? <NavLink to="/login" className="popo">
          Login
        </NavLink> : ''}
        {/* {!Cookies.get('jwt') ? <NavLink to="/signup" className='popo'>
          Signup
        </NavLink> : ''} */}
        {/* {Cookies.get('jwt') ?
          <div>
            <button className="btn-n" style={{ fontSize: '16.5px' }} aria-controls={open ? 'basic-menu' : undefined}
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
              <NavLink to="/create-poll" style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem>Create Poll</MenuItem>
              </NavLink >
              <NavLink to="/create-poll-chain" style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem>Create Poll Chain</MenuItem>
              </NavLink >
            </Menuu>
          </div> : ''} */}
        {localStorage.getItem('name') ?
          <div>
            <button className="btn-n" style={{ fontSize: '16.5px' }} aria-controls={bopen ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={bopen ? 'true' : undefined}
              onClick={bhandleClick}>Poll Hub
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
              <NavLink to="/polls" style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem>Polls</MenuItem>
              </NavLink >
              <NavLink to="/my-poll-chains" style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem>Poll Chains</MenuItem>
              </NavLink >
            </Menuu>
          </div> : ''}
        {localStorage.getItem('name') ? <NavLink to="/subscribe" className="btn-n">
          Donate
        </NavLink > : ''}
        {/* <div>
          <FormControl sx={{ m: 1, minWidth: 115 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Subscribe</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Subscribe"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <form action={`https://voteable-backend.onrender.com/create-checkout-session/price_1LbOFQFoXys89NW0tRyMKuaS`} method="POST">
                <button type="submit" style={{ backgroundColor: 'whitesmoke', border: 0 }}>
                  <MenuItem type='submit'>1 Month Access</MenuItem>
                </button>
              </form>
              <form action={`https://voteable-backend.onrender.com/create-checkout-session/price_1LbOGuFoXys89NW0Kb3rKtED`} method="POST">
                <button type="submit" style={{ backgroundColor: 'whitesmoke', border: 0 }}>
                  <MenuItem type='submit'>6 Month Access</MenuItem>
                </button>
              </form>
              <form action={`https://voteable-backend.onrender.com/create-checkout-session/price_1LbOIgFoXys89NW0JJ1RTzpS`} method="POST">
                <button type="submit" style={{ backgroundColor: 'whitesmoke', border: 0 }}>
                  <MenuItem type='submit'>12 Month Access</MenuItem>
                </button>
              </form>
            </Select>
          </FormControl>
        </div> */}

        {/* <form action='https://voteable-backend.onrender.com/v1/create-checkout-session' method="POST">
          <button className="btn-n" type="submit">Donate</button>
        </form> */}
        {localStorage.getItem('name') ? <button className="btn-n" onClick={logout} style={{ fontSize: '16px' }}>
          Logout
        </button> : ''}
        {localStorage.getItem('name') ? (
          <div className='profile-tab-btn' title="see-profile" id='ff' style={{ padding: '10px' }}>
            <img src={avatarImg} alt='avatarImg' className="avatarImg" />
            <p className='h5' style={{ margin: '10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '175px' }}>
              {localStorage.getItem('name')}
            </p>
          </div>
        ) : ''}


      </div>
    </div>
  );
}

export default Header;;
