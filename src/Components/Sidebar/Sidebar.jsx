import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiGroup } from "react-icons/bi";
import { MdOutlineGroups } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { GrUserSettings, GrIntegration } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { TbCurrencyDollarCanadian } from "react-icons/tb";
import {GiProgression} from "react-icons/gi"
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
          <li className="sItem">
            <Link className="link" to="/">
              <i className="bx bx-home"></i> Dashboard
            </Link>
          </li>
          <li className="sItem">
            <Link className="link" to="/marketing">
           <GiProgression/>   Marketing
            </Link>
          </li>
          <li className="sItem">
            <li onClick={() => setOpenOne(!openOne)}>
              <i className="bx bx-trending-up"></i> Analytics
              <i
                style={{
                  transform: openOne ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "0.3s",
                }}
                className="bx bx-chevron-down"
              ></i>
            </li>
            <ul style={{ display: openOne ? "block" : "none" }}>
              <li>
                <Link className="link" to="/analytics/finance">
                  <TbCurrencyDollarCanadian /> Finance
                </Link>
              </li>
              <li className="sItem">
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
          <li className="sItem">
            <Link className="link" to="/order">
              Order
            </Link>
          </li>
          <li>
            <li className="sItem" onClick={() => setOpenTwo(!openTwo)}>
              <TbCurrencyDollarCanadian /> Finance
              <i
                style={{
                  transform: openTwo ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "0.3s",
                }}
                className="bx bx-chevron-down"
              ></i>
            </li>
            <ul style={{ display: openTwo ? "block" : "none" }}>
              <li>
                <Link className="link" to="/finance/finance">
                  <TbCurrencyDollarCanadian /> Finance
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
                  <i className="bx bx-dollar"></i> Salary
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <li className="sItem" onClick={() => setOpenThree(!openThree)}>
              Students
              <i
                style={{
                  transform: openThree ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "0.3s",
                }}
                className="bx bx-chevron-down"
              ></i>
            </li>
            <ul
              style={{
                display: openThree ? "block" : "none",
                transition: ".3s",
              }}
            >
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
          <li>
            <li className="sItem" onClick={() => setOpenFour(!openFour)}>
              <MdOutlineGroups /> Groups
              <i
                style={{
                  transform: openFour ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "0.3s",
                }}
                className="bx bx-chevron-down"
              ></i>
            </li>
            <ul style={{ display: openFour ? "block" : "none" }}>
              <li>
                <Link className="link" to="/groups/groups">
                  <MdOutlineGroups /> Groups
                </Link>
              </li>
              <li>
                <Link className="link" to="/groups/classschedule">
                  <SiGoogleclassroom /> Class schedule
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
          <li className="sItem">
            <Link className="link" to="/courses">
              Courses
            </Link>
          </li>
          <li>
            <li className="sItem" onClick={() => setOpenFive(!openFive)}>
              <GrUserSettings /> Employees
              <i
                style={{
                  transform: openFive ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "0.3s",
                }}
                className="bx bx-chevron-down"
              ></i>
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
          <li>
            <li className="sItem" onClick={() => setOpenSix(!openSix)}>
              <AiOutlineSetting /> Settings
              <i
                style={{
                  transform: openSix ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "0.3s",
                }}
                className="bx bx-chevron-down"
              ></i>
            </li>
            <ul style={{ display: openSix ? "block" : "none" }}>
              <li>
                <Link className="link" to="/setting/allsettings">
                  <CiSettings /> All Settings
                </Link>
              </li>
              <li>
                <Link className="link" to="/setting/employess">
                  <GrUserSettings /> Employees
                </Link>
              </li>
              <li>
                <Link className="link" to="/setting/teachers">
                  <AiOutlineUser /> Teachers
                </Link>
              </li>
              <li>
                <Link className="link" to="/setting/students">
                  <BiGroup /> Students
                </Link>
              </li>
              <li>
                <Link className="link" to="/setting/sms">
                  <FiMessageSquare /> Sms
                </Link>
              </li>
              <li>
                <Link className="link" to="/setting/integration">
                  <GrIntegration /> Integration
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
