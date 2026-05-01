import Footer from "@/components/Shared/Footer";
import NavBar from "@/components/Shared/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
