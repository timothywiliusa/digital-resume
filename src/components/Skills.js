import React, { Component } from "react"
import { withStyles } from "@material-ui/styles"

const SKILLS = [
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

const styles = {
	label: {
		"& .ui.teal.labels .label:hover, a.ui.teal.label:hover": {
			backgroundColor: "#00b5ad !important"
		}
	}
}

class Skills extends Component {
	renderSkills = () => {
		return SKILLS.map(skill => (
			<span key={skill} className="ui label">
				{skill}
			</span>
		))
	}

	render() {
		return (
			<div className={this.props.classes.label}>
				<div className="ui big teal labels">{this.renderSkills()}</div>
			</div>
		)
	}
}

export default withStyles(styles)(Skills)
