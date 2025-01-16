import Timeline from "../Timeline/Timeline";
import TimelineHeader from "../Timeline/TimelineHeader";
import { IoSchoolOutline } from "react-icons/io5";
import TimelineNode from "../Timeline/TimelineNode";

export default function EducationTimeline() {
	return (
		<>
			<Timeline
				header={
					<TimelineHeader
						icon={IoSchoolOutline}
						heading="Education"
					></TimelineHeader>
				}
				nodes={[
					<TimelineNode
						title="Brock University"
						date="2018 - 2020"
						caption="Bachelor of Science (Honours) in Computer Science"
						secondaryCaption="Concentration in Software Engineering"
					/>,
					<TimelineNode
						title="Brock University"
						date="2014 - 2018"
						caption="Bachelor of Science (Honours) in Medical Sciences"
					/>,
					<TimelineNode
						title="Stamford Collegiate"
						date="2012 - 2014"
						caption="Ontario Secondary School Diploma (OSSD)"
					/>
				]}
			></Timeline>
		</>
	);
}
