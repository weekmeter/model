import { fixtures } from "../../../fixtures"
import { weekmeter } from "../../../index"

describe("Project.Access.Engine", () => {
	it("is/create", () => {
		const state = fixtures.project.access.engine.state()
		const access = fixtures.project.access()
		const engine: weekmeter.Project.Access.Engine | undefined = weekmeter.Project.Access.Engine.create(state, access)
		expect(weekmeter.Project.Access.Engine.is(engine)).toEqual(true)
	})
	it("allowed", () => {
		let access: weekmeter.Project.Access
		let state: weekmeter.Project.Access.Engine.State
		let engine: weekmeter.Project.Access.Engine | undefined
		access = fixtures.project.access()
		state = fixtures.project.access.engine.state()
		engine = weekmeter.Project.Access.Engine.create(state, access)
		expect(engine?.some("work")).toEqual(true)
		expect(engine?.some("view")).toEqual(true)
		expect(engine?.some("view", "work")).toEqual(true)
		expect(engine?.every("view")).toEqual(true)
		expect(engine?.every("work")).toEqual(true)
		expect(engine?.every("work", "view")).toEqual(true)
		expect(engine?.every("view", "work")).toEqual(true)
		access = { rules: ["work if (user.country:SE)", "work if (user.team:Dev)"] }
		engine = weekmeter.Project.Access.Engine.create(state, access)
		expect(engine?.some("work")).toEqual(true)
		expect(engine?.some("view")).toEqual(false)
		expect(engine?.some("view", "work")).toEqual(true)
		expect(engine?.every("work")).toEqual(true)
		expect(engine?.every("view")).toEqual(false)
		expect(engine?.every("view", "work")).toEqual(false)
		state = { ...state, user: { email: state.user.email, country: "UK", department: "Sales" } }
		engine = weekmeter.Project.Access.Engine.create(state, access)
		expect(engine?.some("work")).toEqual(false)
		expect(engine?.some("view")).toEqual(false)
		expect(engine?.some("view", "work")).toEqual(false)
		expect(engine?.every("view")).toEqual(false)
		expect(engine?.every("work")).toEqual(false)
		expect(engine?.every("work", "view")).toEqual(false)
		expect(engine?.every("view", "work")).toEqual(false)
	})
})
