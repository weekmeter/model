import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Activity", () => {
	it("is", () => {
		const activity = fixtures.activity()
		expect(weekmeter.Activity.is(activity)).toEqual(true)
		expect(weekmeter.Activity.is((({ name, ...activity }) => activity)(activity))).toEqual(false)
		expect(weekmeter.Activity.is({ ...activity, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const activity = { ...fixtures.activity(), from: "TEsting" }
		expect(weekmeter.Activity.type.get(activity)).toEqual(fixtures.activity())
		expect(weekmeter.Activity.type.get({ name: "asd" })).toEqual(undefined)
	})
	it("scope", () => {
		const activities = fixtures.activity.array(210)
		const scoped = weekmeter.Activity.scope(activities)
		expect(weekmeter.Activity.Scoped.is(scoped)).toEqual(true)
		expect(activities.length).toEqual(210)
		expect(activities[0]).toBe(scoped["------o0"]["------c0"]["------p0"]["------a0"])
		expect(activities[activities.length - 1]).toBe(scoped["------o6"]["------c4"]["------p2"]["------a1"])
	})
	it("fromScope", () => {
		const activities = fixtures.activity.array(210)
		const scoped = weekmeter.Activity.scope(activities)
		const result = weekmeter.Activity.fromScope(scoped)
		expect(activities.length).toEqual(result.length)
		for (const activity of result)
			expect(activities.includes(activity)).toEqual(true)
	})
	it("key", () => {
		const activity = fixtures.activity()
		expect(weekmeter.Activity.key(activity)).toEqual(weekmeter.Activity.Creatable.key(activity))
	})
})
