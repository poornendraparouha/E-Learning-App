import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { useParams, Link, Outlet, } from "react-router-dom";

function Learn() {
  const {courseId} = useParams();
  const course = coursesData.find((course) => course.id === courseId);
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Created Link to go back to the Courses page */}
        <Link to="/courses" >
        <h2 className={style.back}>{"<<"}</h2>
        </Link>

        {/* Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>{/* List of Chapters rendered here  */}
            {course.chapters.map((chap, i) => {
              return (
                <div className={style.chapterId} key={i}>
                  {/* Created link to each chapter to outlet chapter details */}
                  <Link to={`chapter/${chap.chapter}`}>
                  {chap.title}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      
      <div className={style.courses}>
        {/** Chapter Details rendered here */}
        < Outlet context={{...course}}/>
      </div>
    </div>
</div>
  );
}

export default Learn;
