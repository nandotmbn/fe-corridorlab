/* eslint-disable react-hooks/exhaustive-deps */
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import COURSE from "@/static/course.json";
import HeaderCourseById from "../partials/HeaderCourseById";
import Link from "next/link";

function CourseByIdDoneView() {
	const router = useRouter();
	const [courseData, setCourseData] = useState<any>({});

	const setCourse = () => {
		COURSE.forEach((e) => {
			if (e.id != parseInt(router?.query?.course_id as string)) return;
			setCourseData(e);
		});
	};

	useEffect(() => {
		setCourse();
	}, [router]);

	return (
		<div className="w-10/12 flex-col flex items-center">
			<HeaderCourseById courseData={courseData} />
			<div className="w-9/12 mt-10">
        <h3 className="text-2xl font-bold">Thank you for choosing our course, happy learning!</h3>
        <Link href="/">
          <p className="underline text-orange-300 hover:text-orange-600">Go to your course</p>
        </Link>
      </div>
		</div>
	);
}

export default CourseByIdDoneView;
