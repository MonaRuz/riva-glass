import "./Reservation.css"
import { Link } from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"

const Reservation = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(true)

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
					setLoading(false)
				}
			})

			.catch((err) => {
				setError(err.message)
			})
	}, [])


	return (
		<section className='reservation-section'>
			{loading ? (
				<div className='loader'></div>
			) : (
				<div>
					<h2>Rezervujte si datum komentované prohlídky naší galerie</h2>
					{error && <p>{error}</p>}

					{data.map((oneDate) => {
						const { id, count, date } = oneDate
						if (count < 10) {
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
									<p className='counter'>{count}/10</p>
								</div>
							)
						}
					})}
					<p className='reservation-contact'>
						Rezervovat datum si můžete také na tel. čísle:{" "}
						<a href='tel:+420 777 318 949'>777 318 949</a>
						<br />
						nebo na e-mailové adrese: <a href='mailto:rivaglass@seznam.cz'></a>
						rivaglass@seznam.cz
					</p>
				</div>
			)}
		</section>
	)
}

export default Reservation
