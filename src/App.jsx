import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketing from "./Components/Marketing/Marketing";
import Settings from "./Components/Settings/Settings";
import Users from "./Components/Users/Users";
import Home from "./Pages/Home/Home";
import FinanceOne from "./Components/Analytics/Finance/Finance";
import OrderOne from "./Components/Analytics/Order/Order";
import Allanalytics from "./Components/Analytics/Allanalytics/Allanalytics";
import FinanceTwo from "./Components/Finance/Finance/Finance";
import Typetransaction from "./Components/Finance/Typetransaction/Typetransaction";
import Prize from "./Components/Finance/Prize/Prize";
import Salary from "./Components/Finance/Salary/Salary";
import Order from "./Components/Order/Order";
import Attendance from "./Components/Students/Attendance/Attendance";
import Activestudents from "./Components/Students/Activestudents/Activestudents";
import AllStudents from "./Components/Students/AllStudents/AllStudents";
import Archivestudents from "./Components/Students/Archivestudents/Archivestudents";
import Parents from "./Components/Students/Parents/Parents";
import Groups from "./Components/Groups/Groups/Groups";
import Classschedulep from "./Components/Groups/Classschedule/Classschedule";
import Rooms from "./Components/Groups/Rooms/Rooms";
import Groupstudents from "./Components/Groups/Groupstudents/Groupstudents";
import Courses from "./Components/Courses/Courses";
import Employees from "./Components/Employees/Employees/Employees";
import Employeerroles from "./Components/Employees/Employeerroles/Employeerroles";
import Allsettings from "./Components/Setting/Allsettings/Allsettings";
import EmployessOne from "./Components/Setting/Employess/Employess";
import Teachers from "./Components/Setting/Teachers/Teachers";
import Students from "./Components/Setting/Students/Students";
import Sms from "./Components/Setting/Sms/Sms";
import Integration from "./Components/Setting/Integration/Integration";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from './Pages/Login/Login'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          {/* Marketing */}
          <Route path="/marketing" element={<Marketing />} />
          {/* Analytics */}
          <Route path="/analytics/finance" element={<FinanceOne />} />
          <Route path="/analytics/order" element={<OrderOne />} />
          <Route path="/analytics/allanalytics" element={<Allanalytics />} />
          {/* Order  */}
          <Route path="/order" element={<Order />} />
          {/* Finance */}
          <Route path="/finance/finance" element={<FinanceTwo />} />
          <Route
            path="/finance/typetransaction"
            element={<Typetransaction />}
          />
          <Route path="/finance/prize" element={<Prize />} />
          <Route path="/finance/salary" element={<Salary />} />
          {/* Students */}
          <Route path="/students/attendance" element={<Attendance />} />
          <Route path="/students/allStudents" element={<AllStudents />} />
          <Route path="/students/activestudents" element={<Activestudents />} />
          <Route
            path="/students/archivestudents"
            element={<Archivestudents />}
          />
          <Route path="/students/parents" element={<Parents />} />
          {/* Groups */}
          <Route path="/groups/groups" element={<Groups />} />
          <Route path="/groups/classschedule" element={<Classschedulep />} />
          <Route path="/groups/rooms" element={<Rooms />} />
          <Route path="/groups/groupstudents" element={<Groupstudents />} />
          {/* Courses */}
          <Route path="/courses" element={<Courses />} />
          {/* Employees */}
          <Route path="/employees/employees" element={<Employees />} />
          <Route
            path="/employees/employeerroles"
            element={<Employeerroles />}
          />
          {/* Settings */}
          <Route path="/setting/allsettings" element={<Allsettings />} />
          <Route path="/setting/employess" element={<EmployessOne />} />
          <Route path="/setting/teachers" element={<Teachers />} />
          <Route path="/setting/students" element={<Students />} />
          <Route path="/setting/sms" element={<Sms />} />
          <Route path="/setting/integration" element={<Integration />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
