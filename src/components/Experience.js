import React, { Component } from "react"

class Experience extends Component {
	render() {
		return (
			<div className="ui one cards">
				<div className="ui yellow raised card">
					<div className="content">
						<div className="left aligned header">
							Graduate Student Instructor: CS 362
						</div>
						<div className="left aligned meta">
							Oregon State University, April 2019 – Current
						</div>
						<div className="left aligned meta">
							<em>
								Introduction to the "back end" of the software engineering
								lifecycle implementation; verification and validation;
								debugging; maintenance.
							</em>
						</div>
						<div className="left aligned description">
							<ul>
								<li>
									Taught this to a class of 110 students in Spring 2019 and 12
									students in Summer 2019.
								</li>
								<li>
									Delivered instruction on different types of software testing
									methods, coverage, maintenance practices, git, debugging, etc.
								</li>
								<li>
									Wrote multiple automated scripts to assist with grading.
								</li>
								<li>
									Responsible for managing and guiding two Teaching Assistants
									in order to help them fulfill their duties for this class.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="ui green raised card">
					<div className="content">
						<div className="left aligned header">
							Graduate Research Assistant: Python Developer
						</div>
						<div className="left aligned meta">
							Oregon State University, June 2018 – Sept 2018
						</div>
						<div className="left aligned description">
							<ul>
								<li>
									Worked on the NCATS Biomedical Translator Software Reasoning
									Tool.
								</li>
								<li>
									Implemented and tested the API request modules for retrieving
									biomedical data from 12 databases.
								</li>
								<li>
									Worked with a graph database (Neo4j) and wrote database
									queries in Python for it.
								</li>
								<li>Maintained the knowledge graph database on Linux Shell</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="ui purple raised card">
					<div className="content">
						<div className="left aligned header">
							Graduate Research Assistant: Full-stack developer
						</div>
						<div className="left aligned meta">
							Oregon State University, Sep 2017 – June 2017
						</div>
						<div className="left aligned description">
							<ul>
								<li>
									Developed a health analytics application that assists health
									scientists conduct research studies, in a test-driven
									environment to ensure highest level of code quality.
								</li>
								<li>
									Implemented RESTful Web Services using Express.js with Fitbit,
									Twilio, Twitter integration and created a user/device
									management system to help scientists manage their studies,
									participants, Fitbit devices, visualizations, social media,
									CSV uploads and much more.
								</li>
								<li>
									Created responsive UI on the Pug view engine, wrote DB
									interaction code using node-based MySQL library and
									implemented multi-level access control and authentication
									using Passport.js.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Experience
