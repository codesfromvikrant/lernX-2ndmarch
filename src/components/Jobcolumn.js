import React from "react";
import { useSearchParams } from "react-router-dom";

import data from "../data";

const Jobcolumn = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = searchParams.get('page');

  let start = 0;
  let end = props.jobsPerPage;
  page = Number(page);

  if (page !== 1 && page !== 0) {
    start = start + props.jobsPerPage * (page - 1);
    end = end + props.jobsPerPage * (page - 1);
  }


  const jobcolumn = data.map((el, i) => {
    if (i >= start && i < end) {
      return (
        <tr className="shadow-md bg-white" key={el.Id}>
          <td className="font-bold text-blue-600">{el.Jobrole}</td>
          <td>{el.JobType}</td>
          <td>{el.Openings}</td>
          <td>{el.Location}</td>
          <td>{el.Exp}</td>
          <td>{el.Pointsrequired}</td>
          <td>{el.Invitessend}</td>
          <td>{el.Accepted}</td>
          <td>{el.Creationdates}</td>
          <td><button className="bg-[#432D9C] text-white p-2 rounded font-semibold">See More</button></td>
          <td><i className="fa fa-solid fa-ellipsis-vertical"></i></td>
        </tr >
      )
    }
  })

  return (
    <>
      <tbody>
        {jobcolumn}
      </tbody>


    </>
  )
}

export default Jobcolumn;