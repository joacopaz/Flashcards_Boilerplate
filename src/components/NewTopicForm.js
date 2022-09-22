import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";

export default function NewTopicForm() {
	const [name, setName] = useState("");
	const [icon, setIcon] = useState("");
	const navigate = useNavigate();
	const uniqueId = uuidv4();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.length === 0) {
			return;
		}

		// dispatch your add topic action here
		navigate(ROUTES.topicsRoute());
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<h1 className="center">Create a new topic</h1>
				<div className="form-section">
					<input
						id="topic-name"
						type="text"
						value={name}
						onChange={(e) => setName(e.currentTarget.value)}
						placeholder="Topic Name"
					/>
					<select
						onChange={(e) => setIcon(e.currentTarget.value)}
						required
						defaultValue="default">
						<option value="default" disabled hidden>
							Choose an icon
						</option>
						{ALL_ICONS.map(({ name, url }) => (
							<option key={url} value={url}>
								{name}
							</option>
						))}
					</select>
				</div>
				<button className="center">Add Topic</button>
			</form>
		</section>
	);
}
