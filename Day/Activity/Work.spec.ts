import { weekmeter } from "../../index"

describe("weekmeter.Activity.Work", () => {
	it("is", () => {
		expect(weekmeter.Day.Activity.Work.is("vacation")).toEqual(false)
		expect(weekmeter.Day.Activity.Work.is("unpaid")).toEqual(false)
		expect(weekmeter.Day.Activity.Work.is("parental")).toEqual(false)
		expect(weekmeter.Day.Activity.Work.is("sick")).toEqual(false)
		expect(weekmeter.Day.Activity.Work.is("sleeping")).toEqual(false)
		expect(weekmeter.Day.Activity.Work.is("client/project/activity")).toEqual(true)
	})
	it("create", () => {
		expect(weekmeter.Day.Activity.Work.create("client", "project", "activity")).toEqual("client/project/activity")
	})
	it("parse", () => {
		expect(weekmeter.Day.Activity.Work.parse("client/project/activity")).toEqual({
			type: "work",
			client: "client",
			project: "project",
			activity: "activity",
		})
	})
})
