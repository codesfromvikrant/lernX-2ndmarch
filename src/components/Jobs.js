import React from "react";
import Jobcolumn from "./Jobcolumn";
import Pagination from "./Pagination";

import data from "../data";

const Jobs = () => {
  const totalJobs = data.length;
  const jobsPerPage = 6;
  return (
    <>
      <table className="mx-auto my-8">
        <thead className="">
          <tr className="bg-[#D4E2FF] text-sm rounded-xl m-2 shadow-md">
            <th className="text-start px-3 py-4">Job Role</th>
            <th className="text-start px-3 py-4">Job Type</th>
            <th className="text-start px-3 py-4">Openings</th>
            <th className="text-start px-3 py-4">Location</th>
            <th className="text-start px-3 py-4">Exp. (Yrs)</th>
            <th className="text-start px-3 py-4">Points Required</th>
            <th className="text-start px-3 py-4">Invites Send</th>
            <th className="text-start px-3 py-4">Accepted</th>
            <th className="text-start px-3 py-4">Creation Date</th>
            <th className="text-start px-3 py-4">Action</th>
          </tr>
        </thead>

        <Jobcolumn
          jobsPerPage={jobsPerPage}
        />
      </table>

      <Pagination
        totalJobs={totalJobs}
        jobsPerPage={jobsPerPage}
      />
    </>
  )
}

export default Jobs;