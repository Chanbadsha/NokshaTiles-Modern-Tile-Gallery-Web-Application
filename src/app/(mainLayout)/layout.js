import NavBar from "@/components/Shared/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;
