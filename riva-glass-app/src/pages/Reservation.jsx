import { Link } from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"

const Reservation = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState("")

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
					setData(result)
				}
			})
			.catch((err) => {
				setError(err.message)
			})
	}, [])

	return (
		<section>
			{error && <p>{error}</p>}

			{data.map((oneDate) => {
				const { id, date } = oneDate

				return (
					<Link
						to={`/reservation-detail/${id}`}
						key={id}
					>
						{date}
					</Link>
				)
			})}
		</section>
	)
}

export default Reservation
