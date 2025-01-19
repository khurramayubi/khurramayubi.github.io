import { useState } from "react";
import "./App.css";
import dp from "./assets/about-me/dp.jpeg";
import Resume from "./components/Sections/Resume";
import {
	IoCodeSlashOutline,
	IoLocationOutline,
	IoMailOutline,
	IoPersonOutline
} from "react-icons/io5";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialTile from "./components/Section/SocialTile";
import SocialLinkIcon from "./components/Section/SocialLinkIcon";
import { IconType } from "react-icons";
import AboutMe from "./components/Sections/AboutMe";
import { PiReadCvLogo } from "react-icons/pi";
import SectionHeader from "./components/Section/SectionHeader";
import { BsHeartFill } from "react-icons/bs";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import Projects from "./components/Sections/Projects";

function App() {
	interface SectionProps {
		title: string;
		markup: JSX.Element;
		phoneIcon: IconType;
	}
	const sections: Record<string, SectionProps> = {
		about: {
			title: "About Me",
			markup: (
				<AboutMe onViewAllProjects={() => setActiveSection("projects")} />
			),
			phoneIcon: IoPersonOutline
		},
		cv: {
			title: "Curriculum Vitae",
			markup: <Resume></Resume>,
			phoneIcon: PiReadCvLogo
		},
		projects: {
			title: "Projects",
			markup: <Projects />,
			phoneIcon: IoCodeSlashOutline
		}
	};
	const [activeSection, setActiveSection] =
		useState<keyof typeof sections>("about");
	return (
		<>
			<div className="flex flex-col lg:flex-row gap-6 p-4 mb-20 lg:mb-0">
				{/* Left Column */}
				<div className="lg:w-1/4 w-full bg-slate-100 p-4 rounded-lg shadow-md self-start place-items-center">
					<img
						src={dp}
						alt="Your Profile"
						className="rounded-2xl w-32 h-32 mx-auto mb-4"
					/>
					<div className="space-y-2 text-center">
						<h2 className="text-2xl font-bold">Khurram Ayubi Butt</h2>
						<blockquote className="italic text-sm">
							“If You Cannot Do Great Things, Do Small Things in a Great Way” —
							Napoleon Hill
						</blockquote>
						<hr className="border-gray-800" />
						<SocialTile
							icon={IoMailOutline}
							heading="Email"
							text="khurram.ayubi@yahoo.com"
						/>
						<SocialTile
							icon={IoLocationOutline}
							heading="Location"
							text="Niagara Falls"
							subtext="Ontario, Canada"
						/>
						<SocialTile
							icon={IoMailOutline}
							heading="Email"
							text="khurram.ayubi@yahoo.com"
						/>
						<div className="flex flex-row justify-evenly text-2xl py-4">
							<SocialLinkIcon
								link="https://www.linkedin.com/in/kayubibutt/"
								icon={FaLinkedin}
							/>
							<SocialLinkIcon
								link="https://github.com/khurramayubi"
								icon={FaGithub}
							/>
							<SocialLinkIcon link="https://linkedin.com" icon={FaXTwitter} />
							<SocialLinkIcon
								link="https://khurram-ayubi.medium.com/"
								icon={FaMedium}
							/>
						</div>
						<div className="flex flex-col items-center justify-center gap-2">
							<small className="flex items-center">
								Made With
								<BsHeartFill className="text-red-500 mx-2" />
							</small>
							<div className="flex gap-4">
								<SiReact />
								<SiTypescript />
								<SiTailwindcss />
							</div>
						</div>
					</div>
				</div>
				{/* Right Column */}
				<div className="lg:w-3/4 flex flex-col bg-slate-100 p-6 rounded-lg shadow-md relative">
					<div className="w-full flex flex-col lg:flex-row">
						{/* Left Section of Right Column */}
						<SectionHeader heading={sections[activeSection].title} />
						{/* Navbar */}
						<nav className="lg:w-auto w-full bg-[#1e1e1e] shadow-tile z-10 flex gap-2 lg:gap-4 p-4 lg:p-2 border-t lg:border-t-0 border-gray-300 lg:absolute fixed lg:top-0 lg:right-12 lg:bottom-auto bottom-0 lg:left-auto left-0 lg:rounded-b-xl lg:rounded-t-none rounded-t-xl justify-center items-center">
							{Object.keys(sections).map((section) => {
								const { phoneIcon: PhoneIcon } = sections[section];
								return (
									<a
										key={section}
										onClick={() => setActiveSection(section)}
										className={`w-auto px-4 py-2 text-center capitalize items-center justify-items-center border-yellow-500 border-2 lg:border-0 rounded-xl cursor-pointer text-white ${
											activeSection === section
												? " lg:text-yellow-500  border-opacity-80 bg-yellow-500 bg-opacity-80 lg:bg-transparent font-bold"
												: " hover:text-yellow-500"
										}`}
									>
										<div className="flex lg:flex-row-reverse gap-1">
											<p
												className={`text-xs pr-2 ${
													activeSection === section
														? "block"
														: "hidden lg:block"
												}  lg:block`}
											>
												{sections[section].title}
											</p>
											<PhoneIcon className="block" />
										</div>
									</a>
								);
							})}
						</nav>
					</div>
					<div className="">{sections[activeSection].markup}</div>
				</div>
			</div>
		</>
	);
}

export default App;
