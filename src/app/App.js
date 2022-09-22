import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Outlet,
} from "react-router-dom";
import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import ROUTES from "./routes";

export default function App() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<NavLink
							to={ROUTES.topicsRoute()}
							className={(navData) => (navData.isActive ? "active" : "")}>
							Topics
						</NavLink>
					</li>
					<li>
						<NavLink
							to={ROUTES.quizzesRoute()}
							className={(navData) => (navData.isActive ? "active" : "")}>
							Quizzes
						</NavLink>
					</li>
					<li>
						<NavLink
							to={ROUTES.newQuizRoute()}
							className={(navData) => (navData.isActive ? "active" : "")}>
							New Quiz
						</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
			<Routes>
				<Route path="topics">
					<Route index element={<Topics />} />
					<Route path={`new`} element={<NewTopicForm />} />
					<Route path={`:topicId`} element={<Topic />} />
				</Route>
				<Route path="quizzes">
					<Route index element={<Quizzes />} />
					<Route path={`new`} element={<NewQuizForm />} />
					<Route path={`:quizId`} element={<Quiz />} />
				</Route>
			</Routes>
		</Router>
	);
}
