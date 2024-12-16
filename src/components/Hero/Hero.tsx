import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
const images = [
  {
    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
    alt: "Unsplash Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80",
    alt: "Unsplash Image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80",
    alt: "Unsplash Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80",
    alt: "Unsplash Image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
    alt: "Unsplash Image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
    alt: "Unsplash Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
    alt: "Unsplash Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80",
    alt: "Unsplash Image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80",
    alt: "Unsplash Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80",
    alt: "Unsplash Image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
    alt: "Unsplash Image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
    alt: "Unsplash Image 1",
  },
];

const Hero = () => {
  return (
    <main>
      <div className="relative isolate">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
            className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-10 lg:mx-0 lg:flex  lg:max-w-none lg:items-center">
              <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-sm">
                <h1 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Professional AI Ads videos in minutes
                </h1>
                <p className="mt-5 text-md font-normal text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-96">
                  Elevate your online presence with Ads Video Generated by Our
                  AI
                </p>
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-md shadow-lg mt-6 "
                // onClick={() => alert('Custom Button')}
                >
                  Get Your Ads Video
                </Button>
                <p className="mt-6 text-md font-normal text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-96">
                  Trusted by professional worldwide. Quick and efficient
                </p>

                <p className="mt-6 text-md font-medium  text-gray-500">
                  Already a member?{" "}
                  <Link
                    href="/register"
                    className="text-md font-semibold text-[#007AFF] hover:text-indigo-500"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
              <div className="max-lg:mt-5">
                <div className="flex flex-col xl:flex-row gap-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full md:w-auto">
                    {images.slice(0, 6).map((image, index) => (
                      <div key={index} className="w-full">
                        <div className="relative">
                          <Image
                            alt={image.alt}
                            width={100}
                            height={100}
                            src={image.src}
                            className="h-36 w-full rounded-[16px] bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full md:w-auto">
                    {images.slice(6, 12).map((image, index) => (
                      <div key={index} className="w-full">
                        <div className="relative">
                          <Image
                            alt={image.alt}
                            width={100}
                            height={100}
                            src={image.src}
                            className="h-36 w-full rounded-[16px] bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

