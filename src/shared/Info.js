import PaletteIcon from "../icons/color-palette.png"
import RoadTripIcon from "../icons/road-trip.png"
import ResumeIcon from "../icons/resume.png"
import CryptopiumIcon from "../icons/cryptopium.png"
import FeedbackIcon from "../icons/feedback-icon.png"
import GraphQLIcon from "../icons/graphql-icon.png"
import ChatIcon from "../icons/chat-icon.png"
import TrackrIcon from "../icons/trackr-icon.png"

export const personalInfo = {
	name: "Ujjval Kumaria",
	email: "ujjkumaria@gmail.com",
	// availability: "Available April 2020",
	title: "Full Stack Developer at HazAdapt, INC.",
	location: "Corvallis, OR",
	weatherEmoji: "🌧️",
	emojiDescription: "rain-emoji",
	bio: `I am a full stack developer, which means if you give me one more task
	my stack will overflow.`,
	githubUrl: "https://github.com/flashkicker",
	linkedInUrl: "https://www.linkedin.com/in/ujjvalkumaria",
	instagramUrl: "https://www.instagram.com/flashkicker/",
}

export const experienceInfo = [
	{
		title: "Full Stack Developer",
		meta: "HazAdapt, INC., April 2020 - Current",
		description:
			"Helped design system architecture, developed a cross-platform React Native app and mentored a student developer",
	},
	{
		title: "Instructor",
		meta: "Oregon State University, April 2019 – August 2019",
		description: `Delivered instructions and guided two graduate TAs, on software testing methods, coverage, debugging, maintenance practices, etc.`,
	},
	{
		title: "Graduate Research Assistant: Python Developer",
		meta: "Oregon State University, June 2018 – Sept 2018",
		description:
			"Worked on the NCATS Biomedical Translator Software Reasoning Tool.",
	},
	{
		title: "Graduate Research Assistant: Full-stack developer",
		meta: "Oregon State University, Sep 2017 – June 2017",
		description: `Developed a health analytics application that assists health
		scientists with conducting research studies.`,
	},
]

export const projectInfo = [
	{
		title: "Colorati",
		icon: PaletteIcon,
		iconAlt: "palette-icon",
		description: `A web app for creating and managing your own color palettes built entirely using
		React.`,
		github: "https://github.com/flashkicker/colorati",
		demo: "https://colorati.herokuapp.com/",
		meta: "*works better on larger screens",
	},
	{
		title: "Cryptopium",
		icon: CryptopiumIcon,
		iconAlt: "cryptopium-icon",
		description: `A financial reporting web app for cryptocurrencies, integrated with charts and APIs for graphing historical data and real-time crypto pricing data.`,
		github: "https://github.com/flashkicker/cryptopium",
		demo: "https://cryptopium.herokuapp.com/",
	},
	{
		title: "Blogs GraphQL API",
		icon: GraphQLIcon,
		iconAlt: "graphql-icon",
		description: `A fully-functional, production-ready, GraphQL API built on Node and Prisma.`,
		github: "https://github.com/flashkicker/blogs-api",
		demo: "https://ancient-beyond-25685.herokuapp.com/",
	},
	{
		title: "Trackr",
		icon: TrackrIcon,
		iconAlt: "trackr-icon",
		description:
			"Cross-platform mobile app that lets users track and record runs, hikes and roadtrips on a map in realtime.",
		github: "https://github.com/flashkicker/trackr-app",
		demo: "https://expo.io/@flashkicker/trackr",
	},
	{
		title: "Trippr",
		icon: RoadTripIcon,
		iconAlt: "road-trip-icon",
		description: `An interactive web application that helps users explore and save popular road trips created by other community members.`,
		github: "https://github.com/flashkicker/Trippr",
		demo: "https://calm-badlands-76250.herokuapp.com",
	},
	{
		title: "Digital Resume",
		icon: ResumeIcon,
		iconAlt: "resume-icon",
		description: `Ujjval's digital resume built as a single-page application using
		React.`,
		github: "https://github.com/flashkicker/digital-resume",
		demo: "https://flashkicker.github.io",
	},
	{
		title: "FeedMe",
		icon: FeedbackIcon,
		iconAlt: "feedback-icon",
		description: `A MERN-based feedback-collector application for businesses that send mass interactive emails and collects feedback through webhooks.`,
		github: "https://github.com/flashkicker/FeedMe",
		demo: "https://whispering-tundra-25800.herokuapp.com/",
	},
	{
		title: "ChatKube",
		icon: ChatIcon,
		iconAlt: "chat-icon",
		description: `Basic chat application built using Node, Vanilla JS and Socket.io with support for chat rooms`,
		github: "https://github.com/flashkicker/chatkube",
		demo: "http://chatkube.herokuapp.com/",
	},
]

export const skillsInfo = [
	"JavaScript",
	"React",
	"Redux",
	"React Native",
	"Node.js",
	"GraphQL",
	"Prisma",
	"MongoDB",
	"ES6",
	"REST APIs",
	"Socker.io",
	"Python",
	"SQL",
	"Test Driven Development",
	"Jest",
	"Semantic UI",
	"Responsive Design",
	"Git",
	"Agile",
	"SCRUM",
]

export const educationInfo = [
	{
		title: "Master of Science (MS), Computer Science",
		description: "Oregon State University, Corvallis, OR, April 2020",
	},
	{
		title: "Bachelor of Technology (B. Tech), Information Technology",
		description: "NMIMS University, Mumbai, India, August 2017",
	},
]
