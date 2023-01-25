import Header from "./Header";
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <>
    <div className="student">
      <Header />
      <div className="student-1">
        <h2>Student Details</h2>
        <Link to="/form">
          {" "}
          <button className="Add-student">Add new student</button>{" "}
        </Link>
      </div>
      <div>
        <table className="table" border="2px">
          <tbody>
            <tr>
              <th className="th">Name</th>
              <th className="th">age </th>
              <th className="th">Course</th>
              <th className="th">Batch</th>
              <th className="th">Change</th>
            </tr>
           
             <tr>
                <td>rishabh</td>
                <td>22</td>
                <td>Btech</td>
                <td>2022</td>
                <td><Link to ="/update"><button>update</button></Link></td>
             </tr>
             <tr>
                <td>aryan</td>
                <td>22</td>
                <td>Mca</td>
                <td>2023</td>
                <td><Link to ="/update"><button>update</button></Link></td>
             </tr>
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
    </>
  );
};

export default Student;
