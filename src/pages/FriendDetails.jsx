import { icons, MessageSquareText, PhoneCall, Video } from "lucide-react";
import { use, useContext } from "react";
import { useParams } from "react-router";
import { TimeLineContext } from "../contexts/TimeLineContext";
import PhoneImg from "../assets/call.png";
import TextImg from "../assets/text.png";
import VideoImg from "../assets/video.png";
import MeetupImg from "../assets/meetup.png";
import { format } from "date-fns";
import { toast } from "react-toastify";

const fetchPromise = fetch("/friends.json").then((res) => res.json());
const FriendDetails = () => {
  const friends = use(fetchPromise);

  const { id } = useParams();
  const expectedData = friends.find((item) => item.id === parseInt(id));
  const {
    name,
    bio,
    days_since_contact,
    email,
    goal,
    next_due_date,
    picture,
    status,
    tags,
  } = expectedData;

  const { setTimeLineData, timeLineData } = useContext(TimeLineContext);

  return (
    <div className=" bg-[#f8fafc] p-10">
      <div className=" w-10/12 mx-auto flex justify-between ">
        <div className="left">
          <div className="shadow bg-white rounded-lg p-4 flex flex-col justify-center items-center space-y-2">
            <img className="rounded-full" src={picture} alt={""} />
            <h1 className="text-[20px] font-semibold">{name}</h1>
            <span
              className={`${status == "overdue" ? "bg-red-500 text-white px-2 py-1 rounded-full font-medium mt-1" : status == "on track" ? "bg-green-500 text-white px-2 py-1 rounded-full font-medium mt-1" : "bg-yellow-500 text-white px-2 py-1 rounded-full font-medium mt-1"}`}
            >
              {status}
            </span>
            <div>
              {tags.map((tag, ind) => (
                <span
                  key={ind}
                  className="px-1 py-1 mx-2 text-[14px]   bg-green-200 rounded-3xl font-medium"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
            <p className="text-gray-600 font-medium">"{bio}"</p>
            <span className="text-gray-600">Preferred:{email}</span>
          </div>

          <div className="btn-container flex flex-col gap-2 my-5">
            <button className="btn  bg-white ">Snooze 2 Weeks</button>
            <button className="btn  bg-white ">Archive</button>
            <button className="btn  bg-white ">Delete</button>
          </div>
        </div>
        <div className="right">
          <div className="flex gap-12">
            <div className="shadow p-6 rounded-lg bg-white text-center">
              <h1 className="text-3xl font-semibold text-[#244D3F]">
                {days_since_contact}
              </h1>
              <p>Days Since Contact</p>
            </div>
            <div className="shadow p-6 px-10 rounded-lg bg-white text-center">
              <h1 className="text-3xl font-semibold text-[#244D3F]">{goal}</h1>
              <p>Goal(Days)</p>
            </div>
            <div className="shadow p-6 rounded-lg bg-white text-center">
              <h1 className="text-3xl font-semibold text-[#244D3F]">
                {next_due_date}
              </h1>
              <p>Next Due</p>
            </div>
          </div>
          <div
            id="relationship-goal-section"
            className=" shadow bg-white p-6 rounded-lg mt-6"
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl text-[#244D3F]">
                Relationship Goal
              </h1>
              <button className="btn btn-outline">Edit</button>
            </div>
            <h1 className="text-xl">
              Connect every <span className="font-semibold "> {goal} days</span>
            </h1>
          </div>

          <div className="quick-check-In-section bg-white my-3 p-5 rounded-xl shadow mt-5">
            <h1 className="font-medium text-[20px] text-[#244D3F] mb-2">
              Quick Check-In
            </h1>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  (toast.success(`Call with ${name}`),
                    setTimeLineData([
                      ...timeLineData,
                      {
                        text: (
                          <>
                            <span className="text-lg font-semibold">Call</span>{" "}
                            with {name}
                          </>
                        ),
                        icon: PhoneImg,
                        type: "call",
                        date: format(new Date(), "MMMM d, yyyy"),
                      },
                    ]));
                }}
                className="bg-gray-200 border-2 border-gray-200 px-20 py-3  rounded-lg cursor-pointer"
              >
                <span>
                  <PhoneCall />
                </span>
                <h1>Call</h1>
              </button>
              <button
                onClick={() => {
                  toast.success(`Text with ${name}`);
                  setTimeLineData([
                    ...timeLineData,
                    {
                      text: (
                        <>
                          <span className="font-semibold text-lg">Text</span>{" "}
                          with {name}
                        </>
                      ),
                      icon: TextImg,
                      type: "text",
                      date: format(new Date(), "MMMM d, yyyy"),
                    },
                  ]);
                }}
                className="bg-gray-200 border-2 border-gray-200 px-20 py-3  rounded-lg cursor-pointer"
              >
                <span>
                  <MessageSquareText />
                </span>
                <h1>Text</h1>
              </button>
              <button
                onClick={() => {
                  toast.success(`Video with ${name}`);
                  setTimeLineData([
                    ...timeLineData,
                    {
                      text: (
                        <>
                          <span className="text-lg font-semibold">Video</span>{" "}
                          with {name}
                        </>
                      ),
                      icon: VideoImg,
                      type: "video",
                      date: format(new Date(), "MMMM d, yyyy"),
                    },
                  ]);
                }}
                className="bg-gray-200 border-2 border-gray-200 px-20 py-3  rounded-lg cursor-pointer"
              >
                <span>
                  <Video />
                </span>
                <h1>Video</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
