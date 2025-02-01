import { IconType } from "react-icons";
import { motion } from "motion/react";

interface Props {
	heading: string;
	description: string;
	icon: IconType;
}
export default function FeatureBlock({
	heading,
	description,
	icon: Icon
}: Props) {
	return (
		<motion.div
			initial={{ scaleX: 0, scaleY: 0 }}
			whileInView={{ scaleX: 1, scaleY: 1 }}
			transition={{ duration: 3, type: "spring" }}
			className="bg-[#1e1e1e] text-white rounded-xl py-8 px-5 lg:px-8 flex flex-col gap-4 lg:w-1/2"
		>
			<div className="flex flex-row gap-4">
				<Icon size={50} className="text-yellow-500 shrink-0" />
				<div>
					<h5 className="text-xl font-bold pb-4">{heading}</h5>
					<hr className="pb-4 border-yellow-500 w-1/4" />
				</div>
			</div>

			<p>{description}</p>
		</motion.div>
	);
}
