import { IconType } from "react-icons";
import RoundTile from "../Section/RoundTile";

interface Props {
	icon: IconType;
	heading: string;
	bigCircleSize?: number;
}

function TimelineHeader({ icon: Icon, heading, bigCircleSize = 50 }: Props) {
	const lineWidth = 2;
	const lineLeft = (bigCircleSize - lineWidth) / 2;
	return (
		<>
			<div className="relative pb-8">
				<div className="flex items-center">
					<RoundTile icon={Icon} />
					<div
						style={{
							left: lineLeft,
							top: bigCircleSize,
							width: lineWidth
						}}
						className={`absolute bottom-0 bg-yellow-500 shadow-line`}
					></div>{" "}
					<div className="prose ms-6">
						<h2>{heading}</h2>
					</div>
				</div>
			</div>
		</>
	);
}

export default TimelineHeader;
