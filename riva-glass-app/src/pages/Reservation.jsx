import "./Reservation.css"
import { Link } from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"

const Reservation = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState("")
	const[loading,setLoading]=useState(true)

	useEffect(() => {
		projectFirestore
			.collection("dates")
			.get()
			.then((snapshot) => {
				if (snapshot.empty) {
					setError("Žádný termín není k dispozici")
				} else {
					let result = []
					snapshot.docs.forEach((oneDate) => {
						result.push({ id: oneDate.id, ...oneDate.data() })
					})

					result.sort(function (a, b) {
						let aNum = parseInt(a.date.split(".")[0])
						let bNum = parseInt(b.date.split(".")[0])
						return aNum - bNum
					})
					setData(result)
					setLoading(false)
				}
			})

			.catch((err) => {
				setError(err.message)
			})
	}, [])
	console.log(data)
	return (
		<section className='reservation-section'>
			{loading ? <div className="loader"></div>:<div>
			<h2>Vyberte si datum návštěvy</h2>
			{error && <p>{error}</p>}

			{data.map((oneDate) => {
				const { id, count, date } = oneDate
				if(count<10){
					return (
						<div
							className='date-row'
							key={id}
						>
							<Link
								className='date-link'
								to={`/reservation-detail/${id}`}
							>
								{date}
							</Link>
							<p>{count}/10</p>
						</div>
					)
				}

				
			})}
			</div>
}
		</section>
	)
}

export default Reservation
