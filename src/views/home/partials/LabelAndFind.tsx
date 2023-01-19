import React from "react";

function LabelAndFind() {
	return (
		<div className="flex flex-col justify-evenly">
			<div>
				<h1 className="text-6xl text-blue-800 font-bold">
					School of Product Management and Strategy
				</h1>
				<p className="mt-2 text-gray-500 text-lg">
					Learn how to create innovative product that wins and works
				</p>
			</div>

			<div className="w-2/4 mt-4 border-orange-600 border-2 rounded-full px-2 py-1 flex flex-row items-center justify-between">
				<input
					type="text"
					className="focus:outline-none px-4 flex-3"
					placeholder="Ex: React Native"
				/>
				<button className="px-4 py-2 bg-orange-600 rounded-full text-white flex-1">
					Search
				</button>
			</div>
		</div>
	);
}

export default LabelAndFind;
