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
		"& .ui.olive.labels .label:hover, a.ui.olive.label:hover": {
			backgroundColor: "#b5cc18 !important"
		}
	},
	span: { color: "black" }
}

class Skills extends Component {
	renderSkills = () => {
		return SKILLS.map(skill => (
			<span key={skill} className="ui label">
				<span style={styles.span}>{skill}</span>
			</span>
		))
	}

	render() {
		return (
			<div className={this.props.classes.label}>
				<div className="ui big olive labels">{this.renderSkills()}</div>
			</div>
		)
	}
}

export default withStyles(styles)(Skills)
