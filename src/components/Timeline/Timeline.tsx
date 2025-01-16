import { ReactNode } from "react";

interface Props {
	bigCircleSize?: number;
	smallCircleSize?: number;
	header: ReactNode;
	nodes: ReactNode[];
}

function Timeline({
	header,
	nodes,
	bigCircleSize = 50,
	smallCircleSize = 20
}: Props) {
	return (
		<>
			<div className="pb-12">
				{header}
				{nodes}
				<div>
					{" "}
					<div className="flex items-start relative">
						<div
							style={{
								marginLeft: (bigCircleSize - smallCircleSize / 2) / 2,
								marginRight: (bigCircleSize - smallCircleSize / 2) / 2
							}}
						>
							<div
								style={{
									width: smallCircleSize / 2,
									height: smallCircleSize / 2
								}}
								className={`bg-yellow-500 rounded-full shadow-circle border-2 border-yellow-400 flex-shrink-0`}
							></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Timeline;
