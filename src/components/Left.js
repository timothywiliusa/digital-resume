import React from "react"

import GithubIcon from "./github.svg"
import LinkedInIcon from "./linkedin.svg"
import InstagramIcon from "./instagram.svg"
import Face from "./moi.jpg"

const styles = {
	list: { padding: "10px" },
	icon: { height: "32px", width: "32px" }
}

const Left = () => {
	return (
		<div className="ui center aligned basic segment">
			<img
				className="ui centered small circular image"
				alt="Ujjval Kumaria"
				src={Face}
			/>
			<h1>Ujjval Kumaria</h1>
			<h3>kumariau@oregonstate.edu</h3>
			<div className="ui divider" />
			<p>
				Corvallis, OR{" "}
				<span role="img" aria-label="rain-emoji">
					🌧️
				</span>
			</p>
			<p>
				I am a full-stack developer, which means if you give me one more task my
				stack will overflow.
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
						<img style={styles.icon} alt="instagram-icon" src={InstagramIcon} />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Left
