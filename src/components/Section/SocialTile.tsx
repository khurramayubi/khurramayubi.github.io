import { IconType } from "react-icons";
import RoundTile from "./Section/RoundTile";

interface Props {
	icon: IconType;
	heading: string;
	text: string;
	subtext?: string;
}

export default function SocialTile({ icon, heading, text, subtext }: Props) {
	return (
		<div className="flex items-center py-4">
			<RoundTile icon={icon} />
			<div className="text-left ms-6">
				<p className="font-bold">{heading}</p>
				<p className="text-sm">{text}</p>
				<p>{subtext}</p>
			</div>
		</div>
	);
}
