import { fixtures } from "../../../fixtures"
import { weekmeter } from "../../../index"

describe("Project.Access.Engine", () => {
	it("is/create", () => {
		const project = { ...fixtures.project.access.engine.state().project, access: fixtures.project.access() }
		const user = { email: fixtures.user(), profile: fixtures.user.profile() }
		const engine: weekmeter.Project.Access.Engine | undefined = weekmeter.Project.Access.Engine.create(project, user)
		expect(weekmeter.Project.Access.Engine.is(engine)).toEqual(true)
	})
	it("allowed", () => {
		let engine: weekmeter.Project.Access.Engine | undefined
		const project = { ...fixtures.project.access.engine.state().project, access: fixtures.project.access() }
		const user = { email: fixtures.user(), profile: fixtures.user.profile() }
		engine = weekmeter.Project.Access.Engine.create(project, user)
		expect(engine?.some("work")).toEqual(true)
		expect(engine?.some("view")).toEqual(true)
		expect(engine?.some("view", "work")).toEqual(true)
		expect(engine?.every("view")).toEqual(true)
		expect(engine?.every("work")).toEqual(true)
		expect(engine?.every("work", "view")).toEqual(true)
		expect(engine?.every("view", "work")).toEqual(true)
		project.access = { rules: ["work if (user.country:SE)", "work if (user.team:Dev)"] }
		engine = weekmeter.Project.Access.Engine.create(project, user)
		expect(engine?.some("work")).toEqual(true)
		expect(engine?.some("view")).toEqual(false)
		expect(engine?.some("view", "work")).toEqual(true)
		expect(engine?.every("work")).toEqual(true)
		expect(engine?.every("view")).toEqual(false)
		expect(engine?.every("view", "work")).toEqual(false)
		user.profile.properties = [
			{ name: "country", value: "UK" },
			{ name: "department", value: "Sales" },
		]
		engine = weekmeter.Project.Access.Engine.create(project, user)
		expect(engine?.some("work")).toEqual(false)
		expect(engine?.some("view")).toEqual(false)
		expect(engine?.some("view", "work")).toEqual(false)
		expect(engine?.every("view")).toEqual(false)
		expect(engine?.every("work")).toEqual(false)
		expect(engine?.every("work", "view")).toEqual(false)
		expect(engine?.every("view", "work")).toEqual(false)
	})
})
