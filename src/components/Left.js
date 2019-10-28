import React, { Component } from "react"
import ReactTooltip from "react-tooltip"
import { CopyToClipboard } from "react-copy-to-clipboard"

import GithubIcon from "../icons/github.svg"
import LinkedInIcon from "../icons/linkedin.svg"
import InstagramIcon from "../icons/instagram.svg"
import Face from "../images/moi.jpg"
import DownloadResumeIcon from "../icons/download-resume.png"

const styles = {
	list: { padding: "10px", marginBottom: window.innerWidth >= 575.98 ? "0px" : "30px" },
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
		value: "kumariau@oregonstate.edu",
		copied: false
	}

	render() {
		return (
			<div className="ui center aligned basic segment" style={styles.segment}>
				<div
					className={`ui ${
						window.innerWidth >= 575.98 ? "top" : "bottom"
					} attached olive label`}
					style={styles.label}
				>
					<span style={styles.span}>Available April 2020</span>
				</div>
				<img
					className="ui centered small circular image"
					alt="Ujjval Kumaria"
					src={Face}
				/>
				<h1>Ujjval Kumaria</h1>
				<div className="ui olive label">
					<span style={styles.span}>
						Graduate Student at Oregon State University
					</span>
				</div>

				<CopyToClipboard
					text={this.state.value}
					onCopy={() => this.setState({ copied: true })}
				>
					<h4 style={styles.email} data-tip="Click to copy">kumariau@oregonstate.edu</h4>
				</CopyToClipboard>
				<div className="ui divider" />
				<p style={styles.text}>
					Corvallis, OR{" "}
					<span role="img" aria-label="rain-emoji">
						🌧️
					</span>
				</p>
				<p style={styles.text}>
					I am a full-stack developer, which means if you give me one more task
					my stack will overflow.
				</p>

				<div className="item"></div>
				<div className="ui horizontal list" style={styles.list}>
					<div className="item">
						<a
							href="https://github.com/flashkicker"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img style={styles.icon} alt="github-icon" src={GithubIcon} />
						</a>
					</div>
					<div className="item">
						<a
							href="https://www.linkedin.com/in/ujjval-kumaria-309a55124/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img style={styles.icon} alt="linkedin-icon" src={LinkedInIcon} />
						</a>
					</div>
					<div className="item">
						<a
							href="https://www.instagram.com/flashkicker/"
							target="_blank"
							rel="noopener noreferrer"
						>
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
