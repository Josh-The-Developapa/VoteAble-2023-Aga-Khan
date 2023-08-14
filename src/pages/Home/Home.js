import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Svg from '../../assets/undraw_election_day_w842.svg';
import Svg2 from '../../assets/undraw_voting_nvu7.svg';
import Svg3 from '../../assets/undraw_growth_analytics_re_pyxf.svg';
import logo from '../../assets/VoteAble header image 2.png';
// import anime from 'animejs/lib/anime.es.js';
import CookieConsent from "react-cookie-consent";
import './Home.css';
// import ScrollToTop from "react-scroll-to-top";


function Home() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        // anime({
        //     targets: '.wcTxt',
        //     translateX: {
        //         value: 180,
        //         duration: 800
        //     },
        //     rotate: {
        //         value: 360,
        //         duration: 1800,
        //         easing: 'easeInOutSine'
        //     },
        //     // scale: {
        //     //     value: 2,
        //     //     duration: 1600,
        //     //     delay: 800,
        //     //     easing: 'easeInOutQuart'
        //     // },
        //     delay: 250 // All properties except 'scale' inherit 250ms delay
        // });
    }, []);

    return (
        <div className='FlexBG' style={{ paddingTop: '10px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Header />
            <h1 style={{ color: 'white', fontSize: '55px', marginLeft: '20px', marginRight: '5px', marginBottom: '-5px' }} className='wcTxt'>Welcome to VoteAble</h1>
            <p style={{ color: 'white', marginBottom: '25px', maxWidth: '750px', marginLeft: '20px', marginRight: '20px', lineHeight: '30px' }}> <b>VoteAble: Empowering Students, Amplifying Voices!</b> 🗣️🗳️ <br /><br />
                Introducing VoteAble, the online voting platform engineered by AI, Deep Learning & Software developer and enthusiast, <b>Joshua Mukisa</b>. I'm currently a student of Aga Khan Highschool in IBDP1.
                Presenting the future of voting
                to the hands of the students.  </p>
            <div className="hc">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: "10px" }} key="welc-1">
                    <img src={Svg} alt='voteable-svg' className='svg' />
                    <h1 style={{ color: 'white', marginRight: '20px', marginBottom: '50px', marginLeft: '20px' }} >Vote from anywhere</h1>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: "10px" }} key="welc-2">
                    <img src={Svg2} alt='voteable-svg' className='svg' style={{ marginRight: '20px', marginBottom: '20px' }} />
                    <h1 style={{ color: 'white', marginRight: '20px', marginBottom: '50px', marginLeft: '20px' }} >Convenient online polling</h1>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: "10px" }} key="welc-3">
                    <img src={Svg3} alt='voteable-svg' className='svg3' style={{ marginRight: '20px', marginBottom: '20px' }} />
                    <h1 style={{ color: 'white', marginRight: '20px', marginBottom: '50px', marginLeft: '20px' }} >Real-time Statistics</h1>

                </div>
            </div>
            <div className='hc'>
                <div className="pollc" style={{ paddingRight: '10px' }}>
                    <h1 style={{ paddingLeft: '10px' }}>Bringing Voting to you</h1>
                    <p>
                        {/* VoteAble looks to meet your needs by simplifying the online voting process.
                        VoteAble is purpose-built to work simply and beautifully for the everyday
                        user and provide the best possible user experience. */}
                        Introducing VoteAble Your Voice, Your Choice! Bringing the power of voting to students, igniting civic engagement and shaping the future. Join the movement for a brighter tomorrow!
                        {/* With VoteAble, students shape the path forward. Together, let's amplify our impact and drive change
                        through digital democracy!" */}
                    </p>
                </div>
                <div className="pollc" style={{ height: '340px' }}>
                    <h1>Results in seconds not hours</h1>
                    <p>Send a poll and get organised results in donut-chart form, within seconds. We take care of the complications, and make everything <br /><img src={logo} alt='VoteAble-logo' />
                    </p>
                </div>
                <div className="pollc" style={{ paddingRight: '10px' }}>
                    <h1>No more voting in labs</h1>
                    <p>Unlock the Full Potential of Voting with VoteAble! Seamlessly Navigate through a User-Friendly Interface. Enjoy a Spectrum of Features from the comfort of your phones!
                    </p>
                </div>
            </div>
            {/* <ScrollToTop smooth /> */}
            {/* <h1>Welcome to VoteAble</h1> */}
            <CookieConsent
                location="bottom"
                buttonText="I Accept"
                cookieName="Cookie-consent"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px", borderRadius: '10px' }}
                declineButtonStyle={{ borderRadius: '10px' }}
                enableDeclineButton
                expires={10}
            >
                This website uses cookies to enhance the user experience.{" "}
            </CookieConsent>
        </div >
    );
}

export default Home;