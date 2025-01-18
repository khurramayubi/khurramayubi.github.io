import { IconType } from "react-icons";
import { motion } from "motion/react";

interface Props {
	imgSrc: string;
	title: string;
	description: string;
	techUsedIcons: IconType[];
	links: {
		link: string;
		icon: IconType;
	}[];
}

export default function SectionCard({
	imgSrc,
	title,
	description,
	techUsedIcons,
	links
}: Props) {
	return (
		<motion.div
			initial={{ scaleX: 0, scaleY: 0 }}
			whileInView={{ scaleX: 1, scaleY: 1 }}
			transition={{ duration: 3, type: "spring" }}
			className="bg-[#1e1e1e] text-white rounded-xl p-8 flex gap-8 flex-col"
		>
			<div className="flex gap-8 items-center">
				<img src={imgSrc} className="rounded-xl shrink-0 h-[75px] w-auto"></img>
				<div className="flex flex-col">
					<h5 className="text-xl font-bold pb-4">{title}</h5>
					<hr className=" border-yellow-500 w-8" />
				</div>
			</div>
			<div>
				<div className="flex justify-start gap-4 mb-4">
					{techUsedIcons.map((Icon, index) => (
						<Icon key={index} size={15} className="text-yellow-500" />
					))}
				</div>
				<p>{description}</p>
			</div>
			<div className="flex justify-end items-end gap-4">
				<p>Links:</p>
				{links.map(({ icon: Icon, link }, index: number) => {
					return (
						<a key={index} href={link}>
							<Icon className="hover:text-yellow-500" size={25} />
						</a>
					);
				})}
			</div>
		</motion.div>
	);
}
