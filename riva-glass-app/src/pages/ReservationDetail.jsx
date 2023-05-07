import { useParams } from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"

const ReservationDetail = () => {
	const [data, setData] = useState({})
	const [error, setError] = useState(false)

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [numberOfPersons, setNumberOfPersons] = useState("")
	const [notification, setNotification] = useState(false)

	const { dateId } = useParams()


	const submitForm = async (e) => {
		e.preventDefault()

		const newReservation = { data: data.date, email, name, numberOfPersons }

		try {
			await projectFirestore.collection("reservations").add(newReservation)
      setNotification(true)

      setName("")
      setEmail("")
      setNumberOfPersons("")
			
		} catch (err) {
			console.log(err.message)
		}
	}
	useEffect(() => {
		projectFirestore
			.collection("dates")
			.doc(dateId)
			.get()
			.then((document) => {
				if (document.exists) {
					setData(document.data())
				} else {
					setError("Tento termín nebyl nalezen")
				}
			})
			.catch((err) => {
				setError(err.message)
			})
	}, [dateId])

	return (
		<section>
      {error}
			<h1>Zarezervovat na den:</h1>
			<p>{data.date} (9:00)</p>
			<p>
				Pro rezervaci prosím zadejte Váš email, abychom Vás mohli kontaktovat v
				případě změny otevírací doby
			</p>
			<form onSubmit={submitForm}>
				<input
					type='text'
					placeholder='Zadejte jméno'
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<input
					type='email'
					placeholder='Zadejte váš email'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<input
					type='number'
					placeholder='Počet osob'
					min='1'
					onChange={(e) => setNumberOfPersons(e.target.value)}
					value={numberOfPersons}
				/>
				<input
					type='submit'
					value='Rezervovat'
				/>
			</form>
			{notification && 
      <div>
        <p>Vaše návštěva galerie Riva-glass byla rezervována na den {data.date} v 9:00. Těšíme se na Vás</p>
        <p>Rezervaci můžete zrušit, když nás kontaktujete na adrese <e-mail>mona.ruz@seznam.cz</e-mail>  </p>
      </div>}
		</section>
	)
}

export default ReservationDetail
