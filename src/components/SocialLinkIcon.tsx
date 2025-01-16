import { IconType } from "react-icons";

interface Props {
	link: string;
	icon: IconType;
}

export default function SocialLinkIcon({ link, icon: Icon }: Props) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="hover:text-yellow-500"
		>
			<Icon />
		</a>
	);
}
