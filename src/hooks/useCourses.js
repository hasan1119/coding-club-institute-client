import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const size = 9;
  useEffect(() => {
    fetch(`http://localhost:5000/courses?size=${size}&&page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses);
        const totalData = data.count;
        const pages = Math.ceil(totalData / size);
        setTotalPage(pages);
      });
  }, [currentPage]);
  return { courses, setCourses, totalPage, currentPage, setCurrentPage };
};

export default useCourses;
