import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ totalJobs, jobsPerPage }) => {
  // Routing
  const [searchParams, setSearchParams] = useSearchParams();

  let totalPages = totalJobs / jobsPerPage;
  if (totalPages % jobsPerPage) {
    totalPages = totalPages + totalPages % jobsPerPage
  }

  let btnArr = [];
  for (let i = 1; i <= totalPages; i++) {
    btnArr = [...btnArr, i]
  }

  // States
  const [pgbtnArr, setPgbtnArr] = useState(btnArr);

  const pgBtn = pgbtnArr.map((el) => {
    return (
      <button onClick={() => { setSearchParams({ page: `${el}` }) }} key={el} className="bg-gray-800 text-white w-8 h-8 rounded">{el}</button>
    )
  })

  return (
    <div className="pg-btn-container mx-auto w-max mb-20 flex justify-start items-start gap-4">
      {pgBtn}
    </div>
  )
}

export default Pagination