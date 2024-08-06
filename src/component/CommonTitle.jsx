const CommonTitle = ({ heading, subHeading, middleHeading }) => {
  return (
    <div className="text-center">
      <h3 className="lg:text-2xl text-xl font-playwrite font-extrabold text-pink-600">
        _{subHeading}_
      </h3>
      <h1 className="lg:text-5xl text-3xl font-extrabold dark:text-white text-[#231a48fe]">
        <span>{heading}</span>{" "}
        <span className="text-pink-600">{middleHeading}</span>
      </h1>
    </div>
  );
};

export default CommonTitle;
