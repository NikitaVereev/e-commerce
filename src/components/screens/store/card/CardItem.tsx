import { FC } from 'react'

const CardItem: FC = ({ filteredList }: any) => {
	return (
		<div>
			<div style={{ marginLeft: '70px' }}>
				{filteredList.map((item: any, idx: number) => (
					<div key={idx}>
						<div>
							{item.name} -- {item.type}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default CardItem
