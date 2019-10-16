import React from "react"

const styles = {
	card: { width: "75%" }
}

const Education = () => {
	return (
		<div className="ui one cards">
			<div className="ui raised orange centered card" style={styles.card}>
				<div className="content">
					<div className="header">Master of Science (MS), Computer Science</div>
					<div className="description">
						Oregon State University, Corvallis, OR, Expected December 2019
					</div>
				</div>
			</div>
			<div className="ui raised red centered card" style={styles.card}>
				<div className="content">
					<div className="header">
						Bachelor of Technology (B. Tech), Information Technology
					</div>
					<div className="description">
						NMIMS University, Mumbai, India, August 2017
					</div>
				</div>
			</div>
		</div>
	)
}

export default Education
