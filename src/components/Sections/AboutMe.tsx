import { CgWebsite } from "react-icons/cg";
import FeatureBlock from "../Section/FeatureBlock";
import {
	IoApps,
	IoCameraOutline,
	IoMailOutline,
	IoPhonePortraitOutline,
	IoSettingsOutline
} from "react-icons/io5";
import SectionHeader from "../Section/SectionHeader";
import SectionCard from "../Section/SectionCard";
import { motion } from "motion/react";
import { projectsData } from "../../projects.tsx";
import resume from "/assets/about-me/Khurram_Butt_Resume.pdf";
import { PiReadCvLogo } from "react-icons/pi";

export default function AboutMe({
	onViewAllProjects
}: {
	onViewAllProjects: () => void;
}) {
	const featuredProjects = [
		projectsData["examblitz"],
		projectsData["mosque-aisha"]
	];

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<div className="prose">
					<p>
						Hi, I'm Khurram, a passionate coder who thrives on the thrill of
						building and bringing ideas to life. Nothing energizes me more than
						diving into a new project and seeing it evolve from concept to
						creation. Software development isn’t just work for me—it’s a
						fulfilling journey of constant learning and problem-solving that
						keeps me motivated and excited.
					</p>
					<p>
						When I’m not at my desk, you might find me behind a camera,
						capturing the world through my lens. Photography offers me a fresh
						perspective, and while I'm not the most artistic, it’s another way I
						explore creativity in my own way.
					</p>
					<p>
						I’m always curious, always learning, and always looking to take on
						new challenges!
					</p>
					<div className="flex flex-col lg:flex-row items-center gap-4">
						<button className="flex items-center gap-2 py-2 px-8 bg-yellow-500 rounded-full">
							<IoMailOutline className="text-white" />
							<a
								className="text-white decoration-transparent"
								href="mailto:khurram.ayubi@yahoo.com"
							>
								Contact Me
							</a>
						</button>
						<button className="flex items-center gap-2 py-2 px-8 bg-[#1e1e1e] rounded-full">
							<PiReadCvLogo className="text-white" />
							<a className="text-white decoration-transparent" href={resume}>
								Download Resume
							</a>
						</button>
					</div>
				</div>
			</motion.div>
			<div>
				<SectionHeader heading="What I Do" size="text-3xl" />
				<div className="flex flex-col gap-2 items-center justify-center">
					<div className="flex flex-col lg:flex-row  gap-2">
						<FeatureBlock
							heading="Web Development"
							description="I enjoy building web applications by working on both the front
									end and back end. From creating user-friendly interfaces to
									setting up functional back-end systems, I'm always excited to
									learn and grow as a developer."
							icon={CgWebsite}
						/>
						<FeatureBlock
							heading="App Development"
							description="I develop mobile applications, focusing on smooth performance
									and user-friendly designs. I aim to make every interaction
									intuitive and seamless."
							icon={IoPhonePortraitOutline}
						/>
					</div>
					<div className="flex flex-col lg:flex-row  gap-2">
						<FeatureBlock
							heading="Photography"
							description="I enjoy photography and occasionally capture some great shots—mostly by accident. Once a year, I manage to take a couple that actually look intentional. The rest? Let’s just say they build character."
							icon={IoCameraOutline}
						/>
						<FeatureBlock
							heading="Effortful Efficiency"
							description="I have a knack for automating tasks—even if it means spending
									hours scripting something I might only use once. It’s all
									about the joy of the process!"
							icon={IoSettingsOutline}
						/>
					</div>
				</div>
			</div>
			<SectionHeader heading="Featured Projects" />
			<div className="flex flex-col lg:flex-row gap-8">
				{featuredProjects.map(({ title, summary, logo, techUsed, links }) => {
					return (
						<SectionCard
							key={title}
							title={title}
							imgSrc={logo}
							techUsed={techUsed}
							links={links}
							description={summary}
						/>
					);
				})}
			</div>
			<div className="flex justify-end cursor-pointer">
				<div
					onClick={onViewAllProjects}
					className="flex items-center py-2 my-4 px-8 border-2 border-yellow-500 hover:bg-yellow-500 rounded-full hover:text-white gap-4"
				>
					<IoApps></IoApps>
					<button>View all projects</button>
				</div>
			</div>
		</>
	);
}
