import Introduction from "../components/introduction/Introduction";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import Blog from "../components/blog/Blog"
import "../../index.css";
import WorkingExperience from "../components/workingExperiences/WorkingExperiences";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      <Portfolio />
      <div className="bg-soft-white py-20 px-2">
        <WorkingExperience/>
      </div>
    </div>
  );
};

export default Home;
