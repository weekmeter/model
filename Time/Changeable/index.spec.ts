import { weekmeter } from "../../index"
import * as fixtures from "../fixtures"

describe("Time.Changeable", () => {
	it("type", () => {
		const times: weekmeter.Time.Changeable[] = fixtures.create.changeable(1)
		times.forEach(time => expect(weekmeter.Time.Changeable.is(time)).toEqual(true))
		times.forEach(time => expect(weekmeter.Time.Changeable.type.get(time)).toEqual(time))
	})
	it("key with date", () => {
		const [sick, unpaid, vab, vacation, work] = fixtures.create(1).map(time => weekmeter.Time.Changeable.key(time))
		expect(sick).toEqual("sick|------o1|jessie@rocket.com|2023-12-11")
		expect(unpaid).toEqual("unpaid|------o1|jessie@rocket.com|2023-12-11")
		expect(vab).toEqual("vab|------o1|jessie@rocket.com|2023-12-11")
		expect(vacation).toEqual("vacation|------o1|jessie@rocket.com|2023-12-11")
		expect(work).toEqual("work|------o1|jessie@rocket.com|------c1|------p1|------a1|2023-12-11")
	})
	it("key no date", () => {
		const [sick, unpaid, vab, vacation, work] = fixtures
			.create(1)
			.map(time => weekmeter.Time.Changeable.key(time, { date: false }))
		expect(sick).toEqual("sick|------o1|jessie@rocket.com")
		expect(unpaid).toEqual("unpaid|------o1|jessie@rocket.com")
		expect(vab).toEqual("vab|------o1|jessie@rocket.com")
		expect(vacation).toEqual("vacation|------o1|jessie@rocket.com")
		expect(work).toEqual("work|------o1|jessie@rocket.com|------c1|------p1|------a1")
	})
})
