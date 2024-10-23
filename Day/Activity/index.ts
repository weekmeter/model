import { isly } from "isly"
import { Code } from "../../Code"
import { NonWork as ActivityNonWork } from "./NonWork"
import { Work as ActivityWork } from "./Work"

export type Activity = Activity.Work | Activity.NonWork

export namespace Activity {
	export import NonWork = ActivityNonWork
	export import Work = ActivityWork
	export const type = isly.union<Activity>(ActivityWork.type, ActivityNonWork.type)
	export const is = type.is
	export const flaw = type.flaw
	export const create = ActivityWork.create
	export function parse(
		activity: Activity
	): { type: "work"; client: Code; project: Code; activity: Code } | { type: ActivityNonWork } | undefined {
		return ActivityNonWork.is(activity) ? { type: activity } : ActivityWork.parse(activity)
	}
	export const project = Object.assign(
		(activity: Activity): "non-work" | `${string}/${string}` => {
			return NonWork.is(activity)
				? "non-work"
				: (activity.split("/", 2).join("/") as "non-work" | `${string}/${string}`)
		},
		{
			code: (project: "non-work" | `${string}/${string}`): string =>
				project == "non-work" ? "non-work" : project.split("/", 3)[1],
		}
	)
	export function client(activity: Activity | Return<typeof project>): undefined | string {
		return NonWork.is(activity) || activity == "non-work" ? undefined : activity.split("/", 3)[0]
	}
	export const scope = {
		project: (activities: readonly Activity[]): { [project in "non-work" | Return<typeof project>]?: Activity[] } =>
			activities
				.map(activity => [project(activity), activity] as const)
				.reduce<Return<typeof scope.project>>(
					(result, [project, activity]) => (result[project]?.push(activity) ?? (result[project] = [activity]), result),
					{}
				),
	}
}
