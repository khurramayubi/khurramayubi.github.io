import { IconType } from "react-icons";
import { motion } from "motion/react";

interface Props {
	link: string;
	icon: IconType;
}

export default function SocialLinkIcon({ link, icon: Icon }: Props) {
	return (
		<motion.div
			initial={{ scaleX: 0, scaleY: 0 }}
			whileInView={{ scaleX: 1, scaleY: 1 }}
			transition={{ duration: 1.5, type: "spring" }}
			className="hover:text-yellow-500"
		>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<Icon />
			</a>
		</motion.div>
	);
}
