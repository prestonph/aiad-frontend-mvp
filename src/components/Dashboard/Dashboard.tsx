"use client";

import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Video {
  id: number;
  status: "generating" | "completed";
  slug: string;
}

export default function VideosDashboard() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const [videos] = useState<Video[]>([
    { id: 1, status: "generating", slug: "video-1" },
    { id: 2, status: "completed", slug: "video-2" },
    { id: 3, status: "completed", slug: "video-3" },
  ]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <h1 className="text-2xl font-bold ">Your Videos</h1>

      <div className="bg-white max-w-xl mx-auto  rounded-lg shadow-sm border p-4 my-8 md:my-16">
        <h2 className="text-sm font-medium mb-4">Generate a new video</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="rounded-md shadow-lg mt-6 w-full "
            // onClick={() => alert('Custom Button')}
          >
            Generate Video (1 Credit)
          </Button>
        </form>
      </div>

      <div className="grid grid-cols-1 max-w-4xl sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col items-center">
            {/* Video Container */}
            <div className="relative aspect-video bg-black rounded-lg flex items-center justify-center h-96 w-full">
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
            </div>

            <div
              className="mt-2 text-center"
              onClick={() => router.push(`vedios/${video.slug}`)}
            >
              <h1 className="text-black hover:underline text-2xl font-semibold">
                video {video.id}
                <br />
                {video.status === "generating" && " (generating)"}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
