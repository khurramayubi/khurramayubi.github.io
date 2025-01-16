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
						date="2021 - 2024"
						caption="Software Developer"
						extras={[
							<blockquote>
								Worked in an agile environment, using JavaScript, Node.js, and
								MongoDB. Developed intuitive UI workspaces using a React like
								component based framework. Ensured code quality with Test-Driven
								Development using Puppeteer and Mocha. Actively participated in
								pair programming sessions and contributed to design discussions
								and code reviews. Estimated and managed work for predictable
								delivery.
							</blockquote>,
							<blockquote>
								Engineered and deployed a message templates feature, optimizing
								message creation by eliminating the need for manual copying from
								a spreadsheet. This initiative streamlined message creation,
								leading to a 50% decrease in errors and a 30% improvement in
								message consistency.
							</blockquote>
						]}
						tertiaryCaption="(NodeJs, MongoDB)"
					/>
				]}
			></Timeline>
		</>
	);
}
