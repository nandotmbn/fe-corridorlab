import MainLayout from "@/layouts/MainLayout";
import CourseByIdView from "@/views/courses/course_id/course-by-id";
import Head from "next/head";
import React from "react";

function CourseById() {
	return (
		<>
			<Head>
				<title>Koridorlab | Course</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
        <CourseByIdView />
      </MainLayout>
		</>
	);
}

export default CourseById;
