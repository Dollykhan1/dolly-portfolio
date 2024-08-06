import CommonTitle from "../../component/CommonTitle";
import MessageButton from "../../component/MessageButton";
import ProjectData from "./ProjectData";

const Project = () => {
    return (
      <section className="pt-24 lg:min-h-screen">
        <CommonTitle
          heading="Latest"
          middleHeading="Project"
          subHeading="Work"
        ></CommonTitle>
        <div className="mt-16 px-4 lg:px-0">
          <ProjectData></ProjectData>
        </div>
        <div>
          <MessageButton></MessageButton>
        </div>
      </section>
    );
  };
  
  export default Project;