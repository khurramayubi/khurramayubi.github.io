import SectionHeader from "../Section/SectionHeader";

interface Props {
	heading: string;
}

export default function Project({ heading }: Props) {
	return (
		<div>
			<SectionHeader heading={heading} />
		</div>
	);
}
