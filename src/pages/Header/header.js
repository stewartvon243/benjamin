import React, {useEffect, useRef} from "react";
import { useState } from 'react';
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Outlet, Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './header.style.js';
import './header.scss';

function Header() {
    const navigate = useNavigate();
    const el = useRef();
    const elSocials = useRef();
    // const q = gsap.utils.selector(el);
    const s = gsap.utils.selector(elSocials);
    // const tl = useRef();
    const tlMenu = useRef();
    const [checked, setChecked] = useState(false);


    const animeOne = () => {
        tlMenu.current = gsap.timeline()
        .fromTo(s(".menu-one"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".menu-two"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".menu-three"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".menu-four"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".menu-five"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
    }
    const animeTwo = () => {
        tlMenu.current = gsap.timeline()
        .fromTo(s(".github"), {x: 20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".linkedin"), {x: 20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".twitter"), {x: 20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".schedule"), {x: 20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
    }

    const triggerAnime = () => {
        if (checked) {
            return animeOne(), animeTwo();
        }
        else if (!checked) {
            return null
        }
        return null
    }

    const check = () => {
        return checked = !checked
    }

    // useEffect(() => {
    //     tl.current = gsap.timeline()
    //   .to(q(".square"), {
    //     y: -15
    //   })
    //   .to(q(".square"), {
    //     duration: 1.5, ease: "bounce.out", y: 6, repeat: -1, yoyo: true
    //   });
    //   }, []);

      const nav = () => {
        return navigate('/'), window.location.reload();
        
      }

    return (
        <div className="header">
            <div className="logo" onClick={nav}>
              <object data={logo} type="image/svg+xml" title="Logo" alt="Logo">
                <p>No SVG support, here's a substitute</p>
              </object>
            </div>

          <div className="menu-toggle">
            <input type="checkbox" className="nav__checkbox" id="nav-toggle" checked={checked} onChange={e => setChecked(e.target.checked)} />
            <label htmlFor="nav-toggle" className="nav__button">
                <span className="nav__icon">&nbsp;</span>
            </label>
            <div className="navigation" ref={elSocials}>
                
                <div className="small_menu">
                    <ul>
                        <li className="menu-one"><NavLink className="nav-link" onClick={check} to="/">Home</NavLink></li>
                        <li className="menu-two"><NavLink className="nav-link" onClick={check} to="/work">Work</NavLink></li>
                        {/* <li className="menu-four"><a className="nav-link" href="#" target="_blank">Resume</a></li> */}
                        <li className="menu-five"><a className="nav-link" href="mailto:benjaminlee97511@gmail.com" target="_blank">Contact</a></li>
                    </ul>
                </div>    
            </div>
          </div>


        </div>
    )
}

export default Header