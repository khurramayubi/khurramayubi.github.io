import { useState } from "react";
import "./App.css";
import reactIcon from "./assets/react.svg";
import Resume from "./components/Resume";

function App() {
	type SectionKey = "about" | "resume" | "projects" | "work";
	const [activeSection, setActiveSection] = useState<SectionKey>("about");
	const sections: { [key in SectionKey]: JSX.Element } = {
		about: <div>About Me Content</div>,
		resume: <Resume></Resume>,
		projects: <div>Projects Content</div>,
		work: <div>Work Experience Content</div>
	};
	return (
		<>
			<div className="flex flex-col lg:flex-row gap-6 p-4 mb-20 lg:mb-0">
				{/* Left Column */}
				<div className="lg:w-1/4 w-full bg-slate-100 p-4 rounded-lg shadow-md self-start">
					<img
						src={reactIcon}
						alt="Your Profile"
						className="rounded-full w-32 h-32 mx-auto mb-4"
					/>
					<div className="text-center space-y-2">
						<p className="font-bold">Khurram Butt</p>
						<p className="text-sm">khurram.ayubi@yahoo.com</p>
						<p className="text-sm">
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								LinkedIn Profile
							</a>
						</p>
					</div>
				</div>
				{/* Right Column */}
				<div className="lg:w-3/4 flex flex-col bg-slate-100 p-6 rounded-lg shadow-md relative">
					<div className="w-full flex flex-col lg:flex-row">
						{/* Left Section of Right Column */}
						<div className="flex-1 pr-6">
							<h2 className="text-2xl font-bold mb-3 capitalize">
								{activeSection}
							</h2>
							<div className="w-8 h-1 mb-12 bg-yellow-500"></div>
						</div>
						{/* Navbar */}
						<nav className="lg:w-auto w-full bg-[#333333] flex gap-2 lg:gap-4 p-4 lg:p-2 border-t lg:border-t-0 border-gray-300 lg:absolute fixed lg:top-0 lg:right-12 lg:bottom-auto bottom-0 lg:left-auto left-0 lg:rounded-b-xl lg:rounded-t-none rounded-t-xl">
							{Object.keys(sections).map((section) => (
								<a
									key={section}
									onClick={() => setActiveSection(section as SectionKey)} // Cast section to SectionKey
									className={`w-full lg:w-auto px-4 py-2 text-left lg:text-center rounded capitalize ${
										activeSection === section
											? "text-yellow-300"
											: " text-white hover:bg-gray-400"
									}`}
								>
									{section.replace(/_/g, " ")}
								</a>
							))}
						</nav>
					</div>
					<div className="pb-20 mb-20">{sections[activeSection]}</div>
				</div>
			</div>
		</>
	);
}

export default App;
