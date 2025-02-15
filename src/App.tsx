// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import NewSidebar from "./compo/NewSidebar"
// import { AreaCharts } from "./pages/charts/AreaCharts"
// import Charts from "./pages/charts/Charts"
// import { PieCharts } from "./pages/charts/PieCharts"
// import Dashboard from "./pages/Dashbaoard/Dashboard"
// import { Login } from "./pages/Login"
// import { Payments } from "./pages/Payments/Payments"
// import Cards from "./pages/cards/Card"

// const App = () => {
//   return (
//     <>
//       <NewSidebar />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/charts" element={<Charts />} />
//           <Route path="/area-charts" element={<AreaCharts />} />
//           <Route path="/pie-charts" element={<PieCharts />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/payment" element={<Payments />} />
//           <Route path="/cards" element={<Cards />} />
//           <Route path="*" element={<h1>Page Not Found</h1>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App



import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import NewSidebar from "./compo/NewSidebar";
import Calenders from "./pages/calender/Calender";
import Tab from "./pages/tabs/Tab";

const Dashboard = lazy(() => import("./pages/Dashbaoard/Dashboard"));
const Charts = lazy(() => import("./pages/charts/Charts"));
const AreaCharts = lazy(() => import("./pages/charts/AreaCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const Login = lazy(() => import("./pages/Login"));
const Payments = lazy(() => import("./pages/Payments/Payments"));
const Cards = lazy(() => import("./pages/cards/Card"));

const Loader = () => <div style={{ textAlign: "center", marginTop: "20px" }}>Loading...</div>;

const App = () => {
  return (
    <>
      <NewSidebar />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/area-charts" element={<AreaCharts />} />
            <Route path="/pie-charts" element={<PieCharts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={<Payments />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calender" element={<Calenders />} />
            <Route path="/tab" element={<Tab />} />
            <Route path="*" element={<h1>Page Not Fousnd</h1>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
