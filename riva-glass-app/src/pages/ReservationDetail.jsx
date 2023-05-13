import { useParams } from "react-router-dom"
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
	console.log(typeof(adress))
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
		<section className="max-h-[100vh] min-h-[550px] flex flex-col items-center">
			{error}
			<h1 className="text-xl mb-1">Zarezervovat na den: {data} (9:00)</h1>
			<hr className="w-[400px] inline mb-3"  />
			<p className="mb-3">
				V případězměny otevírací doby Vás kontaktujeme prostřednictvím zadaného e-mailu.
			</p>
			<form
				className='text-sky-950 flex flex-col items-center'
				onSubmit={submitForm}
			>
				<div>
					<label htmlFor="name" className="pr-3 inline-block w-[100px]">Jméno:</label>
					<input className="my-1 pl-1"
					id="name"
					type='text'
					placeholder='Zadejte jméno'
					onChange={(e) => setName(e.target.value)}
					value={name}
					/>
				</div>
				<div>
					<label htmlFor="mail" className="pr-3 inline-block w-[100px]">e-mail:</label>
					<input className="my-1 pl-1"
					id="mail"
					type='email'
					placeholder='Zadejte váš email'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				</div>
				<div>
					<label htmlFor="count" className="pr-3 inline-block w-[100px]">Počet osob:</label>
					<input className="my-1 pl-1"
					id="count"
					type='number'
					placeholder='Počet osob'
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
					placeholder='adresa'
					onChange={(e)=>setAdresss(e.target.value)}
					value={adress}
				/>
				</div>
				
				<input
					type='submit'
					value='Rezervovat'
				/>
			</form>
			{notification && (
				<div>
					<p>
						Vaše rezervace byla vytvořena na den {data} v
						9:00. Těšíme se na Vás
					</p>
					<p>
						Rezervaci můžete zrušit, když nás kontaktujete na adrese{" "}
						<e-mail>mona.ruz@seznam.cz</e-mail>{" "}
					</p>
				</div>
			)}
		</section>
	)
}

export default ReservationDetail
