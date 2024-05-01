// import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
	return (
		<section className="mx-20">
			<h2 className="mt-5">Welcome to admin home page</h2>
			<hr />
			<nav className="nav flex-column gap-2 mt-3">
				<Link to={"/create-quiz"} className="nav-link bg-blue-600 text-black w-44 rounded-md">
					Create a new Quiz
				</Link>
				<Link to={"/all-quizzes"} className="nav-link bg-blue-600 text-black w-64 rounded-md">
					Manage existing Quizes
				</Link>
			</nav>
		</section>
	)
}

export default Admin
