import { Activity } from "./Activity"
import { Client } from "./Client"

export interface Project {
	code: string
	name: string
	client: Client
	activities: Activity[]
	permissions: {
		work: string
		/*
		allow work if 
		allow invoice if
		allow overview if
		*/
	}
}
/*
 * should rules be single string or multiple strings?
 * should rules be forced under a specific property or is the property part of the string?
 * if no rules exists all users are allowed to view the project. if rules exists at least one match to allow the user to view from backend
 * in frontend the work rule must match for its activities to show up as tasks
 *
 * build rule engine. look at the other rules. move those rules under another directory
 * in the api transform the data to this structure and send to frontend
 * in the api evaluate the rules to determine if the user requesting the projects should be allowed to
 * adapt state to handle this structure.
 */
