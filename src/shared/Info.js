import PaletteIcon from "../icons/color-palette.png"
import RoadTripIcon from "../icons/road-trip.png"
import ResumeIcon from "../icons/resume.png"
import CryptopiumIcon from "../icons/cryptopium.png"
import FeedbackIcon from "../icons/feedback-icon.png"

export const personalInfo = {
	name: "Ujjval Kumaria",
	email: "kumariau@oregonstate.edu",
	availability: "Available April 2020",
	title: "Graduate Student at Oregon State University",
	location: "Corvallis, OR",
	weatherEmoji: "🌧️",
	emojiDescription: "rain-emoji",
	bio: `I am a full-stack developer, which means if you give me one more task
	my stack will overflow.`,
	githubUrl: "https://github.com/flashkicker",
	linkedInUrl: "https://www.linkedin.com/in/ujjval-kumaria-309a55124/",
	instagramUrl: "https://www.instagram.com/flashkicker/"
}

export const experienceInfo = [
	{
		title: "Graduate Student Instructor",
		meta: "Oregon State University, April 2019 – August 2019",
		description: `CS 362: Introduction to the "back end" of the software engineering
		lifecycle implementation; verification and validation; debugging;
		maintenance.`
	},
	{
		title: "Graduate Research Assistant: Python Developer",
		meta: "Oregon State University, June 2018 – Sept 2018",
		description:
			"Worked on the NCATS Biomedical Translator Software Reasoning Tool."
	},
	{
		title: "Graduate Research Assistant: Full-stack developer",
		meta: "Oregon State University, Sep 2017 – June 2017",
		description: `Developed a health analytics application that assists health
		scientists with conducting research studies.`
	}
]

export const projectInfo = [
	{
		title: "Cryptopium",
		icon: CryptopiumIcon,
		iconAlt: "cryptopium-icon",
		description: `Cryptopium is a Financial Reporting App for cryptocurrencies built entirely on React. `,
		github: "https://github.com/flashkicker/cryptopium",
		demo: "https://cryptopium.herokuapp.com/"
	},
	{
		title: "Colorati",
		icon: PaletteIcon,
		iconAlt: "palette-icon",
		description: `A web app for creating your own color palettes built entirely using
		React.`,
		github: "https://github.com/flashkicker/colorati",
		demo: "https://colorati.herokuapp.com/",
		meta: "*works better on larger screens"
	},
	{
		title: "Trippr",
		icon: RoadTripIcon,
		iconAlt: "road-trip-icon",
		description: `A web app built on the MERN stack that lets you create, view, save
		and share your personalized road trips.`,
		github: "https://github.com/flashkicker/Trippr",
		demo: "https://calm-badlands-76250.herokuapp.com"
	},
	{
		title: "Digital Resume",
		icon: ResumeIcon,
		iconAlt: "resume-icon",
		description: `Ujjval's digital resume built as a single-page application using
		React.`,
		github: "https://github.com/flashkicker/digital-resume",
		demo: "https://flashkicker.github.io"
	},
	{
		title: "FeedMe",
		icon: FeedbackIcon,
		iconAlt: "feedback-icon",
		description: `A scalable full-stack web app that helps companies collect useful feedback from their users.`,
		github: "https://github.com/flashkicker/FeedMe",
		demo: "https://whispering-tundra-25800.herokuapp.com/"
	}
]

export const skillsInfo = [
	"JavaScript",
	"React",
	"Redux",
	"React Native",
	"Node.js",
	"MongoDB",
	"ES6",
	"REST APIs",
	"TypeScript",
	"GraphQL",
	"Python",
	"MySQL",
	"TDD",
	"Jest"
]

export const educationInfo = [
	{
		title: "Master of Science (MS), Computer Science",
		description: "Oregon State University, Corvallis, OR, Expected April 2020"
	},
	{
		title: "Bachelor of Technology (B. Tech), Information Technology",
		description: "NMIMS University, Mumbai, India, August 2017"
	}
]
