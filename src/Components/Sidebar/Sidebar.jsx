import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiGroup, BiDollar, BiTransfer } from "react-icons/bi";
import {
  MdOutlineGroups,
  MdOutlineMeetingRoom,
  MdCastForEducation,
  MdOutlineIntegrationInstructions,
  MdOutlineFamilyRestroom,
} from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { SiGoogleclassroom } from "react-icons/si";
import { FiMessageSquare, FiUserCheck } from "react-icons/fi";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import {
  TbCurrencyDollarCanadian,
  TbLayoutDashboard,
  TbPresentationAnalytics,
} from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { BsBasket3, BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineAcademicCap, HiOutlineUserGroup } from "react-icons/hi";
import { FaRegFileArchive } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
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
            <Link className="link sListItem" to="/">
              <TbLayoutDashboard className="sIcon" /> Dashboard
            </Link>
          </li>
          <li className="sItem">
            <Link className="link sListItem" to="/marketing">
              <GiProgression className="sIcon" /> Marketing
            </Link>
          </li>
          <li className="sItem">
            <li onClick={() => setOpenOne(!openOne)} className="sListItem">
              <TbPresentationAnalytics className="sIcon" /> Analytics
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
                <Link className="link sListItem" to="/analytics/finance">
                  <TbCurrencyDollarCanadian className="sIcon" /> Finance
                </Link>
              </li>
              <li className="sItem">
                <Link className="link sListItem" to="/analytics/order">
                  <BsBasket3 className="sIcon" /> Order
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/analytics/allanalytics">
                  <TbPresentationAnalytics className="sIcon" /> All analytics
                </Link>
              </li>
            </ul>
          </li>
          <li className="sItem">
            <Link className="link sListItem" to="/order">
              <BsBasket3 className="sIcon" /> Order
            </Link>
          </li>
          <li>
            <li
              className="sItem sListItem"
              onClick={() => setOpenTwo(!openTwo)}
            >
              <TbCurrencyDollarCanadian className="sIcon" /> Finance
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
                <Link className="link sListItem" to="/finance/finance">
                  <TbCurrencyDollarCanadian className="sIcon" /> Finance
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/finance/typetransaction">
                  <BiTransfer className="sIcon" /> Type Transaction
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/finance/prize">
                  <SlBadge className="sIcon" /> Prize
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/finance/salary">
                  <BiDollar className="sIcon" /> Salary
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <li
              className="sItem sListItem"
              onClick={() => setOpenThree(!openThree)}
            >
              <HiOutlineAcademicCap className="sIcon" /> Students
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
                <Link className="link sListItem" to="/students/attendance">
                  <FiUserCheck className="sIcon" /> Attendance
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/students/allStudents">
                  <HiOutlineUserGroup className="sIcon" /> All Students
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/students/activestudents">
                  <FaRegFileArchive className="sIcon" /> Archive Students
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/students/parents">
                  <MdOutlineFamilyRestroom className="sIcon" /> Parents
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <li
              className="sItem sListItem"
              onClick={() => setOpenFour(!openFour)}
            >
              <MdOutlineGroups className="sIcon" /> Groups
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
                <Link className="link sListItem" to="/groups/groups">
                  <MdOutlineGroups className="sIcon" /> Groups
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/groups/classschedule">
                  <SiGoogleclassroom className="sIcon" /> Class schedule
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/groups/rooms">
                  <MdOutlineMeetingRoom className="sIcon" /> Rooms
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/groups/groupstudents">
                  <HiOutlineUserGroup className="sIcon" /> Group students
                </Link>
              </li>
            </ul>
          </li>
          <li className="sItem">
            <Link className="link sListItem" to="/courses">
              <MdCastForEducation className="sIcon" /> Courses
            </Link>
          </li>
          <li>
            <li
              className="sItem sListItem"
              onClick={() => setOpenFive(!openFive)}
            >
              <BsFillPersonLinesFill className="sIcon" /> Employees
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
                <Link className="link sListItem" to="/employees/employees">
                  <BsFillPersonLinesFill className="sIcon" /> Employees
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/employees/employeerroles">
                  <BsFillPersonLinesFill className="sIcon" /> Employee roles
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <li
              className="sItem sListItem"
              onClick={() => setOpenSix(!openSix)}
            >
              <AiOutlineSetting className="sIcon" /> Settings
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
                <Link className="link sListItem" to="/setting/allsettings">
                  <CiSettings className="sIcon" /> All Settings
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/setting/employess">
                  <BsFillPersonLinesFill className="sIcon" /> Employees
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/setting/teachers">
                  <AiOutlineUser className="sIcon" /> Teachers
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/setting/students">
                  <BiGroup className="sIcon" /> Students
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/setting/sms">
                  <FiMessageSquare className="sIcon" /> Sms
                </Link>
              </li>
              <li>
                <Link className="link sListItem" to="/setting/integration">
                  <MdOutlineIntegrationInstructions className="sIcon" />{" "}
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
