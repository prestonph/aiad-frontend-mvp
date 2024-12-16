
import Image from "next/image";

const howItWorksData = {
    heading: "How It Works",
    steps: [
        {
            stepNumber: "1",
            title: "Enter your Landing Page URL",
            images: [
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
            ],
        },
        {
            stepNumber: "2",
            title: "Customize Your Landing Page",
            images: [
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
            ],
        },
        {
            stepNumber: "3",
            title: "Customize Your Landing Page",
            images: [
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
            ],
        },
    ],
};

export default function HowItWorks() {
    return (
        <section className="px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-10">{howItWorksData.heading}</h2>
            {howItWorksData.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="mb-16">
                    <div className="text-center flex items-center flex-col gap-3 sm:gap-2 sm:flex-row justify-center mb-6">
                        <span className="text-[#007AFF] text-3xl  px-[11px]  py-[2px]  font-bold border-2 border-[#007AFF] rounded-full">{step.stepNumber}</span>
                        <span className="text-xl font-semibold ml-2">{step.title}</span>
                    </div>
                    <div className="flex justify-center flex-wrap  gap-4">
                        {step.images.map((image, imgIndex) => (
                            <div
                                key={imgIndex}
                                className="relative h-44 w-full sm:w-40 rounded-xl overflow-hidden shadow-lg"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
