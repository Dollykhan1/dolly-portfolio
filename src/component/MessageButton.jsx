import { TbMessage } from "react-icons/tb";
import { Link } from "react-router-dom";


const MessageButton = () => {
    return (
        <div className="flex justify-end items-center">
          <Link
            to="/message"
            className="fixed z-50 bottom-12 duration-300 active:scale-95 bg-pink-600 lg:p-4 p-2 animate-bounce hover:animate-none rounded-full"
          >
            <TbMessage className="text-white lg:text-4xl text-2xl"></TbMessage>
          </Link>
        </div>
        );
};

export default MessageButton;