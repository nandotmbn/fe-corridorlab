import Image from "next/image";
import React from "react";

function HeaderCourseById({courseData}: any) {
	return (
		<div className="flex flex-row gap-10 items-center justify-between">
			<div>
				<h1 className="text-4xl text-blue-800 font-bold">
					School of{" "}
					{(() => {
						switch (courseData.based) {
							case "ai":
								return (
									<span className="text-orange-600">
										Artificial Intellegence Based
									</span>
								);
							case "mobile":
								return (
									<span className="text-orange-600">Mobile Apps Based</span>
								);
							case "web":
								return <span className="text-orange-600">Web Based</span>;
							case "embedded":
								return (
									<span className="text-orange-600">Embedded System Based</span>
								);
						}
					})()}{" "}
					Product Management and Strategy
				</h1>
				<h4 className="mt-2">
					Learn how to build innovative{" "}
					<span className="uppercase">{courseData.based}</span> product that
					wins and works
				</h4>
			</div>
			<Image
				src="/course_by_id.jpg"
				width={100}
				alt="Competitions"
				height={100}
			/>
		</div>
	);
}

export default HeaderCourseById;
