import BoxClassIg from "../components/BoxClassIg"
import BoxTextAnonim from "../components/BoxTextAnonim"
import Navbar from "../components/Navbar"

const Home = () => {
	return (
		<div className="text-white px-[10%]" id="Home">
			<Navbar />
			<div className="lg:hidden">
				<div className="font-bold text-5xl text-center py-20 ">X PPLG</div>
				

				<div className="grid grid-cols-2 md:grid-cols-2 gap-7 md:gap-5">
					<div className="grid gap-2 md:gap-0 md:grid-cols-1">
						<BoxClassIg />
					</div>
					<div className="grid gap-2 md:gap-0 md:grid-cols-1">
						
						<BoxTextAnonim />
					</div>
				</div>
			</div>

			{/* Dekstop */}
			<div className="hidden lg:block">
				<div className="flex justify-center items-center flex-col h-[100vh]">
					<h5 className="text-[1.4rem] font-semibold">Hi, Visitor!</h5>
					<h1 className="text-7xl font-extrabold" id="Glow">
						WELCOME
					</h1>
					<h6 className="text-sm" style={{ letterSpacing: "5px" }}>
						TO X PPLG
					</h6>
				</div>
			</div>
		</div>
	)
}

export default Home
