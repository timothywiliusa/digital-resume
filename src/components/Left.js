import React, { Component } from "react"
import ReactTooltip from "react-tooltip"
import { CopyToClipboard } from "react-copy-to-clipboard"

import GithubIcon from "../icons/github.svg"
import LinkedInIcon from "../icons/linkedin.svg"
import InstagramIcon from "../icons/instagram.svg"
import Face from "../images/moi.jpg"
import DownloadResumeIcon from "../icons/download-resume.png"
import { personalInfo } from "../shared/Info"

const styles = {
	list: {
		padding: "10px",
		marginBottom: window.innerWidth >= 575.98 ? "0px" : "30px"
	},
	icon: { height: "32px", width: "32px" },
	email: { marginTop: "10px" },
	segment: {
		border: "1.5px solid",
		boxShadow: "5px 5px",
		paddingBottom: "0px"
	},
	label: { borderRadius: "0px" },
	span: { color: "black" },
	text: { fontWeight: "700" }
}

class Left extends Component {
	state = {
		value: personalInfo.email,
		copied: false
	}

	render() {
		const {
			email,
			name,
			availability,
			title,
			location,
			weatherEmoji,
			emojiDescription,
			bio,
			githubUrl,
			linkedInUrl,
			instagramUrl
		} = personalInfo
		return (
			<div className="ui center aligned basic segment" style={styles.segment}>
				<div
					className={`ui ${
						window.innerWidth >= 575.98 ? "top" : "bottom"
					} attached olive label`}
					style={styles.label}
				>
					<span style={styles.span}>{availability}</span>
				</div>
				<img
					className="ui centered small circular image"
					alt={name}
					src={Face}
				/>
				<h1>{name}</h1>
				<div className="ui olive label">
					<span style={styles.span}>{title}</span>
				</div>

				<CopyToClipboard
					text={this.state.value}
					onCopy={() => this.setState({ copied: true })}
				>
					<h4 style={styles.email} data-tip="Click to copy">
						{email}
					</h4>
				</CopyToClipboard>
				<div className="ui divider" />
				<p style={styles.text}>
					{location}{" "}
					<span role="img" aria-label={emojiDescription}>
						{weatherEmoji}
					</span>
				</p>
				<p style={styles.text}>{bio}</p>
				<div className="ui horizontal list" style={styles.list}>
					<div className="item">
						<a href={githubUrl} target="_blank" rel="noopener noreferrer">
							<img style={styles.icon} alt="github-icon" src={GithubIcon} />
						</a>
					</div>
					<div className="item">
						<a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
							<img style={styles.icon} alt="linkedin-icon" src={LinkedInIcon} />
						</a>
					</div>
					<div className="item">
						<a href={instagramUrl} target="_blank" rel="noopener noreferrer">
							<img
								style={styles.icon}
								alt="instagram-icon"
								src={InstagramIcon}
							/>
						</a>
					</div>
					<div className="item" data-tip="Download Resume">
						<a href="" target="_blank" rel="noopener noreferrer">
							<img
								style={styles.icon}
								alt="download-resume-icon"
								src={DownloadResumeIcon}
							/>
						</a>
					</div>
				</div>
				<ReactTooltip />
			</div>
		)
	}
}

export default Left
