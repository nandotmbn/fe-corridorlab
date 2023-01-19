/* eslint-disable react-hooks/exhaustive-deps */
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import COURSE from "@/static/course.json";
import SOFTSKILLS from "@/static/soft-skills.json";
import HeaderCourseById from "./partials/HeaderCourseById";

function CourseByIdView() {
	const router = useRouter();
	const [courseData, setCourseData] = useState<any>({});
	const [totalPrice, setTotalPrice] = useState(0);
	const [courseCount, setCourseCount] = useState(1);

	const setCourse = () => {
		COURSE.forEach((e) => {
			if (e.id != parseInt(router?.query?.course_id as string)) return;
			setCourseData(e);
			setTotalPrice(e.price);
		});
	};

	useEffect(() => {
		setCourse();
	}, [router]);

	return (
		<div className="w-10/12 flex-col flex items-center">
			<HeaderCourseById courseData={courseData} />
			<div className="mt-8 w-10/12">
				<h2 className="font-bold text-3xl">Courses</h2>
				<section className="mt-6">
					<h3 className="font-semibold text-xl text-gray-400">Soft skills</h3>
					<div className="mt-2 flex flex-col gap-2">
						{SOFTSKILLS.map((soft, i: number) => {
							if (soft.based == courseData.based || soft.based == "all")
								return (
									<>
										<div className="w-full flex flex-row justify-between">
											<p className="">{soft.name}</p>
											<input
												onChange={(e) => {
													if (e.target.checked) {
														setTotalPrice(soft.price + totalPrice);
                            setCourseCount(courseCount + 1)
													} else {
                            setTotalPrice(totalPrice - soft.price);
                            setCourseCount(courseCount - 1)
													}
												}}
												type="checkbox"
												value="ok"
												className="w-8 h-8"
											/>
										</div>
									</>
								);
						})}
					</div>
				</section>
				<section className="mt-6">
					<h3 className="font-semibold text-xl text-gray-400">Hard skills</h3>
					<div className="mt-2 flex flex-col gap-2">
						{COURSE.map((course, i: number) => {
							if (course.based == courseData.based)
								return (
									<>
										<div className="w-full flex flex-row justify-between">
											<p className="">{course.name}</p>
											<input
												onChange={(e) => {
													if (e.target.checked) {
														setTotalPrice(course.price + totalPrice);
                            setCourseCount(courseCount + 1)
													} else {
                            setTotalPrice(totalPrice - course.price);
                            setCourseCount(courseCount - 1)
													}
												}}
												type="checkbox"
												defaultChecked={
													course.id ==
													parseInt(router?.query?.course_id as string)
														? true
														: false
												}
												value="ok"
												className="w-8 h-8"
											/>
										</div>
									</>
								);
						})}
					</div>
				</section>
			</div>
			<div className="mt-12 w-10/12">
				<h3 className="font-semibold text-xl text-gray-400">Total</h3>
				<div className="w-full flex flex-row justify-between">
					<p className="">Total {courseCount} Course Selected</p>
					<p className="line-through tracking-widest">Rp {totalPrice}</p>
				</div>
				<div className="w-full flex flex-row justify-between">
					<p className="">Discount 80%</p>
					<p className="tracking-widest">Rp {totalPrice * (80 / 100)}</p>
				</div>
				<div className="w-full flex flex-row justify-between">
					<p className="">Total Fee</p>
					<p className="tracking-widest">Rp {totalPrice * (20 / 100)}</p>
				</div>

        <div className="mt-5 w-full flex flex-row justify-end">
          <button onClick={() => Router.push(`${Router.asPath}/done`)} className="px-8 py-2 font-bold text-white bg-blue-700 rounded-2xl">Purchase</button>
        </div>
			</div>
		</div>
	);
}

export default CourseByIdView;
