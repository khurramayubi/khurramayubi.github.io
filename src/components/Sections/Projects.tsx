import { ReactNode, useState } from "react";
import SectionCard from "../Section/SectionCard";
import Project from "./Project";
import { projects } from "../../projects.tsx";

const projectsData: Record<
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

export default function Projects() {
	const [activeProject, setActiveProject] = useState("");

	return (
		<>
			{activeProject && (
				<div>
					<div>
						<a
							className="text-blue-500 cursor-pointer"
							onClick={() => setActiveProject("")}
						>
							&lt; Back to Projects List
						</a>
					</div>
					<Project
						heading={projectsData[activeProject].title}
						descs={projectsData[activeProject].descs}
						imageList={projectsData[activeProject].images}
					/>
				</div>
			)}
			{!activeProject && (
				<div className="grid grid-cols-2 gap-4">
					{Object.entries(projectsData).map(
						([projectId, { title, logo, links, techUsed, summary }]) => {
							return (
								<SectionCard
									title={title}
									imgSrc={logo}
									techUsed={techUsed}
									links={links}
									description={summary}
									onViewDetails={() => setActiveProject(projectId)}
								/>
							);
						}
					)}
				</div>
			)}
		</>
	);
}
