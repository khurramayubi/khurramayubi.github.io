import Timeline from "../Timeline/Timeline";
import TimelineHeader from "../Timeline/TimelineHeader";
import { IoCodeWorking } from "react-icons/io5";
import TimelineNode from "../Timeline/TimelineNode";
import examblitzPresentation from "../../assets/projects/examblitz/presentation.png";
import thesis from "../../assets/projects/business-portfolio-optimization/undergrad_thesis.pdf";

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
						tertiaryCaption="(HTML, CSS, bootstrap 4, NodeJs, Java, Android Studio)"
					/>,
					<TimelineNode
						title="Sirat-Al-Mustaqeem"
						date="2021"
						caption="App"
						tertiaryCaption="(React Native, NodeJs)"
						extras={[
							"Developed an engaging app tailored for Muslim users, offering randomized to-do lists with tasks of varying difficulty levels. Users progress through higher levels by successfully completing tasks, incorporating a gamified element into their task management experience.",
							"Note: The backend for the app is currently incomplete, with some functionality still in development."
						].map((desc) => (
							<blockquote>{desc}</blockquote>
						))}
					/>,
					<TimelineNode
						title="Car Tracker"
						date="2021"
						caption="App"
						tertiaryCaption="(React Native, NodeJs)"
						extras={[
							<blockquote>
								Created a fun React Native app that enables users to quickly
								look up government-issued vehicles by make, model, or license
								plate number. The app’s backend, built with Node.js, efficiently
								handles requests and queries the database to provide real-time
								information.
							</blockquote>
						]}
					/>,
					<TimelineNode
						title="SpotiLyrics"
						date="2021"
						caption="App"
						tertiaryCaption="(React Native, NodeJs, Spotify API, lyrics.ovh API)"
						extras={[
							<blockquote>
								Developed a simple single-page application (SPA) using React.js
								that displays the lyrics of the currently playing song on
								Spotify. The app allows users to search for songs and view the
								lyrics of their liked tracks. The backend was forked from the
								Spotify API examples repository, with minor adjustments made to
								fit the app's functionality.
							</blockquote>
						]}
					/>,
					<TimelineNode
						title="Chess Engine"
						date="2018"
						caption="App"
						tertiaryCaption="(Java)"
						extras={[
							<blockquote>
								Developed a console-based, ASCII-style chess engine in Java from
								scratch, utilizing principles of artificial intelligence and
								game theory. The engine was designed to search up to a ply depth
								of 5, delivering reasonable performance within a short time
								frame.
							</blockquote>
						]}
					/>,
					<TimelineNode
						title="Business Portfolio Optimization"
						date="2018"
						caption="Paper"
						secondaryCaption="Read the full paper"
						link={thesis}
						tertiaryCaption="(Python, R, LaTeX)"
						extras={[
							"Conducted research on the efficiency and accuracy of evolutionary algorithms in optimizing a multi-asset business portfolio with various constraints, aiming to identify the optimal portfolio. Leveraged Markowitz's Modern Portfolio Theory along with various AI techniques.",
							"The study compared the performance of Genetic Algorithms (GA) and Particle Swarm Optimization (PSO) in finding the optimal portfolio."
						].map((desc) => (
							<blockquote>{desc}</blockquote>
						))}
					/>,
					<TimelineNode
						title="Story Reader/Editor"
						secondaryCaption="Github Repo"
						link="https://github.com/khurramayubi/choose-your-adventure-story-editor"
						tertiaryCaption="(Python)"
						extras={[
							<blockquote>
								Developed a command-line-based editor and reader for a "choose
								your own adventure" story. The editor enables users to create
								stories with multiple scenarios and branching choices, while the
								reader allows users to engage with the story, making decisions
								that influence the narrative path.
							</blockquote>
						]}
					/>,
					<TimelineNode
						title="Content Management System"
						date="2018"
						tertiaryCaption="(HTML, CSS, PHP, JS, JQuery, psql)"
						extras={[
							<blockquote>
								Developed a content management system (CMS) with a group of 8
								students. The CMS allowed users to create simple websites from
								scratch or from pre-existing templates using a simple drag and
								drop mechanism.
							</blockquote>
						]}
					/>
				]}
			></Timeline>
		</>
	);
}
