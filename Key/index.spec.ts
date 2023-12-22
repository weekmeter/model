import { authly } from "authly"
import { userwidgets } from "@userwidgets/model"
import { weekmeter } from "../index"
import * as fixtures from "./fixtures"

const now = new Date(Math.floor(new Date().getTime() / 1_000) * 1_000)
authly.Issuer.defaultIssuedAt = Math.floor(now.getTime() / 1_000)

describe("Key", () => {
	it("Manager", async () => {
		const creatable: weekmeter.Key.Creatable = fixtures.create("manager")
		const issuer = userwidgets.User.Key.Issuer.create(
			"userwidgets",
			"weekmeter",
			fixtures.keys.public,
			fixtures.keys.private
		)
		const token = await issuer.sign(creatable, now.getTime() / 1_000)
		if (token == undefined) {
			expect(token).not.toEqual(undefined)
			return
		}
		const verifier = weekmeter.Key.Verifier.create(fixtures.keys.public)
		const key = await verifier.verify(token)
		if (key == undefined) {
			expect(key).not.toEqual(undefined)
			return
		}
		expect(weekmeter.Key.is(key)).toEqual(true)
		expect(weekmeter.Roles.Permissions.is(key.permissions)).toEqual(true)
		expect(key.token).toEqual(token)
		expect(key.permissions).toEqual({
			"------o1": {
				user: { view: true, admin: true, invite: true },
				org: { view: true, edit: true },
				client: { view: true, create: true },
				project: { view: true, create: true },
				activity: { view: true, create: true },
				time: { view: true, admin: true },
				balance: { view: true },
				rules: { view: true, admin: true },
				report: { view: true, create: true, admin: true },
			},
		})
		expect(weekmeter.Roles.satisfies("manager", key.permissions, "------o1")).toEqual(true)
	})
	it("Project Manager", async () => {
		const creatable: weekmeter.Key.Creatable = fixtures.create("projectManager")
		const issuer = userwidgets.User.Key.Issuer.create(
			"userwidgets",
			"weekmeter",
			fixtures.keys.public,
			fixtures.keys.private
		)
		const token = await issuer.sign(creatable, now.getTime() / 1_000)
		if (token == undefined) {
			expect(token).not.toEqual(undefined)
			return
		}
		const verifier = weekmeter.Key.Verifier.create(fixtures.keys.public)
		const key = await verifier.verify(token)
		if (key == undefined) {
			expect(key).not.toEqual(undefined)
			return
		}
		expect(weekmeter.Key.is(key)).toEqual(true)
		expect(weekmeter.Roles.Permissions.is(key.permissions)).toEqual(true)
		expect(key.token).toEqual(token)
		expect(key.permissions).toEqual({
			"------o1": {
				user: { view: true, invite: true },
				client: { view: true, create: true },
				project: { view: true, create: true },
				activity: { view: true, create: true },
				rules: { view: true },
				time: { view: true },
				report: { view: true },
			},
		})
		expect(weekmeter.Roles.satisfies("projectManager", key.permissions, "------o1")).toEqual(true)
	})
	it("Accountant", async () => {
		const creatable: weekmeter.Key.Creatable = fixtures.create("accountant")
		const issuer = userwidgets.User.Key.Issuer.create(
			"userwidgets",
			"weekmeter",
			fixtures.keys.public,
			fixtures.keys.private
		)
		const token = await issuer.sign(creatable, now.getTime() / 1_000)
		if (token == undefined) {
			expect(token).not.toEqual(undefined)
			return
		}
		const verifier = weekmeter.Key.Verifier.create(fixtures.keys.public)
		const key = await verifier.verify(token)
		if (key == undefined) {
			expect(key).not.toEqual(undefined)
			return
		}
		expect(weekmeter.Key.is(key)).toEqual(true)
		expect(weekmeter.Roles.Permissions.is(key.permissions)).toEqual(true)
		expect(key.token).toEqual(token)
		expect(key.permissions).toEqual({
			"------o1": {
				user: { view: true, invite: true },
				client: { view: true },
				project: { view: true },
				activity: { view: true },
				time: { view: true },
				balance: { view: true },
				rules: { view: true, admin: true },
				report: { view: true, create: true },
			},
		})
		expect(weekmeter.Roles.satisfies("accountant", key.permissions, "------o1")).toEqual(true)
	})
	it("User", async () => {
		const creatable: weekmeter.Key.Creatable = fixtures.create("user")
		const issuer = userwidgets.User.Key.Issuer.create(
			"userwidgets",
			"weekmeter",
			fixtures.keys.public,
			fixtures.keys.private
		)
		const token = await issuer.sign(creatable, now.getTime() / 1_000)
		if (token == undefined) {
			expect(token).not.toEqual(undefined)
			return
		}
		const verifier = weekmeter.Key.Verifier.create(fixtures.keys.public)
		const key = await verifier.verify(token)
		if (key == undefined) {
			expect(key).not.toEqual(undefined)
			return
		}
		expect(weekmeter.Key.is(key)).toEqual(true)
		expect(weekmeter.Roles.Permissions.is(key.permissions)).toEqual(true)
		expect(key.token).toEqual(token)
		expect(key.permissions).toEqual({
			"------o1": {
				user: { view: true },
				client: { view: true },
				project: { view: true },
				activity: { view: true },
			},
		})
		expect(weekmeter.Roles.satisfies("user", key.permissions, "------o1")).toEqual(true)
	})
})
