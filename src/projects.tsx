import { ReactNode } from "react";

const projects = {
	examblitz: {
		title: "ExamBlitZ",
		images: [
			"/assets/projects/examblitz/screenshots/1.png",
			"/assets/projects/examblitz/screenshots/2.png",
			"/assets/projects/examblitz/screenshots/3.png",
			"/assets/projects/examblitz/screenshots/4.png",
			"/assets/projects/examblitz/screenshots/5.png",
			"/assets/projects/examblitz/screenshots/6.png"
		],
		logo: "/assets/projects/examblitz/logo.png",
		descs: [
			<p>
				Developed an exam preparation app that allows users to generate
				personalized exams using Gemini from a wide range of topics, provide
				performance insights and categorize exam results. Implemented trend
				analysis with interactive charts to visualize progress over time.
			</p>
		],
		summary:
			"ExamBlitz is an innovative platform designed to create tailored exams for users based on their chosen topics.",
		links: [
			{ link: "https://examblitzs-site.webflow.io/", icon: "website" },
			{
				link: "https://apps.apple.com/ca/app/examblitz/id6739375659",
				icon: "apple"
			},
			{
				link: "https://play.google.com/store/apps/details?id=com.khurram.examBlitz&pcampaignid=web_share",
				icon: "google"
			}
		],
		techUsed: ["flutter", "firebase", "nodejs"]
	},
	designsnap: {
		title: "Design Snap",
		images: ["/assets/projects/designsnap/screenshots/1.mp4"],
		logo: "/assets/projects/designsnap/logo.png",
		descs: [
			<>
				<p>
					Developed a design suggestion platform built with React, TypeScript,
					Tailwind CSS and Vite, enabling users to compare and improve
					decision-making through an interactive grid-based interface.
				</p>
				<p>
					Developed a Node.js backend with Gemini API integration, implementing
					retry logic for API stability.
				</p>
				<p>
					Implemented a one-click style export feature, allowing users to copy
					styles as a CSS stylesheet, with future expansion to Tailwind and
					Flutter themes.
				</p>
				<p>
					Optimized performance and responsiveness, ensuring smooth rendering of
					design layouts across devices.
				</p>
			</>
		],
		summary:
			"Design Snap is a AI powered platform allowing users to compare color schemes and font styles for an app idea.",
		links: [],
		techUsed: ["reactNative", "nodejs"]
	},
	"mosque-aisha": {
		title: "Mosque Aisha",
		logo: "/assets/projects/mosque-aisha/logo.png",
		summary:
			"Built a website and tools for my local mosque, including an API for admin functions and a smart TV app for displaying prayer times and news.",
		descs: [
			<p>
				Designed and created a website for my local mosque. The website features
				general contact information, services offered by the mosque, the current
				(and past) projects as well as a news and events section.
			</p>,
			<p>
				Designed and created a website for my local mosque. The website features
				general contact information, services offered by the mosque, the current
				(and past) projects as well as a news and events section.
			</p>,
			<p>
				Created an API and connected the end-points to form elements to
				accomplish various admin functions for the mosque.
				<ul>
					<li>
						An invoice system to quickly generate and e-mail tax invoices for
						donations
					</li>
					<li>
						A time update system to quickly view and update the prayer times
					</li>
					<li>
						A system for the religious head to draft and e-mail a letter on the
						mosque letterhead
					</li>
					<li>
						A system to upload/delete pictures which are displayed on the smart
						TV at the mosque through an Android App
					</li>
				</ul>
			</p>,
			<p>
				Designed templates to automate certificate creation for reverts and
				graduating students.
			</p>,
			<p>
				Created an Android app to be used on a smart TV to display the current
				prayer times and any important mosque related news to the visitors.
			</p>
		],
		links: [
			{ link: "https://mosqueaisha.ca/", icon: "website" }
			// {
			// 	link: "",
			// 	icon: "amazon"
			// }
		],
		techUsed: ["html", "css", "psql", "nodejs", "java"]
	},
	"sirat-al-mustaqeem": {
		title: "Sirat-Al-Mustaqeem",
		summary:
			"React Native app offering Muslim randomized to-do lists with tasks of varying difficulties.",
		images: [
			"/assets/projects/sirat-al-mustaqeem/screenshots/1.png",
			"/assets/projects/sirat-al-mustaqeem/screenshots/2.mp4",
			"/assets/projects/sirat-al-mustaqeem/screenshots/3.png",
			"/assets/projects/sirat-al-mustaqeem/screenshots/4.png"
		],
		techUsed: ["reactNative", "nodejs"],
		descs: [
			"Developed an engaging app tailored for Muslim users, offering randomized to-do lists with tasks of varying difficulty levels. Users progress through higher levels by successfully completing tasks, incorporating a gamified element into their task management experience.",
			"Note: The backend for the app is currently incomplete, with some functionality still in development."
		].map((desc) => <p>{desc}</p>)
	},
	"car-tracker": {
		title: "Car Tracker",
		summary:
			"An app that enables users to quickly look up government-issued vehicles by make, model, or license plate number.",
		images: [
			"/assets/projects/car-tracker/screenshots/1.png",
			"/assets/projects/car-tracker/screenshots/2.png",
			"/assets/projects/car-tracker/screenshots/3.png",
			"/assets/projects/car-tracker/screenshots/4.png",
			"/assets/projects/car-tracker/screenshots/5.png"
		],
		date: "2021",
		caption: "App",
		techUsed: ["reactNative", "nodejs"],
		descs: [
			<p>
				Created a fun React Native app that enables users to quickly look up
				government-issued vehicles by make, model, or license plate number. The
				app’s backend, built with Node.js, efficiently handles requests and
				queries the database to provide real-time information.
			</p>
		]
	},
	spotilyrics: {
		title: "SpotiLyrics",
		images: ["/assets/projects/spotilyrics/screenshots/1.mp4"],
		summary:
			"A react app to view the lyrics of currently playing and a user's liked songs from Spotify.",
		date: "2021",
		caption: "App",
		techUsed: ["reactNative", "nodejs"],
		descs: [
			<p>
				Developed a simple single-page application (SPA) using React.js that
				displays the lyrics of the currently playing song on Spotify. The app
				allows users to search for songs and view the lyrics of their liked
				tracks. The backend was forked from the Spotify API examples repository,
				with minor adjustments made to fit the app's functionality.
			</p>
		]
	},
	"chess-engine": {
		title: "Chess Engine",
		summary: "A console based, ASCII style chess engine.",
		date: "2018",
		caption: "App",
		techUsed: ["java"],
		descs: [
			<p>
				Developed a console-based, ASCII-style chess engine in Java from
				scratch, utilizing principles of artificial intelligence and game
				theory. The engine was designed to search up to a ply depth of 5,
				delivering reasonable performance within a short time frame.
			</p>
		]
	},
	"portfolio-optimization": {
		title: "Business Portfolio Optimization",
		summary:
			"Research paper on the efficiency and accuracy of evolutionary algorithms in optimizing a multi-asset business portfolio.",
		links: [
			{
				link: "/assets/projects/portfolio-optimization/thesis.pdf",
				icon: "book"
			}
		],
		date: "2018",
		caption: "Paper",
		techUsed: ["python", "r"],
		descs: [
			"Conducted research on the efficiency and accuracy of evolutionary algorithms in optimizing a multi-asset business portfolio with various constraints, aiming to identify the optimal portfolio. Leveraged Markowitz's Modern Portfolio Theory along with various AI techniques.",
			"The study compared the performance of Genetic Algorithms (GA) and Particle Swarm Optimization (PSO) in finding the optimal portfolio."
		].map((desc) => <p>{desc}</p>)
	},
	"story-editor": {
		title: "Story Reader/Editor",
		summary:
			'Developed a command-line-based editor and reader for a "choose your own adventure" story.',
		links: [
			{
				link: "https://github.com/khurramayubi/choose-your-adventure-story-editor",
				icon: "github"
			}
		],
		techUsed: ["python"],
		descs: [
			<p>
				Developed a command-line-based editor and reader for a "choose your own
				adventure" story. The editor enables users to create stories with
				multiple scenarios and branching choices, while the reader allows users
				to engage with the story, making decisions that influence the narrative
				path.
			</p>
		]
	},
	cms: {
		title: "Content Management System",
		date: "2018",
		techUsed: ["html", "css", "php", "js", "jquery", "psql"],
		descs: [
			<p>
				Developed a content management system (CMS) with a group of 8 students.
				The CMS allowed users to create simple websites from scratch or from
				pre-existing templates using a simple drag and drop mechanism.
			</p>
		]
	}
};

export const projectsData: Record<
	string,
	{
		title: string;
		descs: ReactNode[];
		images?: string[];
		logo?: string;
		summary?: string;
		techUsed: string[];
		links?: { link: string; icon: string }[];
	}
> = projects;
