import Projects from "./Projects";
import mbg from "../../assets/portof/mbg.png";
import iloker from "../../assets/portof/iloker.png";
import youapp from "../../assets/portof/youapp.png";
import cofi from "../../assets/portof/cofi.png";
import optio from "../../assets/portof/optio.png";
import panelbrnr from "../../assets/portof/panelbrnr.png";

const projectData = [
  {
    id: 1,
    image: mbg,
    category: "UI-UX DESIGN",
    title: "MBG (Makan Bergizi Gratis)",
    description:
      "The MBG Program (Free Nutritious Meals) is a government initiative in Indonesia that provides free healthy and nutritious food, mainly for students, pregnant women, and vulnerable groups.",
    link: "https://medium.com/@asaghiathya/aplikasi-mbg-makan-bergizi-gratis-77bdfe916d3d",
  },
  {
    id: 2,
    image: iloker,
    category: "UI-UX DESIGN",
    title: "iLoker Feature in BRNR App",
    description:
      "The KTADBRNR application introduces the iLoker feature as a solution to assist BRNR community members in accessing job vacancy information more easily and centrally.",
    link: "https://medium.com/@asaghiathya/fitur-iloker-pada-aplikasi-ktadbrnr-61b25275f24c",
  },
  {
    id: 3,
    image: youapp,
    category: "UI-UX DESIGN",
    title: "YouApp UI Design",
    description:
      "YouApp is an information technology company. We focus on developing innovative applications and solutions using the latest technologies.",
    link: "https://medium.com/@asaghiathya/redesign-aplikasi-youapp-1f657a351fab",
  },
  {
    id: 4,
    image: cofi,
    category: "UI-UX DESIGN",
    title: "CofiCofi UI Design",
    description:
      "Speaking of the intersection between coffee and modern technology, CofiCofi is a design application that offers a wide variety of coffee beverages to satisfy every coffee lover's preference",
    link: "https://medium.com/@asaghiathya/aplikasi-minuman-kopi-coficofi-fe217f84fc55",
  },
  {
    id: 5,
    image: optio,
    category: "UI-UX DESIGN",
    title: "Optio UI Design",
    description:
      "Optio is an e-commerce company dedicated to empowering local MSMEs by creating authentic products. From manufacturing to marketing, we help promote local goods across Indonesia, covering primary, secondary, and tertiary sectors.",
    link: "https://medium.com/@asaghiathya/ecommerce-application-optio-2860c7e757dd",
  },
  {
    id: 6,
    image: panelbrnr,
    category: "UI-UX DESIGN",
    title: "BRNR Admin Panel UI Design",
    description:
      "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here are some of my recent UI/UX design projects that focus on creating intuitive, user-centered, and visually engaging digital experiences.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
