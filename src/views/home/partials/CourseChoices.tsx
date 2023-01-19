import Link from "next/link";
import React, { useState } from "react";
import COURSE from "../../../static/course.json";

/*
 * Placement Test
 * AI Based Product
 * Web Based Product
 * Web Based Product
 * Embedded Based Product
 * Mobile App Based Product
 * All Course
 */

function CourseChoices(): JSX.Element {
	const [selectedCourseType, setSelectedCourseType] = useState("all");
	return (
		<section className="mt-4">
			<div className="h-22 w-full flex-row flex gap-4 border-b-4 border-gray-300 pb-4">
				<button
					onClick={() => {
						setSelectedCourseType("");
					}}
					className={`py-1 border-2 border-orange-600 rounded-full flex-1 ${
						selectedCourseType == "" && "bg-orange-600 text-white"
					}`}
				>
					Placement Test
				</button>
				<button
					onClick={() => {
						setSelectedCourseType("ai");
					}}
					className={`py-1 border-2 border-orange-600 rounded-full flex-1 ${
						selectedCourseType == "ai" && "bg-orange-600 text-white"
					}`}
				>
					Artificial Intellegence
				</button>
				<button
					onClick={() => {
						setSelectedCourseType("mobile");
					}}
					className={`py-1 border-2 border-orange-600 rounded-full flex-1 ${
						selectedCourseType == "mobile" && "bg-orange-600 text-white"
					}`}
				>
					Mobile Apps
				</button>
				<button
					onClick={() => {
						setSelectedCourseType("embedded");
					}}
					className={`py-1 border-2 border-orange-600 rounded-full flex-1 ${
						selectedCourseType == "embedded" && "bg-orange-600 text-white"
					}`}
				>
					Embedded System
				</button>
				<button
					onClick={() => {
						setSelectedCourseType("web");
					}}
					className={`py-1 border-2 border-orange-600 rounded-full flex-1 ${
						selectedCourseType == "web" && "bg-orange-600 text-white"
					}`}
				>
					Web
				</button>
				<button
					onClick={() => {
						setSelectedCourseType("all");
					}}
					className={`py-1 border-2 border-orange-600 rounded-full flex-1 ${
						selectedCourseType == "all" && "bg-orange-600 text-white"
					}`}
				>
					All Course
				</button>
			</div>

			<div className="w-full flex h-72 flex-row overflow-x-auto gap-4 justify-start mt-4">
				{COURSE?.map((e: any, i: number) => {
					if (selectedCourseType == "all")
						return (
							<div className="border-2 rounded-2xl border-gray-300 p-2">
								<div className="w-44 h-32 bg-orange-600 rounded-2xl" />
								<div className="p-2">
									<Link
										href={`/course/${e.id}`}
										className="font-semibold hover:text-orange-500 duration-300 whitespace-normal"
									>
										{e.name}
									</Link>
								</div>
							</div>
						);
					if (e.based == selectedCourseType)
						return (
							<div
								className="border-2 rounded-2xl border-gray-300 p-2 w-44"
							>
								<div className="h-32 w-full bg-orange-600 rounded-2xl" />
								<div className="p-2">
									<Link
										href={`/course/${e.id}`}
										className="font-semibold hover:text-orange-500 duration-300 whitespace-normal"
									>
										{e.name}
									</Link>
								</div>
							</div>
						);
				})}
			</div>
		</section>
	);
}

export default CourseChoices;
