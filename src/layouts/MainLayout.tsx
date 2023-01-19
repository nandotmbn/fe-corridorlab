import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IMainLayout {
	children: JSX.Element;
}

function MainLayout({ children }: IMainLayout) {
	const [isShowed, setShowed] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setShowed(true);
		}, 2000);
	});

	return (
		<div>
			{isShowed && (
				<section className="w-full h-14 bg-orange-500 flex flex-row items-center justify-center gap-4">
					<p className="text-white font-bold text-xl">
						New year discount 80%
					</p>
					<button className="px-4 py-1 bg-blue-700 text-white rounded-full">
						Get Voucher
					</button>
				</section>
			)}
			<nav className="w-full h-20 border-b-2 border-gray-300 flex items-center justify-evenly">
				<Link href="/">
					<Image
						className="cursor-pointer"
						src="/Logo Koridorlab.png"
						alt="Logo Koridorlab"
						width={250}
						height={300}
					/>
				</Link>

				<ul className="flex flex-row gap-12 text-lg items-center">
					<li>
						<button>Placement test</button>
					</li>
					<li>
						<button>Courses</button>
					</li>
					<li>
						<button className="px-8 py-2 rounded-full bg-blue-800 text-white">
							Login
						</button>
					</li>
				</ul>
			</nav>
			<div className="w-full flex justify-center my-8">{children}</div>
		</div>
	);
}

export default MainLayout;
