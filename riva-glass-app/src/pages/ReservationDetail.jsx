import "./ReservationDetail.css"
import { useParams, Link } from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"

const ReservationDetail = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState(false)

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [numberOfPersons, setNumberOfPersons] = useState(0)
	const [notification, setNotification] = useState(false)
	const [count, setCount] = useState(0)
	const[adress,setAdresss]=useState("")

	const { dateId } = useParams()

	const submitForm = async (e) => {
		e.preventDefault()

		if (document.getElementById("adress").value === "") {
			const newReservation = {
				data: data,
				email,
				name,
				numberOfPersons,
				dateId,
			}

			setNotification(true)
			try {
				await projectFirestore.collection("reservations").add(newReservation)
			} catch (err) {
				console.log(err.message)
			}

			try {
				await projectFirestore
					.collection("dates")
					.doc(dateId)
					.update({ count: count })

				setName("")
				setEmail("")
				setNumberOfPersons("")
			} catch (err) {
				console.log(err.message)
			}
		}
	}
	useEffect(() => {
		projectFirestore
			.collection("dates")
			.get()
			.then((snapshot) => {
				if (snapshot.empty) {
					setError("Nenalezeno")
				} else {
					let dataResult = []
					snapshot.docs.forEach((oneDate) => {
						dataResult.push({ id: oneDate.id, ...oneDate.data() })
					})

					const filteredData = dataResult.filter((data) => {
						return data.id == dateId
					})

					const filteredObject = filteredData[0]
					const resultDate = filteredObject.date
					const resultCount = filteredObject.count
					setData(resultDate)
					setCount(resultCount + numberOfPersons)
					
				}
			})
			.catch((err) => {
				setError(err.message)
			})
	}, [numberOfPersons, dateId])
	

	return (
		<section className="section-detail">
			{error}
			<h1>Zarezervovat na den: {data}</h1>
			<p>
				V případě změny otevírací doby v termínu Vaší rezervace Vás kontaktujeme prostřednictvím zadaného e-mailu.
			</p>
			<form
				onSubmit={submitForm}
			>
				<div>
					<label htmlFor="name">Jméno:</label>
					<input
					id="name"
					type='text'
					onChange={(e) => setName(e.target.value)}
					value={name}
					/>
				</div>
				<div>
					<label htmlFor="mail">e-mail:</label>
					<input
					id="mail"
					type='email'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				</div>
				<div>
					<label htmlFor="count">Počet osob:</label>
					<input
					id="count"
					type='number'
					min='1'
					onChange={(e) => setNumberOfPersons(parseInt(e.target.value))}
					value={numberOfPersons}
				/>
				</div>
				<div className='hidden'>
					<label htmlFor="adrress"></label>
					<input
					id='adress'
					type='text'
					onChange={(e)=>setAdresss(e.target.value)}
					value={adress}
				/>
				</div>
				
				<input
					type='submit'
					value='Rezervovat'
				/>
				<p className="gdpr">Odesláním formuláře udělíte souhlas se zpracováním osobních údajů.<br/><Link className="link-gdpr" to="/gdpr">Více informací</Link> </p>
			</form>
			{notification && (
				<div className="notification">
					<p>
						Vaše rezervace byla vytvořena na den {data}. Pokud dorazíte později, prohlídka začne vždy od celé hodiny. Těšíme se na Vás.
					</p>
					<p>
						Rezervaci můžete zrušit nebo upravit prostřednictvím tohoto emailu:{" "}
						<e-mail>mona.ruz@seznam.cz</e-mail>{" "}
					</p>
				</div>
			)}
		</section>
	)
}

export default ReservationDetail
