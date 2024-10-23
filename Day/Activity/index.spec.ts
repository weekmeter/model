import { weekmeter } from "../../index"

describe("model.Day.Activity", () => {
	it("is", () => {
		expect(weekmeter.Day.Activity.is("vacation")).toEqual(true)
		expect(weekmeter.Day.Activity.is("unpaid")).toEqual(true)
		expect(weekmeter.Day.Activity.is("parental")).toEqual(true)
		expect(weekmeter.Day.Activity.is("sick")).toEqual(true)
		expect(weekmeter.Day.Activity.is("sleeping")).toEqual(false)
		expect(weekmeter.Day.Activity.is("client/project/activity")).toEqual(true)
	})
	it("parse", () => {
		expect(weekmeter.Day.Activity.parse("vacation")).toEqual({ type: "vacation" })
		expect(weekmeter.Day.Activity.parse("unpaid")).toEqual({ type: "unpaid" })
		expect(weekmeter.Day.Activity.parse("parental")).toEqual({ type: "parental" })
		expect(weekmeter.Day.Activity.parse("sick")).toEqual({ type: "sick" })
		expect(weekmeter.Day.Activity.parse("client/project/activity")).toEqual({
			type: "work",
			client: "client",
			project: "project",
			activity: "activity",
		})
	})
	it("project", () => {
		expect(weekmeter.Day.Activity.project("client/project/activity")).toEqual("client/project")
		expect(weekmeter.Day.Activity.project("sick")).toEqual("non-work")
	})
	it("project.code", () => {
		expect(weekmeter.Day.Activity.project.code("client/project/activity")).toEqual("project")
	})
	it("client", () => {
		expect(weekmeter.Day.Activity.client("client/project/activity")).toEqual("client")
		expect(weekmeter.Day.Activity.client("sick")).toEqual(undefined)
	})
})
