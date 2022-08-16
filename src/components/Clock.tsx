import { useEffect, useState } from "react"
import { IClock } from "./types"

export const Clock: React.FC = () => {
	const [time, setTime] = useState<IClock>()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetch(
					"https://timezoneapi.io/api/timezone/?Europe/Moscow&token=aTyVZJCmhzfLojStamfI"
				)
				const res = await data.json()
				setTime(res.data.datetime)
			} catch (err) {
				console.log(err)
			}
		}

		const timer = setInterval(() => {
			fetchData()
		}, 1000)

		fetchData()
		return () => clearInterval(timer)
	}, [])

	return (
		<div className='clock'>
			<div
				className='hour_hand'
				style={{ transform: `rotateZ(${Number(time?.hour_24_wolz) * 30}deg)` }}
			></div>
			<div
				className='min_hand'
				style={{ transform: `rotateZ(${Number(time?.minutes) * 6}deg)` }}
			></div>
			<div
				className='sec_hand'
				style={{ transform: `rotateZ(${Number(time?.seconds) * 6}deg)` }}
			></div>
			<span className='twelve'>12</span>
			<span className='one'>1</span>
			<span className='two'>2</span>
			<span className='three'>3</span>
			<span className='four'>4</span>
			<span className='five'>5</span>
			<span className='six'>6</span>
			<span className='seven'>7</span>
			<span className='eight'>8</span>
			<span className='nine'>9</span>
			<span className='ten'>10</span>
			<span className='eleven'>11</span>
		</div>
	)
}
