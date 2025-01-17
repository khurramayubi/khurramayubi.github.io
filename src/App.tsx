import { useState } from "react";
import "./App.css";
import dp from "./assets/about-me/dp.jpeg";
import Resume from "./components/Resume";
import {
	IoChatbubbleOutline,
	IoCodeSlashOutline,
	IoLocationOutline,
	IoMailOutline,
	IoPersonOutline
} from "react-icons/io5";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialTile from "./components/SocialTile";
import SocialLinkIcon from "./components/SocialLinkIcon";
import { IconType } from "react-icons";
import AboutMe from "./components/AboutMe";
import { PiReadCvLogo } from "react-icons/pi";
import SectionHeader from "./components/Section/SectionHeader";

function App() {
	type SectionKey = "About Me" | "CV" | "projects" | "blog";
	const [activeSection, setActiveSection] = useState<SectionKey>("About Me");
	interface sectionProps {
		markup: JSX.Element;
		phoneIcon: IconType;
	}
	const sections: {
		[key in SectionKey]: sectionProps;
	} = {
		"About Me": {
			markup: <AboutMe />,
			phoneIcon: IoPersonOutline
		},
		CV: {
			markup: <Resume></Resume>,
			phoneIcon: PiReadCvLogo
		},
		projects: {
			markup: <div>Projects Content</div>,
			phoneIcon: IoCodeSlashOutline
		},
		blog: {
			markup: <div>Work Experience Content</div>,
			phoneIcon: IoChatbubbleOutline
		}
	};
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
							<SocialLinkIcon link="https://linkedin.com" icon={FaLinkedin} />
							<SocialLinkIcon link="https://linkedin.com" icon={FaGithub} />
							<SocialLinkIcon link="https://linkedin.com" icon={FaXTwitter} />
							<SocialLinkIcon link="https://linkedin.com" icon={FaMedium} />
						</div>
					</div>
				</div>
				{/* Right Column */}
				<div className="lg:w-3/4 flex flex-col bg-slate-100 p-6 rounded-lg shadow-md relative">
					<div className="w-full flex flex-col lg:flex-row">
						{/* Left Section of Right Column */}
						<SectionHeader heading={activeSection} />
						{/* Navbar */}
						<nav className="lg:w-auto w-full bg-[#1e1e1e] shadow-tile z-10 flex gap-2 lg:gap-4 p-4 lg:p-2 border-t lg:border-t-0 border-gray-300 lg:absolute fixed lg:top-0 lg:right-12 lg:bottom-auto bottom-0 lg:left-auto left-0 lg:rounded-b-xl lg:rounded-t-none rounded-t-xl justify-center items-center">
							{Object.keys(sections).map((section) => {
								const typedSection = section as SectionKey;
								const { phoneIcon: PhoneIcon } = sections[typedSection];
								return (
									<a
										key={typedSection}
										onClick={() => setActiveSection(typedSection)}
										className={`w-auto px-4 py-2 text-center capitalize items-center justify-items-center border-yellow-500 border-2 lg:border-0 rounded-xl cursor-pointer ${
											activeSection === section
												? "text-white lg:text-yellow-500  border-opacity-80 bg-yellow-500 bg-opacity-80 lg:bg-transparent font-bold"
												: "text-white hover:text-yellow-500"
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
												{section}
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
