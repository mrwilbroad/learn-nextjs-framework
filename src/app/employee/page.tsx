import axios from "axios";
import { type Employee } from "./../Types/Employee";
import { Table, Spinner } from "react-bootstrap";
import Link from "next/link";
import context from "react-bootstrap/esm/AccordionContext";

const EmployeePage = ({ users }: { users: any }) => {
 
  return (
    <div className="container">
      Employee Page....
      <Table striped bordered responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Branch</th>
            <th>Country</th>
            <th>Region</th>
            <th>Salary</th>
            <th colSpan={2} className="text-center">
              View
            </th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    </div>
  );
};


export default EmployeePage;
