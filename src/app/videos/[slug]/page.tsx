'use client'

import Button from '@/components/Button/Button'
import { useState } from 'react'

export default function VideoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quam orci, accumsan ut bibendum in, tincidunt sagittis mi. Vivamus vitae mauris convallis, efficitur ante eu, interdum nulla. Suspendisse sit amet sagittis erat. Quisque ultrices nulla et aliquet rutrum.'
  )
  const [tempText, setTempText] = useState('')
  const [originalText] = useState(editText)
  const [isUpdated, setIsUpdated] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleEdit = () => {
    setTempText(editText)
    setIsEditing(true)
  }

  const handleSave = () => {
    setEditText(tempText)
    setIsEditing(false)
    setIsUpdated(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleRevert = () => {
    setEditText(originalText)
    setIsUpdated(false)
  }

  const handleUpdate = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsUpdated(true)
    }, 2000)
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-10">Video 1</h1>
      <div className="flex flex-col md:flex-row gap-10 ">
        <div className="relative  h-[500px] md:h-[766px] w-full md:w-[50%] aspect-video bg-black mb-6">
          {loading ? (
            <div className="animate-pulse bg-gray-300 h-full w-full rounded-md" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-opacity"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-black border-b-[12px] border-b-transparent ml-2" />
              </button>
            </div>
          )}
          {!loading && (
            <div className="absolute left-0 z-30 bottom-8 right-0 mx-5 h-2 bg-gray-500">
              <div className="w-1/3 h-full bg-white" />
            </div>
          )}
        </div>

        <div className="space-y-4 mb-6 w-full md:w-[50%]">
          <div className="w-full h-auto space-y-7">
            {loading ? (
              <div className="animate-pulse w-full space-y-4 flex justify-center items-center  h-[800px]">
                <h1 className="text-2xl w-14 font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Updating your video...
                </h1>
              </div>
            ) : (
              <>
                <p className="text-[#959595]  text-sm leading-7 lg:text-[21px] font-normal ">
                  {editText}
                </p>
                <div className={`flex items-start gap-2  bg-gray-100 p-3 rounded-md ${isEditing ? " border-2 border-black" : ""}`}>
                  {isEditing ? (
                    <div className={`flex w-full gap-2 justify-between items-start `}>
                      <textarea
                        value={tempText}
                        onChange={(e) => setTempText(e.target.value)}
                        className="w-full min-h-[150px] p-3  text-sm text-balance break-words leading-7 lg:text-[21px] font-bold border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="typing a new script here"
                      />
                      <div className="flex flex-col h-full items-start  gap-2">
                        <Button
                          variant="primary"
                          size="sm"
                          className="rounded-full shadow-lg font-normal text-sm  w-16 h-6 "
                          onClick={handleSave}
                        >
                          Save
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="rounded-full shadow-lg font-normal text-sm  w-16 h-6 "
                          onClick={handleCancel}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-2 3xl:max-w-[100%]">
                        <p className="flex-1  text-sm leading-7 lg:text-[21px] font-medium">{editText}</p>
                        <Button
                          variant="primary"
                          size="sm"
                          className="rounded-full shadow-lg font-normal text-sm  w-16 h-6 "
                          onClick={handleEdit}
                        >
                          Edit
                        </Button>
                      </div>
                      {isUpdated && (
                        <p className="text-[#007AFF] text-sm text-right">updated</p>
                      )}
                    </div>
                  )}
                </div>

                <p className="text-[#959595] text-sm leading-7 lg:text-[21px] font-normal ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quam orci, accumsan ut bibendum in, tincidunt sagittis mi. Vivamus vitae mauris convallis, efficitur ante eu, interdum nulla. Suspendisse sit amet sagittis erat. Quisque ultrices nulla et aliquet rutrum.
                </p>

                <p className="text-[#959595] text-sm leading-7 lg:text-[21px] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quam orci, accumsan ut bibendum in, tincidunt sagittis mi. Vivamus vitae mauris convallis, efficitur ante eu, interdum nulla. Suspendisse sit amet sagittis erat. Quisque ultrices nulla et aliquet rutrum.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {!loading && (
        <div className="flex w-full justify-end gap-3">
          {isUpdated && (
            <Button
              variant="danger"
              size="lg"
              className={`rounded-full  font-normal text-sm shadow-lg`}
              onClick={handleRevert}
            >
              Revert Edits
            </Button>
          )}
          <Button
            variant={isUpdated ? "primary" : "secondary"}
            size="lg"
            className={`rounded-full font-normal text-sm shadow-lg ${isUpdated ? "cursor-pointer" : "cursor-not-allowed"}`}
            onClick={() => {
              handleUpdate();
              setIsUpdated(false); 
            }}
          >
            Update Video
          </Button>
        </div>
      )}

    </div>
  )
}


