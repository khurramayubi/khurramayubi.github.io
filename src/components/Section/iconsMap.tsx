import { IconType } from "react-icons";
import { BsAmazon } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import {
	DiAppstore,
	DiJqueryLogo,
	DiJavascript,
	DiPython,
	DiPhp
} from "react-icons/di";
import { FaNodeJs, FaHtml5, FaCss3, FaJava, FaRProject } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { PiGooglePlayLogo } from "react-icons/pi";
import { SiFirebase, SiPostgresql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const iconsMap: Record<string, { icon: IconType; alt: string }> = {
	flutter: { icon: FaFlutter, alt: "Flutter" },
	firebase: { icon: SiFirebase, alt: "Firebase" },
	nodejs: { icon: FaNodeJs, alt: "NodeJs" },
	html: { icon: FaHtml5, alt: "HTML" },
	css: { icon: FaCss3, alt: "CSS" },
	psql: { icon: SiPostgresql, alt: "PostgreSQL" },
	java: { icon: FaJava, alt: "Java" },
	google: { icon: PiGooglePlayLogo, alt: "Google Play Store" },
	apple: { icon: DiAppstore, alt: "App Store" },
	website: { icon: CgWebsite, alt: "Website" },
	amazon: { icon: BsAmazon, alt: "Amazon" },
	reactNative: { icon: TbBrandReactNative, alt: "React Native" },
	jquery: { icon: DiJqueryLogo, alt: "JQuery" },
	js: { icon: DiJavascript, alt: "Javascript" },
	python: { icon: DiPython, alt: "Python" },
	php: { icon: DiPhp, alt: "php" },
	r: { icon: FaRProject, alt: "R" }
};
