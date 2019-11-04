import React, { Component } from "react"
import { projectInfo } from "../shared/Info"

const styles = {
	icon: { height: "24px", width: "24px", marginRight: "10px" }
}

class Projects extends Component {
	renderProjects = projectInfo => {
		return projectInfo.map(project => {
			const { title, icon, iconAlt, description, github, demo, meta } = project

			return (
				<div className="ui olive centered card" key={title}>
					<div className="content">
						<div className="header">
							<img src={icon} style={styles.icon} alt={iconAlt} />
							{title}
						</div>
						<div className="left aligned description">{description}</div>
						{meta ? (
							<div>
								<br />
								<div className="left aligned meta">{meta}</div>
							</div>
						) : (
							""
						)}
					</div>
					<div className="extra content">
						<div className="ui two buttons">
							<a
								className="ui basic blue button"
								href={github}
								target="_blank"
								rel="noopener noreferrer"
							>
								Github
							</a>
							<a
								className="ui basic black button"
								href={demo}
								target="_blank"
								rel="noopener noreferrer"
							>
								Demo
							</a>
						</div>
					</div>
				</div>
			)
		})
	}

	render() {
		return (
			<div>
				<div className="ui stackable raised cards" style={{ marginTop: "40px" }}>
					{this.renderProjects(projectInfo)}
				</div>
			</div>
		)
	}
}

export default Projects
