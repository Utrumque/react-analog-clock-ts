import "./App.css"
import { Clock } from "./components/Clock"

function App() {
	//useEffect(() => {
	//	const timer = setInterval(() => {
	//		setTime(new Date())
	//	}, 1000)

	//	return () => clearInterval(timer)
	//}, [])

	return (
		<div className='App'>
			<Clock />
		</div>
	)
}

export default App
