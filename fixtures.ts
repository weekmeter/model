import { weekmeter } from "./index"
import * as time from "./Time/fixtures"

export function getCode(): weekmeter.Code {
	return "_-0code0-_"
}

export const getModified = Object.assign(createModified)
function createModified(): weekmeter.Modified {
	return {
		value: "2020-12-31T23:59:59.000Z",
		by: "test-testson@test.com",
	}
}
export const getTime = time.create

export const getActivity = Object.assign(createActivity, { creatable: createActivityCreatable })
function createActivity(): weekmeter.Activity {
	return {
		organization: "---o1---",
		client: "clt",
		project: "project-a",
		name: "ActicityTest",
		code: "actt",
		modified: getModified(),
	}
}
export function getActivities(n: number): weekmeter.Activity[] {
	return Array.from({ length: n }).map((_, index) => getActivity(index))
	function getActivity(n: number): weekmeter.Activity {
		return {
			organization: `o${(n % 7) + 1}`.padStart(8, "-"),
			client: `c${(n % 5) + 1}`.padStart(8, "-"),
			project: `p${(n % 3) + 1}`.padStart(8, "-"),
			code: `a${(n % 2) + 1}`.padStart(8, "-"),
			name: `Activity ${(n % 2) + 1}`,
			modified: getModified(),
		}
	}
}
function createActivityCreatable(): weekmeter.Activity.Creatable {
	return { name: "ActivityTest", code: "actt", organization: "---o1---", client: "clt", project: "project-a" }
}

export const getClient = Object.assign(createClient, { creatable: createClientCreatable })
function createClient(): weekmeter.Client {
	return {
		name: "ClientTest",
		code: "clt",
		modified: getModified(),
		organization: "---o1---",
	}
}
function createClientCreatable(): weekmeter.Client.Creatable {
	return { name: "ClientTest", code: "ct", organization: "---o1---" }
}
export function getClients(n: number): weekmeter.Client[] {
	return Array.from({ length: n }).map((_, index) => getClient(index))
	function getClient(n: number): weekmeter.Client {
		return {
			organization: `o${(n % 3) + 1}`.padStart(8, "-"),
			code: `c${(n % 2) + 1}`.padStart(8, "-"),
			name: `Activity ${(n % 2) + 1}`,
			modified: getModified(),
		}
	}
}
export const getProject = Object.assign(createProject, { creatable: createProjectCreatable })
function createProject(): weekmeter.Project {
	return {
		name: "ProjectTest",
		code: "prt",
		modified: getModified(),
		organization: "---o1---",
		client: "clt",
	}
}
function createProjectCreatable(): weekmeter.Project.Creatable {
	return { name: "ProjectTest", code: "pt", organization: "---o1---", client: "clt" }
}
export function getProjects(n: number): weekmeter.Project[] {
	return Array.from({ length: n }).map((_, index) => getProject(index))
	function getProject(n: number): weekmeter.Project {
		return {
			organization: `o${(n % 5) + 1}`.padStart(8, "-"),
			client: `c${(n % 3) + 1}`.padStart(8, "-"),
			code: `p${(n % 2) + 1}`.padStart(8, "-"),
			name: `Activity ${(n % 2) + 1}`,
			modified: getModified(),
		}
	}
}
export const getRuleArray = Object.assign(createRuleArray, {})
function createRuleArray(time = "8h"): weekmeter.Rule[] {
	return [
		{ name: "Monday", value: `set ${time} day:Monday` },
		{ name: "Tuesday", value: `set ${time} day:Tuesday` },
		{ name: "Wednesday", value: `set ${time} day:Wednesday` },
		{ name: "Thursday", value: `set ${time} day:Thursday` },
		{ name: "Friday", value: `set ${time} day:Friday` },
	]
}
export const getRules = Object.assign(createRules, { changeable: createRulesChangeable })
function createRules(time = "8h"): weekmeter.Rules {
	const modified = getModified()
	return {
		common: { modified: { ...modified }, rules: getRuleArray(time) },
		users: {
			"jessie@rocket.com": {
				modified: { ...modified },
				rules: [{ name: "80%", value: "adjust 80% user:jessie@rocket*" }],
			},
		},
	}
}
function createRulesChangeable(time = "8h"): Required<weekmeter.Rules.Changeable> {
	return {
		common: { rules: getRuleArray(time) },
		users: {
			"jessie@rocket.com": { rules: [{ name: "80%", value: "adjust 80% user:jessie@rocket*" }] },
		},
	}
}
