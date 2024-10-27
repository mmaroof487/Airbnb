export default function Alert() {
	return (
		<div className="w-full h-screen absolute z-50 ">
			<div className="w-1/3 h-48 rounded-lg bg-zinc-100 absolute m-auto top-1/3 left-1/3 ">
				<div className="text-oyange flex justify-between px-4 pt-6">
					<div>Alert!</div>
				</div>
				<div className="w-full h-1 border-t-2 border-zinc-200 mt-1"> </div>
				<div className="px-4 py-6 text-oyange">You need to be logged in before you can access this page</div>
			</div>
		</div>
	);
}
