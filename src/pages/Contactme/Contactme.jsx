import { GrLocation } from "react-icons/gr";
import MessageButton from "../../component/MessageButton";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CommonTitle from "../../component/CommonTitle";
import { useForm } from "react-hook-form";


const Contactme = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <section className="pt-24 lg:h-screen">
          <CommonTitle
            heading="Contact"
            middleHeading="Me"
            subHeading="contact"
          ></CommonTitle>
    
          <div className="mt-16 lg:px-0 px-3">
            <div className="bg-pink-50 dark:bg-[#1F2937] lg:px-10 px-3 py-8 rounded-lg flex flex-col lg:flex-row justify-center items-start gap-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 lg:w-2/3 w-full">
                <div className="relative">
                  <input
                    placeholder="Your Name"
                    className="w-full dark:bg-[#374151] bg-transparent outline-none border-2 border-pink-600 dark:border-none dark:text-white placeholder:text-lg placeholder:text-blue-gray-600 text-lg  px-5 py-[10px] rounded-lg"
                    type="text"
                    {...register("name", { required: true })}
                  />{" "}
                  {errors.name && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                <div className="relative">
                  <input
                    placeholder="Your Email Address"
                    className="w-full dark:bg-[#374151] bg-transparent outline-none border-2 border-pink-600 dark:border-none dark:text-white placeholder:text-lg placeholder:text-blue-gray-600 text-lg  px-5 py-[10px] rounded-lg"
                    type="text"
                    {...register("email", { required: true })}
                  />{" "}
                  {errors.email && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Your Message"
                    className="w-full dark:bg-[#374151] bg-transparent outline-none border-2 border-pink-600 dark:border-none dark:text-white placeholder:text-lg placeholder:text-blue-gray-600 h-48 text-lg  px-5 py-[10px] rounded-lg"
                    type="text"
                    {...register("name", { required: true })}
                  />{" "}
                  {errors.name && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                <input
                  type="submit"
                  value="Send Message"
                  className="bg-pink-600 text-white cursor-pointer font-bold rounded-full text-xl px-6 py-4"
                />
              </form>
              <div className="lg:w-1/3 w-full space-y-4">
                <div className="flex justify-start items-center dark:text-white text-[#241B49] font-bold lg:gap-6 gap-3 lg:text-lg text-base">
                  <MdEmail className="lg:text-6xl text-2xl text-white bg-pink-600 lg:p-3 p-1 rounded-full"></MdEmail>{" "}
                  <p className="underline">dollykb35@gmail.com</p>
                </div>
                <div className="flex justify-start items-center dark:text-white text-[#241B49] font-bold lg:gap-6 gap-3 lg:text-lg text-base">
                  <FaWhatsapp className="lg:text-6xl text-2xl text-white bg-pink-600 lg:p-3 p-1 rounded-full"></FaWhatsapp>{" "}
                  <p className="underline">13477419974</p>
                </div>
                <div className="flex justify-start items-center dark:text-white text-[#241B49] font-bold lg:gap-6 gap-3 lg:text-2xl text-base">
                  <GrLocation className="lg:text-6xl text-2xl text-white bg-pink-600 lg:p-3 p-1 rounded-full"></GrLocation>{" "}
                  <p>USA</p>
                </div>
              </div>
            </div>
          </div>
    
          <div>
            <MessageButton></MessageButton>
          </div>
        </section>
        );
};

export default Contactme;