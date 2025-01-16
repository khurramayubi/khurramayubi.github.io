import EducationTimeline from "./ResumeTimelines/EducationTimeline";
import WorkTimeline from "./ResumeTimelines/WorkTimeline";

function Resume() {
	return (
		<>
			<WorkTimeline></WorkTimeline>
			<EducationTimeline />
		</>
	);
}

export default Resume;
