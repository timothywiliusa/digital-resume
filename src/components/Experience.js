import React, { Component } from "react"
import { experienceInfo } from '../shared/Info'


class Experience extends Component {
	renderExperience = experienceInfo => {
		return experienceInfo.map(experience => {
			const { title, meta, description } = experience

			return (
				<div className="ui olive centered card">
					<div className="content">
						<div className="left aligned header">{title}</div>
						<div className="left aligned meta">{meta}</div>
						<div className="left aligned description">{description}</div>
					</div>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="ui stackable raised cards">
				{this.renderExperience(experienceInfo)}
			</div>
		)
	}
}

export default Experience
