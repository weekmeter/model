import type { weekmeter } from "../../../index"

export const engine = {
	state: (): weekmeter.Project.Access.Engine.State => ({
		project: {
			code: "weekmeter",
			name: "Weekmeter",
			client: { code: "acme", name: "Acme" },
			activities: [
				{ code: "sprint", name: "Sprint" },
				{ code: "between-sprints", name: "Between sprints" },
			],
		},
		user: { email: "jessie@rocket.com", department: "Development", country: "SE", team: "QA" },
	}),
}
