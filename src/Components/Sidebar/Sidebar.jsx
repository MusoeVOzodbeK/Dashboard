import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import logo from "../../assets/Group 1 (3).png";
const Sidebar = () => {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);
  const [openSix, setOpenSix] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="sidebarList">
          <li>
            <Link className="link" to="/"></Link>
          </li>
          <li>
            <Link className="link" to="/marketing">
              Marketing
            </Link>
          </li>
          <li>
            <li onClick={() => setOpenOne(!openOne)}>
              Analytics<i className="bx bx-chevron-down"></i>
            </li>
            <ul style={{ display: openOne ? "block" : "none" }}>
              <li>
                <Link className="link" to="/analytics/finance">
                  Finance
                </Link>
              </li>
              <li>
                <Link className="link" to="/analytics/order">
                  Order
                </Link>
              </li>
              <li>
                <Link className="link" to="/analytics/allanalytics">
                  All analytics
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="link" to="/order">
              Order
            </Link>
          </li>
          <li onClick={() => setOpenTwo(!openTwo)}>
            <li>
              Finance<i className="bx bx-chevron-down"></i>
            </li>
            <ul style={{ display: openTwo ? "block" : "none" }}>
              <li>
                <Link className="link" to="/finance/finance">
                  Finance
                </Link>
              </li>
              <li>
                <Link className="link" to="/finance/typetransaction">
                  Type Transaction
                </Link>
              </li>
              <li>
                <Link className="link" to="/finance/prize">
                  Prize
                </Link>
              </li>
              <li>
                <Link className="link" to="/finance/salary">
                  Salary
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={() => setOpenThree(!openThree)}>
            <li>
              Students<i className="bx bx-chevron-down"></i>
            </li>
            <ul style={{ display: openThree ? "block" : "none" }}>
              <li>
                <Link className="link" to="/students/attendance">
                  Attendance
                </Link>
              </li>
              <li>
                <Link className="link" to="/students/allStudents">
                  All Students
                </Link>
              </li>
              <li>
                <Link className="link" to="/students/activestudents">
                  Archive Students
                </Link>
              </li>
              <li>
                <Link className="link" to="/students/parents">
                  Parents
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={() => setOpenFour(!openFour)}>
            <li>
              Groups<i className="bx bx-chevron-down"></i>
            </li>
            <ul style={{ display: openFour ? "block" : "none" }}>
              <li>
                <Link className="link" to="/groups/groups">
                  Groups
                </Link>
              </li>
              <li>
                <Link className="link" to="/groups/classschedule">
                  Class schedule
                </Link>
              </li>
              <li>
                <Link className="link" to="/groups/rooms">
                  Rooms
                </Link>
              </li>
              <li>
                <Link className="link" to="/groups/groupstudents">
                  Group students
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="link" to="/courses">
              Courses
            </Link>
          </li>
          <li onClick={() => setOpenFive(!openFive)}>
            <li>
              Employees<i className="bx bx-chevron-down"></i>
            </li>
            <ul style={{ display: openFive ? "block" : "none" }}>
              <li>
                <Link className="link" to="/employees/employees">
                  Employees
                </Link>
              </li>
              <li>
                <Link className="link" to="/employees/employeerroles">
                  Employee roles
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={() => setOpenSix(!openSix)}>
            <li>
              Settings<i className="bx bx-chevron-down"></i>
            </li>
            <ul style={{ display: openSix ? "block" : "none" }}>
              <li>
                <Link className="link" to="/setting/allsettings">
                  All Settings
                </Link>
              </li>
              <li>
                <Link className="link" to="/setting/employess">
                  Employees
                </Link>
              </li>
              <li>
                <Link className="link" to="/setting/teachers">
                  Teachers
                </Link>
              </li>
              <li>
                <Link className="link" to="/setting/students">
                  Students
                </Link>
              </li>
              <li>
                <Link className="link" to="/setting/sms">
                  Sms
                </Link>
              </li>
              <li>
                <Link className="link" to="/setting/integration">
                  Integration
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
