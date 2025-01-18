import { CgWebsite } from "react-icons/cg";
import FeatureBlock from "../Section/FeatureBlock";
import {
	IoCameraOutline,
	IoPhonePortraitOutline,
	IoSettingsOutline
} from "react-icons/io5";
import SectionHeader from "../Section/SectionHeader";
import examBlitzlogo from "../../assets/projects/examblitz/logo.png";
import mosqueaishaLogo from "../../assets/projects/mosque-aisha/logo.png";
import { DiAppstore } from "react-icons/di";
import { PiGooglePlayLogo } from "react-icons/pi";
import { FaFlutter } from "react-icons/fa6";
import { SiFirebase, SiPostgresql } from "react-icons/si";
import { FaCss3, FaHtml5, FaJava, FaNodeJs } from "react-icons/fa";
import SectionCard from "../Section/SectionCard";
import { BsAmazon } from "react-icons/bs";

export default function AboutMe() {
	return (
		<>
			<div className="prose">
				<p>
					Hi, I'm Khurram, a passionate coder who thrives on the thrill of
					building and bringing ideas to life. Nothing energizes me more than
					diving into a new project and seeing it evolve from concept to
					creation. Software development isn’t just work for me—it’s a
					fulfilling journey of constant learning and problem-solving that keeps
					me motivated and excited.
				</p>
				<p>
					When I’m not at my desk, you might find me behind a camera, capturing
					the world through my lens. Photography offers me a fresh perspective,
					and while I'm not the most artistic, it’s another way I explore
					creativity in my own way.
				</p>
				<p>
					I’m always curious, always learning, and always looking to take on new
					challenges!
				</p>
			</div>
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
							description="I enjoy building web applications by working on both the front
									end and back end. From creating user-friendly interfaces to
									setting up functional back-end systems, I'm always excited to
									learn and grow as a developer."
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
				<SectionCard
					title="ExamBlitZ"
					imgSrc={examBlitzlogo}
					techUsedIcons={[FaFlutter, SiFirebase, FaNodeJs]}
					links={[
						{ link: "", icon: CgWebsite },
						{ link: "", icon: DiAppstore },
						{ link: "", icon: PiGooglePlayLogo }
					]}
					description="	ExamBlitz is an innovative platform designed to create tailored
							exams for users based on their chosen topics. It combines
							cutting-edge AI technology with user-friendly interfaces to offer
							a comprehensive learning experience."
				/>
				<SectionCard
					title="Mosque Aisha"
					imgSrc={mosqueaishaLogo}
					techUsedIcons={[FaHtml5, FaCss3, SiPostgresql, FaNodeJs, FaJava]}
					links={[
						{ link: "", icon: CgWebsite },
						{ link: "", icon: BsAmazon }
					]}
					description="	ExamBlitz is an innovative platform designed to create tailored
							exams for users based on their chosen topics. It combines
							cutting-edge AI technology with user-friendly interfaces to offer
							a comprehensive learning experience."
				/>
			</div>
		</>
	);
}
