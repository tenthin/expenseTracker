import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex bg-blue-950 ">
      {/* LEFT SIDE */}
      <div className="min-h-screen ">
        <Navbar />
      </div>

      {/* RIGHT SIDE (SAME SIZE ALWAYS) */}
      <div className="lg:flex-1 p-6">
        <div className="h-full  bg-white/10 backdrop-blur-xl ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
