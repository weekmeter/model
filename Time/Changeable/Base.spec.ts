import { isoly } from "isoly"
import { weekmeter } from "../../index"
import * as fixtures from "../fixtures"

describe("Time.Changeable.Base", () => {
	it("type", () => {
		const base: weekmeter.Time.Changeable.Base = {
			type: "work",
			date: isoly.Date.now(),
			email: "jessie@rocket.com",
			organization: "------o1",
			value: { hours: 8 },
		}
		expect(weekmeter.Time.Changeable.Base.is(base)).toEqual(true)
		const [time]: weekmeter.Time.Changeable.Base[] = fixtures.create(1).filter(time => time.type == "work")
		expect(weekmeter.Time.Changeable.Base.is(time)).toEqual(true)
		expect(weekmeter.Time.Changeable.Base.is((({ type, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Changeable.Base.is((({ date, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Changeable.Base.is((({ email, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Changeable.Base.is((({ organization, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Changeable.Base.is((({ value, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Changeable.Base.type.get(time)).toEqual(base)
	})
	it("key with date", () => {
		const now = isoly.Date.now()
		const [sick, unpaid, parental, vacation, work] = fixtures
			.create(1)
			.map(time => weekmeter.Time.Changeable.Base.key(time))
		expect(sick).toEqual(`sick|------o1|jessie@rocket.com|${now}`)
		expect(unpaid).toEqual(`unpaid|------o1|jessie@rocket.com|${now}`)
		expect(parental).toEqual(`parental|------o1|jessie@rocket.com|${now}`)
		expect(vacation).toEqual(`vacation|------o1|jessie@rocket.com|${now}`)
		expect(work).toEqual(`work|------o1|jessie@rocket.com|${now}`)
	})
	it("key no date", () => {
		const [sick, unpaid, parental, vacation, work] = fixtures
			.create(1)
			.map(time => weekmeter.Time.Changeable.Base.key(time, { date: false }))
		expect(sick).toEqual("sick|------o1|jessie@rocket.com")
		expect(unpaid).toEqual("unpaid|------o1|jessie@rocket.com")
		expect(parental).toEqual("parental|------o1|jessie@rocket.com")
		expect(vacation).toEqual("vacation|------o1|jessie@rocket.com")
		expect(work).toEqual("work|------o1|jessie@rocket.com")
	})
})
