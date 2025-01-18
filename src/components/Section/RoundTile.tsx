import { IconType } from "react-icons";

interface Props {
	width?: number;
	height?: number;
	icon: IconType;
	iconColor?: string;
}

export default function RoundTile({
	icon: Icon,
	iconColor = "text-yellow-500",
	width = 50,
	height = 50
}: Props) {
	return (
		<div
			style={{ width, height }}
			className="bg-[#1e1e1e] rounded-2xl shadow-tile flex items-center justify-center"
		>
			<Icon className={iconColor} size={width / 2} />
		</div>
	);
}
