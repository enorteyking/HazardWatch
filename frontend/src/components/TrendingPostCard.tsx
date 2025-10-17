import { CiShare2 } from "react-icons/ci";
// import { FaRegCommentDots } from "react-icons/fa6";

import { HazardReport } from "../types/hazardreport";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CircleArrowUp } from "lucide-react";

dayjs.extend(relativeTime);

interface TrendingPostProps {
  hazard: HazardReport;
}

// Image variable here
const baseUrl = import.meta.env.VITE_IMAGE_BASE_URL || "";

export default function TrendingPostCard({ hazard }: TrendingPostProps) {
  return (
    <>
      <div className="h-full">
        <div
          // key={post.id}
          className="w-[350px] min-w-[350px] bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transition"
        >
          <div className="w-[90%]  mx-auto flex items-center mb-4">
            <div className="flex items-center space-x-3">
              <img src="#" alt="avatar" className="w-12 h-12 rounded-full bg-red-300" />
              <div>
                <p className="text-md font-semibold text-gray-800">{hazard.user?.firstName ?? "Anonymous"} {hazard.user?.lastName}</p>
                <p
                  className="text-sm text-gray-500"
                  title={dayjs(hazard.createdAt).format("MMM D, YYYY h:mm A")}
                >
                  {dayjs(hazard.createdAt).fromNow()}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-700 mb-4">{hazard.description}
            </p>
            <div className="flex items-center gap-x-[1rem] overflow-y-hidden">
              {hazard.images && hazard.images.length > 0 ? (
                <div className="flex gap-2">
                  {hazard.images.map((img, idx) => (
                    <img
                    key={idx}
                    src={`${baseUrl}/${img}`} // prepend backend URL
                    alt={`Hazard ${hazard.title} image ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  ))}
                </div>
              ) : (
                <div className="w-full h-48 rounded-xl bg-gray-200 items-center justify-center hidden">
                  <span className="text-gray-500 text-sm">No image</span>
                </div>
              )}

              {/* <img
                src="#"
                alt=""
                className="w-full h-40 object-cover rounded-xl mb-4 bg-blue-400"
              /> */}
              {/* {post.postImage1 && (
                    <img
                      src={post.postImage1}
                      alt={post.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  {post.postImage2 && (
                    <img
                      src={post.postImage2}
                      alt={post.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )} */}
            </div>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <span className="flex items-center gap-2">
              <CircleArrowUp/> upvote
            </span>
            {/* <span className="flex items-center gap-2">
              <FaRegCommentDots /> comment
            </span> */}
            <span className="flex items-center gap-2">
              <CiShare2 /> share
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
