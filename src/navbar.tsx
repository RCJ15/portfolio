import { useRef, useState, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import "./Navbar.css"

import Icon from "./Icon"

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
		<Icon
			src={icon}
			className={className}
			onClick={openLink}
			tooltip={tooltip}
		/>
	);
}

const Navbar = () => {
	//const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)
	const topRow = useRef<HTMLDivElement>(null);

	/*
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
	*/

	function updateTopRowSize() {
		if (topRow.current) {
			// setWidth(topRow.current.clientWidth);
			setHeight(topRow.current.clientHeight);
		}
	}

	/*
	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);

		return () => {
			window.removeEventListener('scroll', controlNavbar);
		}
	}, [lastScrollY]);
	*/

	useLayoutEffect(() => {
		updateTopRowSize();
		window.addEventListener("resize", updateTopRowSize);
		return () => window.removeEventListener("resize", updateTopRowSize);
	}, [])

	return (
		<>
			<div className="navbar">
				{/* <div className="background"/> */}
				<div className="topRow" ref={topRow}>
					<div className='limiter'>
						<div className='left'>
							<ClickableIcon
								link="https://github.com/RCJ15"
								icon="github"
								tooltip='Github' />

							<ClickableIcon
								link="https://rcj15.itch.io"
								icon="itch"
								tooltip='Itch.io' />

							<ClickableIcon
								link="https://www.linkedin.com/in/ruben-jervinge/"
								icon="linkedin"
								tooltip='LinkedIn' />

							<ClickableIcon
								link="mailto:ruben.jervinge@gmail.com"
								icon="mailButton"
								tooltip='Send me a mail' />

							<ClickableIcon
								link="cv.pdf"
								icon="cv"
								tooltip='My resume' />
						</div>

					<div className='fill'>
						<div className='name'>Ruben Jervinge</div>
					</div>

						<div className='right'>
							<NavigationText destination="/" text="Home" />
							<NavigationText destination="/about/" text="About" />
						</div>
					</div>

				</div>

				<div style={{
					margin: `calc(${height}px)`
				}} />

				<div className='titles'>

					<div className='yellowTitle'
						data-tooltip-id="tooltip"
						data-tooltip-content=""
					>

						<Icon src="music" className="icon" />

						Game Composer
					</div>

					<div className='blueTitle'
						data-tooltip-id="tooltip"
						data-tooltip-content=""
					>

						<Icon src="star" className="icon" />
						Sound Designer
					</div>

					<div className='greenTitle'
						data-tooltip-id="tooltip"
						data-tooltip-content=""
					>

						<Icon src="programmer" className="icon" />
						Audio Programmer
					</div>

				</div>

			</div >
		</>
	);
};

export default Navbar;