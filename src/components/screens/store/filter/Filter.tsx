import { categories, games } from '@/src/utils/data'
import React, { useState } from 'react'
import CardItem from '../card/CardItem'

class Filter extends React.Component<any, any> {
	constructor(props: never) {
		super(props)
		this.state = {
			filterList: categories,
			searchLists: games,
			activeFilter: []
		}
	}

	onFilterChange(filter: any) {
		const { filterList, activeFilter } = this.state
		if (filter === 'ALL') {
			if (activeFilter.length === filterList.length) {
				this.setState({ activeFilter: [] })
			} else {
				this.setState({
					activeFilter: filterList.map((filter: any) => filter.type)
				})
			}
		} else {
			if (activeFilter.includes(filter)) {
				const filterIndex = activeFilter.indexOf(filter)
				const newFilter = [...activeFilter]
				newFilter.splice(filterIndex, 1)
				this.setState({ activeFilter: newFilter })
			} else {
				this.setState({ activeFilter: [...activeFilter, filter] })
			}
		}
	}

	render() {
		const { filterList, activeFilter } = this.state
		let filteredList
		if (
			activeFilter.length === 0 ||
			activeFilter.length === filterList.length
		) {
			filteredList = this.state.searchLists
		} else {
			filteredList = this.state.searchLists.filter((item: any) =>
				this.state.activeFilter.includes(item.type)
			)
		}

		return (
			<div className='searchContainer'>
				<div>
					{this.state.filterList.map((filter: any, idx: number) => (
						<React.Fragment key={idx}>
							<label htmlFor={filter.id}>{filter.name}</label>
							<input
								id={filter.id}
								type='checkbox'
								readOnly
								checked={activeFilter.includes(filter.type)}
								onClick={() => this.onFilterChange(filter.type)}
							/>
						</React.Fragment>
					))}
				</div>
				<CardItem filteredList={filteredList} />
			</div>
		)
	}
}

export default Filter
