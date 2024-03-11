import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        className="relative overflow-hidden w-[18%] h-[45%] rounded-3xl bg-zinc-500/90 p-5"
      >
        <FaFileAlt />
        <p className="text-xs mt-2">{data.desc}</p>
        <div className="footer absolute w-full h-[30%] bottom-0 left-0">
          <div className=" flex items-center justify-between p-1">
            <h2>.4M</h2>
            <span>
              {data.close ? <IoMdCloseCircle /> : <MdOutlineFileDownload />}
            </span>
          </div>
          {data.tag.isopen ? (
            <div
              className={`bg-sky-400 w-full h-[52%] flex items-center justify-center bottom-0`}
            >
              <h3>{data.tag.tagTitle}</h3>
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
