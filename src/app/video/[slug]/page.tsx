/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@/components/Button/Button";

interface Scene {
  background: string;
  s3Key: string;
  script: string;
  sequence: number;
  videoDownloadURL: string;
}

interface MergeData {
  videoDownloadURL: string;
}

interface ScenesData {
  merge: MergeData;
  scenes: Scene[];
}

interface CurrentSession {
  status: string;
  slug: string;
  scenesData: ScenesData;
}

type Params = Promise<{ slug: string }>;

export default function VideoPage({ params }: { params: Params }) {
  const [currentSession, setCurrentSession] = useState<CurrentSession | null>(
    null
  );
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [tempText, setTempText] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isModified, setIsModified] = useState<boolean>(false);

  const fetchSessionData = async () => {
    const email = localStorage.getItem("user_email");
    try {
      const response = await axios.post(
        "https://api.anyad.app/v1/getsessions",
        { email },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        const sessions = response.data.map((session: any, index: number) => ({
          status:
            session.status === "scenes_merged" ? "completed" : "generating",
          slug: session.id,
          id: index,
          scenesData: JSON.parse(session.scenes_data),
        }));

        const { slug } = await params;
        const session = sessions.find((video: any) => video.slug === slug);
        setCurrentSession(session);
      }
    } catch (err) {
      console.error("Failed to fetch session data", err);
    }
  };

  useEffect(() => {
    fetchSessionData();
  }, []);

  const handleEdit = (index: number, script: string) => {
    setEditingIndex(index);
    setTempText(script);
  };

  const handleSave = () => {
    if (currentSession && editingIndex !== null) {
      const updatedScenes = [...currentSession.scenesData.scenes];
      updatedScenes[editingIndex].script = tempText;

      setCurrentSession({
        ...currentSession,
        scenesData: { ...currentSession.scenesData, scenes: updatedScenes },
      });

      setEditingIndex(null);
      setIsModified(true);
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setTempText("");
  };

  const handleUpdate = async () => {
    if (!currentSession) return;

    const email = localStorage.getItem("user_email");
    const { slug } = await params;

    const submitValue = {
      session: slug,
      email: email,
      updates: currentSession.scenesData.scenes.map((scene) => ({
        sceneSequence: scene.sequence,
        newScript: scene.script,
      })),
    };

    setIsUpdating(true);

    try {
      const response = await axios.post(
        "https://api.anyad.app/v1/partialupdate",
        submitValue,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        await fetchSessionData();

        if (currentSession.status === "completed") {
          setIsUpdating(false);
        }

        setIsModified(false);
      } else {
        console.error("Update failed", response.data);
      }
    } catch (error) {
      console.error("Error updating scenes", error);
    } finally {
      setIsUpdating(false);
    }
  };

  if (!currentSession || isUpdating) {
    return (
      <div className="flex justify-center items-center h-screen">
        {isUpdating ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
            <p className="text-xl font-medium mt-4">Updating your video...</p>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }

  const { scenesData } = currentSession;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Video Editor</h1>
      <div className="flex flex-col md:flex-row gap-10 w-full">
        <div className="relative h-[500px] md:h-[700px] bg-black">
          <video
            src={scenesData.merge.videoDownloadURL}
            controls
            className="w-full h-full"
          />
        </div>

        <div className="w-full md:w-[65%] space-y-6">
          {scenesData.scenes.map((scene, index) => (
            <div
              key={scene.sequence}
              className="space-y-2 relative group bg-gray-100 p-4 rounded-md"
            >
              <div className="flex items-center">
                <div className="flex-1">
                  {editingIndex === index ? (
                    <textarea
                      value={tempText}
                      rows={3}
                      onChange={(e) => setTempText(e.target.value)}
                      className="w-full p-2 border rounded-md"
                    />
                  ) : (
                    <p className="text-lg text-gray-700">{scene.script}</p>
                  )}
                </div>

                <div className="ml-4">
                  {editingIndex === index ? (
                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={handleSave}
                        size="sm"
                        className="bg-blue-500 rounded-full hover:bg-blue-600"
                      >
                        Save
                      </Button>
                      <Button
                        onClick={handleCancel}
                        size="sm"
                        className="bg-gray-500 rounded-full hover:bg-gray-600"
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div className="hidden group-hover:block">
                      <Button
                        onClick={() => handleEdit(index, scene.script)}
                        size="sm"
                        className="rounded-full bg-blue-500 hover:bg-blue-600"
                      >
                        Edit
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8">
        {isModified && (
          <Button
            onClick={fetchSessionData}
            size="sm"
            className="bg-red-500 rounded-full hover:bg-red-600"
          >
            Revert Edits
          </Button>
        )}
        <Button
          onClick={handleUpdate}
          className="bg-blue-500 rounded-full hover:bg-blue-600"
          disabled={!isModified}
        >
          Update Video
        </Button>
      </div>
    </div>
  );
}
