import eduwork from "../../assets/eduwork.png"
import mycloud from "../../assets/mycloud.png"

const WorkingExperience = () => {
    return(
        <>
        <div className="content my-10" id="experiences">
            <h1 className="font-semibold text-3xl sm:text-5xl">Working Experiences</h1>
        </div>
        <div className="content rounded-lg my-5 shadow bg-white sm:grid grid-cols-12 p-8" id="work-process">
            <div className="col-span-1">
                <img src={eduwork} className="w-20" alt="" />
            </div>
            <div className="col-span-4 mr-10">
                <div className="flex gap-5">
                    <span>Jul 2021</span> - <span>Jan 2023</span>
                </div>
                <h1 className="font-medium text-2xl my-5">Eduwork</h1>
                <p className="text-gray-500 text-justify">Eduwork is an online training platform focused on helping people learn digital skills and prepare for the workforce. Its programs usually take the form of bootcamps, mentoring sessions, or e-courses guided by professional mentors in the technology and digital fields.</p>
            </div>
            <div className="col-span-7 border-l border-l-slate-300 pl-10 mt-10 sm:mt-0">
                <h1 className="text-xl font-medium">Bootcamp</h1>
                <ul className="list-disc text-justify text-gray-500 pl-6 my-5 space-y-2 leading-relaxed">
                    <li>
                        Observing issues surrounding sales, particularly sales of MSME products, then addressing these issues through brainstorming, design thinking, and interviews.
                    </li>
                    <li>
                        5 respondents were obtained for direct interviews regarding online sales. Subsequently, the data was summarized and analyzed using the web-based platform Miro.
                    </li>
                    <li>
                        Performing brainstorming for product ideas with factual research, creating information architecture, and user flows in Miro, then designing wireframes, low-fidelity, and high-fidelity screens totaling 59 screens in Figma.
                    </li>
                    <li>
                        Created a prototype to test the application design using Maze for testers to gather feedback or responses from their experience using the E-Commerce application design.
                    </li>
                    <li>
                        Created a final project for the web design of Travel Indonesia to enhance user satisfaction by redesigning it using Figma.
                    </li>
                    <li>
                        Created a web portfolio to be published on a CV and created a Behance account to upload several projects on Behance.
                    </li>
                </ul>
            </div>
        </div>
        <div className="content rounded-lg my-5 shadow bg-white sm:grid grid-cols-12 p-8" id="work-process">
            <div className="col-span-1">
                <img src={mycloud} className="w-20" />
            </div>
            <div className="col-span-4 mr-10">
                <div className="flex gap-5">
                    <span>Mar 2024</span> - <span>Mar 2026</span>
                </div>
                <h1 className="font-medium text-2xl my-5">MycloudIndo</h1>
                <p className="text-gray-500 text-justify">A software house is a company that focuses on developing and building software solutions such as mobile applications, websites, and other digital systems for clients. In addition to software development, some software houses also provide server services to host, manage, and run the applications they create. By offering server services, the company not only helps clients develop their applications but also ensures that the applications run smoothly, securely, and efficiently when accessed by users online. These services usually include server hosting, database management, and regular system maintenance.</p>
            </div>
            <div className="col-span-7 border-l border-l-slate-300 pl-10 mt-10 sm:mt-0">
                <h1 className="text-xl font-medium">Bootcamp</h1>
                <ul className="list-disc text-justify text-gray-500 pl-6 my-5 space-y-2 leading-relaxed">
                    <li>
                        Conduct research on the application to be developed in order to understand user needs and the problems they experience. This process is carried out by analyzing the application's usage flow through flowcharts or user flows so that the design becomes more structured and directed.
                    </li>
                    <li>
                        Designing and developing the KTADBRNR application using Figma with the aim of making it easier for the public to use the application. The application includes various features such as video content, live streaming, social assistance (pansos), job vacancy information, and other supporting features.
                    </li>
                    <li>
                        Designing the MBG application using Figma to support the Free Nutritious Meal (Makan Bergizi Gratis) program for school children. The design focuses on easy access to information about meal menus, food distribution, and program monitoring so that it is more effective and user-friendly.
                    </li>
                    <li>
                        Presenting the completed UI/UX design to stakeholders to explain the concept, user flow, and the purpose of the design. This process also aims to receive feedback or revisions so that the design can be improved before entering the development stage.
                    </li>
                    <li>
                        Working closely with programmers to ensure that the UI/UX design can be implemented properly in the application. This collaboration includes discussions about the interface, feature functionality, and ensuring that the design runs according to the planned concept.
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default WorkingExperience