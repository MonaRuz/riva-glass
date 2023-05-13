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

					result.sort(function (a, b) {
						let aNum = parseInt(a.date.split(".")[0])
						let bNum = parseInt(b.date.split(".")[0])
						return aNum - bNum
					})
					setData(result)
				}
			})

			.catch((err) => {
				setError(err.message)
			})
	}, [])
	console.log(data)
	return (
		<section className='max-h-[h-100vh] min-h-[550px] flex flex-col items-center'>
			<h2 className='text-xl'>Vyberte si datum návštěvy</h2>
			<hr className=' w-[300px] my-2' />
			{error && <p>{error}</p>}

			{data.map((oneDate) => {
				const { id, count, date } = oneDate
				if(count<10){
					return (
						<div
							className='w-[200px] flex flex-row justify-between'
							key={id}
						>
							<Link
								className='bg-[#4FA1C2] transition ease-in-out duration-300 hover:bg-[#3e7f99] text-lg text-slate-100 my-1 border-slate-100 border-[1px] w-[100px] px-3 inline-block rounded-md'
								to={`/reservation-detail/${id}`}
							>
								{date}
							</Link>
							<p className='bg-[#4FA1C2] transition ease-in-out duration-300 hover:bg-[#3e7f99] text-lg text-slate-100 my-1 border-slate-100 border-[1px] w-[50px]inline-block rounded-md px-1'>{count}/10</p>
						</div>
					)
				}

				
			})}
		</section>
	)
}

export default Reservation
