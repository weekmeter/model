import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Project.Changeable", () => {
	it("is", () => {
		const project: weekmeter.Project.Changeable = fixtures.project.changeable()
		expect(weekmeter.Project.Changeable.is(project)).toEqual(true)
	})
	it("key", () => {
		const project = fixtures.project.changeable()
		const key = `${project.organization}|${project.client.code}|${project.code}`
		expect(weekmeter.Project.Changeable.key(project)).toEqual(key)
		expect(weekmeter.Project.Changeable.key({ ...project, client: project.client.code })).toEqual(key)
	})
})
