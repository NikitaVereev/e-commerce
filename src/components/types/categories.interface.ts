export interface ICategories {
	id: number
	name: string
	type: string
}

export interface IPlatforms {
	id: number
	name: string
	type: string
}

export interface IFilter {
	categories: ICategories[]
	platforms: IPlatforms[]
}
