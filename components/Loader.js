

export default function Loader() {
	// body...

	return(
		<div className="flex rounded-3xl bg-white flex-col mx-auto shadow-2xl w-[93%]  justify-center ">
			<h2 className="text-xl mt-5 ml-5 md:ml-10 font-semibold text-gray-800" >Uploading</h2>

			<div className="h-2 relative overflow-hidden mt-5 mb-5 w-[90%] mx-auto rounded-3xl bg-black/10 ">
				<div className="h-full animate-loading w-20 bg-blue-500 absolute transition duration-600 ease-in-out rounded-3xl" ></div>
			</div>
		</div>


	)
}