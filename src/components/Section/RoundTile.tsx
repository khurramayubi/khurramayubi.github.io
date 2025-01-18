import { IconType } from "react-icons";
import { motion } from "motion/react";

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
		<motion.div
			initial={{ scaleX: 0, scaleY: 0 }}
			whileInView={{ scaleX: 1, scaleY: 1 }}
			transition={{ duration: 1.5, type: "spring" }}
		>
			<div
				style={{ width, height }}
				className="bg-[#1e1e1e] rounded-2xl shadow-tile flex items-center justify-center"
			>
				<Icon className={iconColor} size={width / 2} />
			</div>
		</motion.div>
	);
}
