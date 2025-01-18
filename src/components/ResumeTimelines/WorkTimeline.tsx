import Timeline from "../Timeline/Timeline";
import TimelineHeader from "../Timeline/TimelineHeader";
import { IoBriefcaseOutline } from "react-icons/io5";
import TimelineNode from "../Timeline/TimelineNode";

export default function WorkTimeline() {
	return (
		<>
			<Timeline
				header={
					<TimelineHeader
						icon={IoBriefcaseOutline}
						heading="Work Experience"
					></TimelineHeader>
				}
				nodes={[
					<TimelineNode
						title="NexJ Health"
						date="2021"
						caption="Software Developer"
						extras={[
							"Worked in an agile environment, using JavaScript, Node.js, and MongoDB. Developed intuitive UI workspaces using a React like component based framework. Ensured code quality with Test-Driven Development using Puppeteer and Mocha. Actively participated in pair programming sessions and contributed to design discussions and code reviews. Estimated and managed work for predictable delivery.",
							"Engineered and deployed a message templates feature, optimizing message creation by eliminating the need for manual copying from a spreadsheet. This initiative streamlined message creation, leading to a 50% decrease in errors and a 30% improvement in message consistency.",
							"Implemented a robust password lockout and account deletion mechanism to align with Apple's stringent requirements. This enhancement ensured enhanced security measures and adherence to Apple's platform standards.",
							"Expanded Bluetooth integration capabilities by incorporating support for blood pressure monitors and SpO2 readers using the Validic SDK. This extension facilitated seamless logginƒg and tracking of vital measurements saving users 40% of their time per measurement, and enhancing the overall functionality of the system."
						].map((desc) => (
							<blockquote>{desc}</blockquote>
						))}
						tertiaryCaption="(NodeJs, MongoDB)"
					/>,
					<TimelineNode
						title="Arbonne"
						date="2018"
						caption="Freelance App Developer"
						extras={[
							"Developed and launched an iOS and Android app as a freelance project for an independent Arbonne consultant. Collaborated with friends to create the Android version, while independently building the iOS version.",
							"Transformed a 30-day healthy living plan from a Facebook group into an intuitive app, offering users daily posts, PDF guides, and recipe collections. The app allowed users to embark on a 30-day health journey, starting on a date of their choice—all without requiring a backend, aligning with the client's preference for minimal ongoing expenses."
						].map((desc) => (
							<blockquote>{desc}</blockquote>
						))}
						tertiaryCaption="(Swift, Java)"
					/>
				]}
			></Timeline>
		</>
	);
}
