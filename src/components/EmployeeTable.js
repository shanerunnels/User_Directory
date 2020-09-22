import React, { useState } from 'react';
import EmpList from '../employees.json';

function EmployeeTable() {
  // Declare a new state variable, which we'll call "count"
  const [employees, updateEmployees] = useState([]);
  const [sortValue, setSortValue] = useState('');


  for(let i = 0; i < EmpList.employees.length; i++) {
    employees.push(
        <React.Fragment>
            <td>{EmpList.employees[i]["first-name"]}</td>
            <td>{EmpList.employees[i]["last-name"]}</td>
            <td>{EmpList.employees[i]["occupation"]}</td>
        </React.Fragment>
    )
  }

  function sortEmployees(e) {
      console.log(e.target.value)
      updateEmployees(()=> {
          if (e.target.value === "first-name") {
              return employees.sort();
          }
      })
  };

  return (
    <div>
        <h1>Employees List</h1>
        <table>
                {employees}
        </table>
       <select onChange={sortEmployees}>
        <option value="">--Please choose an option to sort by--</option>
        <option value="first-name">First Name</option>
        <option value="last-name">Last Name</option>
       </select>
    </div>
  );
}

export default EmployeeTable;