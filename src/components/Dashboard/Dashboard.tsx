"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import { parseJsonString } from "@/utils/Utils";

type VideoStatus = "generating" | "completed";

interface Video {
  id: number;
  status: VideoStatus;
  name: string;
  createTime: string;
  slug: string;
  scenesData:
    | string
    | {
        merge: {
          videoDownloadURL: string;
        };
      };
}

function getCurrentTimeStr(): string {
  const createDate = new Date(Date.now());
  // return createDate.toLocaleString()
  return `${createDate.getFullYear()}-${String(
    createDate.getMonth() + 1
  ).padStart(2, "0")}-${String(createDate.getDate()).padStart(2, "0")} ${String(
    createDate.getHours()
  ).padStart(2, "0")}:${String(createDate.getMinutes()).padStart(
    2,
    "0"
  )}:${String(createDate.getSeconds()).padStart(2, "0")}`;
}

function newVideo(
  id: number,
  status: VideoStatus,
  name: string,
  createTimeStr: string,
  slug: string,
  scenesData: string = ""
): Video {
  return {
    id: id,
    status: status,
    name: name,
    createTime: createTimeStr,
    slug: slug,
    scenesData: scenesData,
  };
}

export default function VideosDashboard() {
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [previousVideos, setPreviousVideos] = useState<Video[]>([]);
  const [requireFetchVideos, setRequireFetchVideos] = useState<boolean>(false);
  const router = useRouter();

  const getEmail = (): string | null => {
    return localStorage.getItem("user_email");
  };

  const handleCreateVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const email = getEmail();

    if (!email) {
      toast.error("Email not found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://api.anyad.app/v1/runzapier",
        {
          user_url: url,
          email,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        toast.success("Video generation session started successfully!");

        // Add a placeholder while waiting for the next fetchVideos call
        setPreviousVideos((prevVideos) => {
          const id = prevVideos.length + 1;
          const name = url;
          const slug = `video-${prevVideos.length + 1}`;

          return [
            newVideo(id, "generating", name, getCurrentTimeStr(), slug),
            ...prevVideos,
          ];
        });
        setRequireFetchVideos(true);
      }
    } catch (err: any) {
      if (err.response?.status === 400) {
        toast.error("Invalid URL. Please check and try again.");
        setError("Invalid URL. Please check and try again.");
      } else {
        toast.error("Something went wrong. Please try again later.");
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchVideos = useCallback(async () => {
    const email = getEmail();
    if (!email) {
      toast.error("Email not found. Please log in.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.anyad.app/v1/getsessions",
        {
          email,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        const sessions = response.data;
        const formattedVideos: any = sessions.map(
          (session: any, index: number) => {
            return newVideo(
              index + 1,
              session.status === "scenes_merged" ? "completed" : "generating",
              session.name,
              session.start_time,
              session.id,
              parseJsonString(session.scenes_data)
            );
          }
        );

        formattedVideos.sort((a: any, b: any) => {
          if (a.createTime < b.createTime) {
            return 1;
          }
          if (a.createTime === b.createTime) {
            return 0;
          }
          return -1;
        });

        setPreviousVideos(formattedVideos);
      }
    } catch (err) {
      toast.error("Failed to fetch previous videos.");
    }
  }, []); // Dependencies for fetchVideos can be added here if required

  useEffect(() => {
    fetchVideos();

    const frequencySeconds = 10;
    const interval = setInterval(() => {
      console.debug("Video List Page refresh");
      fetchVideos();
    }, frequencySeconds * 1000);

    return () => clearInterval(interval);
  }, [fetchVideos]);

  useEffect(() => {
    if (requireFetchVideos) {
      fetchVideos();
      setRequireFetchVideos(false);
    }
  }, [fetchVideos, requireFetchVideos]);

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <h1 className="text-2xl font-bold ">Your Videos</h1>

      <div className="bg-white max-w-xl mx-auto  rounded-lg shadow-sm border p-4 my-8 md:my-16">
        <h2 className="text-sm font-medium mb-4">Generate a new video</h2>
        <form onSubmit={handleCreateVideo} className="space-y-4">
          <div>
            <label htmlFor="url" className="text-sm text-gray-600 mb-2 block">
              Website URL
            </label>
            <input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="anyed.app"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="rounded-md shadow-lg mt-6 w-full bg-indigo-600 text-white py-2 px-4 hover:bg-indigo-500 disabled:opacity-50"
          >
            {loading ? "Generating Video..." : "Generate Video (1 Credit)"}
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 max-w-4xl mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {previousVideos.map((video, index) => (
          <div key={video.id} className="flex flex-col items-center">
            <div className="relative aspect-video bg-black rounded-lg flex items-center justify-center h-[500px] w-full">
              {video.status === "generating" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="animate-spin h-8 w-8 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              )}
              {video.status === "completed" && (
                <video
                  src={
                    typeof video.scenesData === "object"
                      ? video.scenesData.merge.videoDownloadURL
                      : ""
                  }
                  controls
                  className="w-full h-full"
                />
              )}
            </div>

            <div
              className={`mt-2 text-center ${
                video.status === "generating"
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={() => {
                if (video.status !== "generating") {
                  const selectedVideoData = previousVideos.find(
                    (prev) => prev.id === video.id
                  );

                  if (selectedVideoData) {
                    router.push(`/video/${video.slug}`);
                  }
                }
              }}
            >
              <h1 className="text-black hover:underline text-xl font-semibold">
                {video.name ? video.name : "<unknown url>"}
                <br />
                {video.createTime}
                <br />
                {video.status === "generating" &&
                  " (generating in a few minutes)"}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
