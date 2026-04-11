import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import "./Navbar.css"

import GithubIcon from "/icon/github.svg";
import ItchIcon from "/icon/itch.svg";
import LinkedinIcon from "/icon/linkedin.svg";
import CvIcon from "/icon/cv.svg";
import MailIcon from "/icon/mail.svg";
import UnityIcon from "/icon/unity.svg";
import UnrealIcon from "/icon/unreal.svg";
import MusicIcon from "/icon/music.svg";
/*
import GamingIcon from "/icon/gaming.svg";
import ProgrammerIcon from "/icon/programmer.svg";
import StarIcon from "/icon/star.svg";
*/

function NavigationText({ destination, text }: { destination: string; text: string }) {
	const location = useLocation();
	const navigate = useNavigate();

	const doNavigate = () => {
		navigate(`${destination}`, { viewTransition: true });
	};

	return (
		<div className={location.pathname == destination ? 'navigationTextActive' : 'navigationText'} onClick={doNavigate}>{text}</div>
	)
}

function ClickableIcon({ link, icon, tooltip, className = "clickableIcon" }: { link: string; icon: string; tooltip: string; className?: string; }) {
	const openLink = () => {
		window.open(`${link}`, '_blank', 'noopener,noreferrer');
	};

	return (
		<>
			<svg className={className}
			onClick={openLink}
			data-tooltip-id="tooltip"
			data-tooltip-content={tooltip}>
				<use href={icon}/>
			</svg>
		</>
	);
}

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
							<ClickableIcon
								link="https://github.com/RCJ15"
								icon={GithubIcon}
								tooltip='Github' />

							<ClickableIcon
								link="https://rcj15.itch.io"
								icon={ItchIcon}
								tooltip='Itch.io' />

							<ClickableIcon
								link="https://www.linkedin.com/in/ruben-jervinge/"
								icon={LinkedinIcon}
								tooltip='LinkedIn'
								className='linkedinIcon' />

							<ClickableIcon
								link="cv.pdf"
								icon={CvIcon}
								tooltip='My resume' />

						</div>

						<div className='name'>Ruben Jervinge</div>

						<div className='right'>
							<NavigationText destination="/" text="Home" />
							<NavigationText destination="/about/" text="About" />
						</div>
					</div>

					{/*
					<div className="pretentiousQuote">
						{width >= 690 ? '"Lorem ipsum dolor sit amet"' : ( width >= 570 ? '"Lorem Ipsum"' : "")}
					</div>
					*/}

					<div className='titles'>

						<div className='gameDeveloperTitle'
							data-tooltip-id="tooltip"
							data-tooltip-content="Unity & Unreal Engine"
						>

							<img className="icon" src={UnityIcon} />
							<img className="icon" src={UnrealIcon} />
							Game Developer</div>

						{/*
						<div className='title'>
							<svg className="icon">
								<use href={ProgrammerIcon}></use>
							</svg>
							Programmer</div>
							*/}

						<div className='soundDesignerTitle'
							data-tooltip-id="tooltip"
							data-tooltip-content="Audacity & FL Studio"
						>
							<img className="icon" src={MusicIcon} />
							Sound Designer/Composer</div>

						{/*
						<div className='title'>
							<svg className="icon">
								<use href={StarIcon}></use>
							</svg>
							VFX Artist</div>
							*/}
					</div>


					<div className="mail"
						onClick={openMail}
						data-tooltip-id="tooltip"
						data-tooltip-content="Contact me!"
					>
						<img className="icon" src={MailIcon} />
						<div className='link'>
							ruben.jervinge@gmail.com
						</div>
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