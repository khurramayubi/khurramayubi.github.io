import EducationTimeline from "./ResumeTimelines/EducationTimeline";
import ProjectTimeline from "./ResumeTimelines/ProjectTimeline";
import WorkTimeline from "./ResumeTimelines/WorkTimeline";

function Resume() {
	return (
		<>
			<ProjectTimeline />
			<WorkTimeline />
			<EducationTimeline />
		</>
	);
}

export default Resume;
