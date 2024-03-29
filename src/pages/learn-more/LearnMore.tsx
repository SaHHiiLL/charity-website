import { Divider, Toolbar } from "@mui/material";
import Navbar from "../../components/navbar/Navbar.tsx";
import Footer from "../../components/footer/Footer.tsx";
import LearnMoreHeader from "./components/LearnMoreHeader.tsx";
import NewsLetter from "../../components/newsletter/NewsLetter.tsx";
import Faq from "./components/Faq.tsx";
import Mission from "./components/Mission.tsx";

function LearnMore() {
  return (
    <>
      <Navbar />
      <Toolbar />
      <Toolbar />
      <LearnMoreHeader />
      <Divider />
      <Mission />
      <Divider />
      <Faq />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default LearnMore;
