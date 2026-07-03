import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import AnimatedBackground from "./effects/AnimatedBackground";

export default function LayoutShell({ children }) {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-[2]">{children}</main>
      <Footer />
    </>
  );
}
