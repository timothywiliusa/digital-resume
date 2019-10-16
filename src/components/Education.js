import React from "react"

const styles = {
	card: window.innerWidth >= 575.98 ? { width: "75%" } : {}
}

const Education = () => {
	return (
		<div className="ui one cards">
			<div className="ui raised olive centered card" style={styles.card}>
				<div className="content">
					<div className="header">Master of Science (MS), Computer Science</div>
				</div>
				<div className="extra content">
					<div className="description">
						Oregon State University, Corvallis, OR, Expected April 2020
					</div>
				</div>
			</div>
			<div className="ui raised olive centered card" style={styles.card}>
				<div className="content">
					<div className="header">
						Bachelor of Technology (B. Tech), Information Technology
					</div>
				</div>
				<div className="extra content">
					<div className="description">
						NMIMS University, Mumbai, India, August 2017
					</div>
				</div>
			</div>
		</div>
	)
}

export default Education
