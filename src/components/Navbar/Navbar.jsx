import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS, animateScroll } from "react-scroll";

import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
	background: rgba(13, 34, 14, 0.5);
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`;

const NavLogo = styled(LinkS)`
	color: #fff;
	justify-content: flex-start;
	display: flex;
	cursor: pointer;
	font-size: 1.5rem;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;

		color: #01bf71;
	}
`;

//navbar element

const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
	}
`;

const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavItem = styled.li`
	height: 80px;
	.active {
		border-bottom: 1px solid white;
	}
`;

const NavLink = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #01bf71;
	}

	&:hover {
		transition: all 0.2s ease-in-out;

		color: #01bf71;
	}
`;

//button
const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: #01bf71;
	white-space: nowrap;
	padding: 10px 22px;
	color: #010606;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`;

function Navbar({ toggle }) {
	const scrollToTop = () => {
		animateScroll.scrollToTop();
	};
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo onClick={scrollToTop}>Portfolio</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLink
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								duration={500}
							>
								About
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								activeClass="active"
								to="projects"
								spy={true}
								smooth={true}
								duration={500}
							>
								Projects
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								duration={500}
							>
								Contact
							</NavLink>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/">Sign In</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
}

export default Navbar;
