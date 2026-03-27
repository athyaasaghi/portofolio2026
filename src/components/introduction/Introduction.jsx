import person from "../../assets/images/person.png";
import "./introduction.css";


const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Halo aku Momoy
            <span className="text-nowrap shrink-0 inline-block w-full">
              Brooklyn Gilbert
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Graduated in 2022 from Stmik Pasim Sukabumi in Informatics Engineering on time. Possesses skills in Application Design. Actively engaged in IT studies, particularly in design, throughout college. Completed an internship at Eduwork, learning Design Thinking, research, empathy, brainstorming, and prototyping. Also, completed several short courses to enhance my UI/UX Designer skills. Eager to work and dedicate myself as a UI/UX Designer.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:example@gmail.com"
            >
              Hubungi Saya
            </a>
          </p>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
