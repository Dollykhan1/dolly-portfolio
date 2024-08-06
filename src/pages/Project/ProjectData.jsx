import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import { RiTableFill } from "react-icons/ri";
import axios from "axios";

const ProjectData = () => {

  const { data: project = [] } = useQuery({
    queryKey: ["project"],
    queryFn: async() => {
      const res = await axios.get("project.json");
      return res.data;
    },
  });

  console.log(project);
  return (
    <section className="">
     <div className="hidden md:block lg:block">
     <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {project.map((p) => (
          <SwiperSlide key={p.image} className="w-1/2">
            <Card className="w-full dark:bg-[#334155] bg-pink-50">
              <CardHeader shadow={false} floated={false} className="h-72">
                <img
                  src={p.image}
                  alt="card-image"
                  className="w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <h1 className="text-2xl font-bold dark:text-white text-[#241B49]">
                  {p.websiteName}
                </h1>
              </CardBody>
              <CardFooter className="pt-0 flex justify-between items-center gap-2">
                <Link
                  to={p.github_link}
                  target="_blank"
                  className="text-white bg-pink-600 md:text-base lg:text-xl font-bold px-4 py-2 dark:bg-[#0B061F] flex items-center justify-center gap-2"
                >
                  <FaLink /> <span>Github Link</span>
                </Link>
                <Link
                  to={p.liveLink}
                  target="_blank"
                  className="text-white bg-pink-600 md:text-base lg:text-xl font-bold px-4 py-2 dark:bg-[#0B061F] flex justify-center items-center gap-2"
                >
                  <RiTableFill /> <span>Live Demo</span>
                </Link>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
     <div className="block md:hidden lg:hidden">
     <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {project.map((p) => (
          <SwiperSlide key={p.image} className="w-1/2">
            <Card className="w-full dark:bg-[#334155] bg-pink-50">
              <CardHeader shadow={false} floated={false} className="h-72">
                <img
                  src={p.image}
                  alt="card-image"
                  className="w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <h1 className="text-2xl font-bold dark:text-white text-[#241B49]">
                  {p.websiteName}
                </h1>
              </CardBody>
              <CardFooter className="pt-0 flex justify-between items-center gap-2">
                <Link
                  to={p.github_link}
                  target="_blank"
                  className="text-white bg-pink-600 text-base px-4 py-2 dark:bg-[#0B061F] flex items-center justify-center gap-2"
                >
                  <FaLink /> <span>Github Link</span>
                </Link>
                <Link
                  to={p.liveLink}
                  target="_blank"
                  className="text-white bg-pink-600 text-base px-4 py-2 dark:bg-[#0B061F] flex justify-center items-center gap-2"
                >
                  <RiTableFill /> <span>Live Demo</span>
                </Link>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    </section>
  );
};

export default ProjectData;