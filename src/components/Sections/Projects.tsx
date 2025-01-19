import { useState } from "react";
import SectionCard from "../Section/SectionCard";
import { FaFlutter, FaNodeJs } from "react-icons/fa6";
import { SiFirebase } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { DiAppstore } from "react-icons/di";
import { PiGooglePlayLogo } from "react-icons/pi";
import examBlitzlogo from "../../assets/projects/examblitz/logo.png";
import Carousel from "../Section/Carousel";
import Project from "./Project";
// Dynamically import all images from the screenshots folder
const images = import.meta.glob(
	"/src/assets/projects/examblitz/*.{png,jpg,jpeg,gif}",
	{ eager: true }
);
const imageList = Object.values(images).map((module) => {
	// Ensure the value is coerced to a string URL
	return (module as { default: string }).default;
});
export default function Projects() {
	const [activeProject, setActiveProject] = useState("");

	return (
		<>
			{activeProject && (
				<div>
					<div className="py-4">
						<a
							className="text-blue-500 cursor-pointer"
							onClick={() => setActiveProject("")}
						>
							&lt; Back to Projects List
						</a>
					</div>
					<Project heading={"ExamBlitZ"} />
					<Carousel images={imageList} />
				</div>
			)}
			{!activeProject && (
				<div className="grid grid-cols-2 gap-4">
					<div>
						<SectionCard
							title="ExamBlitZ"
							imgSrc={examBlitzlogo}
							techUsedIcons={[FaFlutter, SiFirebase, FaNodeJs]}
							links={[
								{
									link: "https://examblitzs-site.webflow.io/",
									icon: CgWebsite
								},
								{
									link: "https://apps.apple.com/ca/app/examblitz/id6739375659",
									icon: DiAppstore
								},
								{ link: "", icon: PiGooglePlayLogo }
							]}
							description="ExamBlitz is an innovative platform designed to create tailored
							exams for users based on their chosen topics."
							onViewDetails={() => setActiveProject("examblitz")}
						/>
					</div>
					<div onClick={() => setActiveProject("ExamBlitZ")} className=""></div>
				</div>
			)}
		</>
	);
}
