import Timeline from "../Timeline/Timeline";
import TimelineHeader from "../Timeline/TimelineHeader";
import { IoCodeWorking } from "react-icons/io5";
import TimelineNode from "../Timeline/TimelineNode";
import examblitzPresentation from "../../assets/projects/examblitz/presentation.png";

export default function ProjectTimeline() {
	return (
		<>
			<Timeline
				header={
					<TimelineHeader
						icon={IoCodeWorking}
						heading="Projects"
					></TimelineHeader>
				}
				nodes={[
					<TimelineNode
						title="ExamBlitZ"
						date="2024"
						caption="Create. Practice. Succeed."
						link="https://examblitzs-site.webflow.io/"
						secondaryCaption="View landing page"
						extras={[
							<img src={examblitzPresentation}></img>,
							<blockquote>
								Developed an exam preparation app that allows users to generate
								personalized exams using Gemini from a wide range of topics,
								provide performance insights and categorize exam results.
								Implemented trend analysis with interactive charts to visualize
								progress over time.
							</blockquote>
						]}
						tertiaryCaption="(Flutter, Firebase, Node.js, Google Gemini)"
					/>,
					<TimelineNode
						title="Mosque Aisha"
						date="2020 - Present"
						caption="Volunteer Software Developer"
						link="https://mosqueaisha.ca"
						secondaryCaption="mosqueaisha.ca"
						extras={[
							<blockquote>
								Designed and created a website for my local mosque. The website
								features general contact information, services offered by the
								mosque, the current (and past) projects as well as a news and
								events section.
							</blockquote>,
							<blockquote>
								Designed and created a website for my local mosque. The website
								features general contact information, services offered by the
								mosque, the current (and past) projects as well as a news and
								events section.
							</blockquote>,
							<blockquote>
								Created an API and connected the end-points to form elements to
								accomplish various admin functions for the mosque.
								<ul>
									<li>
										An invoice system to quickly generate and e-mail tax
										invoices for donations
									</li>
									<li>
										A time update system to quickly view and update the prayer
										times
									</li>
									<li>
										A system for the religious head to draft and e-mail a letter
										on the mosque letterhead
									</li>
									<li>
										A system to upload/delete pictures which are displayed on
										the smart TV at the mosque through an Android App
									</li>
								</ul>
							</blockquote>,
							<blockquote>
								Designed templates to automate certificate creation for reverts
								and graduating students.
							</blockquote>,
							<blockquote>
								Created an Android app to be used on a smart TV to display the
								current prayer times and any important mosque related news to
								the visitors.
							</blockquote>
						]}
						tertiaryCaption="(HTML, CSS, bootstrap 4, NodeJS, Java, Android Studio)"
					/>
				]}
			></Timeline>
		</>
	);
}
