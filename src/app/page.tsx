import SvgSlider from "../components/svgslider";
import PersonalDev from "../components/personalDev";
import BusinessDev from "@/components/businessDev";
import Introduction from "@/components/introduction";
import Contact from "@/components/contact";
import CertificationsList from "@/components/certifications";
import BookSlider from "@/components/bookslider";

export default function Home() {
  return (
    <main>
      <Introduction />
      <PersonalDev />
      <BusinessDev />
      <SvgSlider />
      <BookSlider />
      <CertificationsList />
      <Contact />
    </main>
  );
}
