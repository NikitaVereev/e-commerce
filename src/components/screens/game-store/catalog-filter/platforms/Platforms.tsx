import { IPlatforms } from '@/src/components/types/categories.interface'
import { FC } from 'react'

const Platforms: FC<{ platform: IPlatforms }> = ({ platform }) => {
	return <li>{platform.name}</li>
}

export default Platforms
