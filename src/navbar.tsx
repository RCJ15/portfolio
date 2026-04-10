import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import "./navbar.css"
import GithubIcon from "/icon/github.svg";
import ItchIcon from "/icon/itch.svg";
import MailIcon from "/icon/mail.svg";
import GamingIcon from "/icon/gaming.svg";
import ProgrammerIcon from "/icon/programmer.svg";
import MusicIcon from "/icon/music.svg";
import StarIcon from "/icon/star.svg";

const Navbar = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
	const navbar = useRef<HTMLDivElement>(null);
	
	const [visible, setVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (window.scrollY > lastScrollY && window.scrollY > 50) {
			setVisible(false); // hide when scrolling down
		} else {
			setVisible(true); // show when scrolling up
		}
		setLastScrollY(window.scrollY);
	};

	function updateNavbarSize() {
    if (navbar.current) {
      setWidth(navbar.current.clientWidth);
      setHeight(navbar.current.clientHeight);
    }
  }

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);

		return () => {
			window.removeEventListener('scroll', controlNavbar);
		}
	}, [lastScrollY]);

	useLayoutEffect(() => {
		updateNavbarSize();
  	window.addEventListener("resize", updateNavbarSize);
  	return () => window.removeEventListener("resize", updateNavbarSize);
	}, [])

	const openGithub = () => {
    window.open('https://github.com/RCJ15', '_blank', 'noopener,noreferrer');
  };
	const openItch = () => {
    window.open('https://rcj15.itch.io', '_blank', 'noopener,noreferrer');
  };
	
	const openMail = () => {
		window.location.href = `mailto:ruben.jervinge@gmail.com?subject=Hello!&body=Lorem ipsum dolor sit amet`;
	};


	return (
		<>
			<div className="navbar">
				<div ref={navbar} id={visible ? "visible" : "hidden"} style={{
					top: `${visible ? `0px` : `calc(${height}px * -1 - 30px)`}`
				}}>
					<div className="topRow">
						<div className='left'>
							<div className="row">
							<svg 
								className="icon" 
								onClick={openGithub}
								>
								<use href={GithubIcon}></use>
							</svg>
							<svg 
								className="icon" 
								onClick={openItch}
								>
								<use href={ItchIcon}></use>
							</svg>
							</div>
							<div className="row">
								<svg className="mailIcon"
									onClick={openMail}
									>
									<use href={MailIcon}></use>
								</svg>
								<div className='link' onClick={openMail}>
									ruben.jervinge@gmail.com
								</div>
							</div>
						</div>
						<div className='name'>Ruben Jervinge</div>
						<div className='right'>Right</div>
					</div>
					
					<div className="pretentiousQuote">
						{width >= 690 ? '"Lorem ipsum dolor sit amet"' : ( width >= 570 ? '"Lorem Ipsum"' : "")}
					</div>

					<div className='titles'>

						<div className='title'>
							<svg className="icon">
								<use href={GamingIcon}></use>
							</svg>
							Game Developer</div>

						<div className='title'>
							<svg className="icon">
								<use href={ProgrammerIcon}></use>
							</svg>
							Programmer</div>

						<div className='title'>
							<svg className="musicIcon">
								<use href={MusicIcon}></use>
							</svg>
							Sound Designer/Composer</div>

						<div className='title'>
							<svg className="icon">
								<use href={StarIcon}></use>
							</svg>
							VFX Artist</div>
					</div>
				</div>
			</div>
			<div style={{
          margin: `calc(${height}px / 2)`
        }}>
			</div>
		</>
	);
};

export default Navbar;