import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://gaming-news.p.rapidapi.com/news',
			headers: {
				'x-rapidapi-host': 'gaming-news.p.rapidapi.com',
				'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
			}
		}

		axios
			.request(options)
			.then(function (response) {
				res.status(200).json(response.data)
			})
			.catch(function (error) {
				console.error(error)
			})
	} else {
		res.status(404)
		console.log('Error')
	}
}
