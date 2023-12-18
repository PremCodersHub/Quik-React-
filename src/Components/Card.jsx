import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdFileDownloadOff } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ data, refrence }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={refrence}
        whileDrag={{ scale: 1.3 }}
        dragElastic={0.3}
        className="w-40 h-60 bg-zinc-900 rounded-[20px] text-white relative p-[1.5vw] overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-xs mt-3 leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 left-0 w-full">
          <div className="flex items-center justify-between px-4 mb-3">
            <h5 className="text-xs">{data.filesize}</h5>
            <span className="w-6 h-6 flex items-center justify-center bg-zinc-500 rounded-full">
              {data.close ? <MdFileDownloadOff /> : <FiDownload />}
            </span>
          </div>
          {data.tag.isOpen ? (
            <div
              className={`tag w-full ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } h-10 py-4 text-center flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
