"use client";

import HomePage from "./HomePage/page";
import { useAuth } from "@/context/GlobalContect";
import VideosDashboard from "@/components/Dashboard/Dashboard";
export default function Home() {
  const { isUserLoggedIn } = useAuth() || {};
  return <>{isUserLoggedIn ? <VideosDashboard /> : <HomePage />}</>;
}
