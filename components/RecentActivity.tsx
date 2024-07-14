"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";

const RecentActivity = () => {
  const [eventData, setEventData] = useState<any[]>([]);
  const [profileData, setProfileData] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch profile data
        const profileData = await fetch(
          `https://api.github.com/users/Sid-80/events`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
              Accept: "application/vnd.github+json",
            },
          }
        ).then((res) => res.json());
        console.log(profileData);
        setEventData([
          profileData[0],
          profileData[1],
          profileData[2],
          profileData[3],
          profileData[4],
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch profile data
        const profileData = await fetch(`https://api.github.com/users/Sid-80`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json",
          },
        }).then((res) => res.json());
        setProfileData(profileData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen relative flex flex-col items-center justify-center">
      <h1 className="uppercase p-14 tracking-[15px] text-center font-extrabold text-gray-400 animate-pulse text-2xl">
        Recent Activity
      </h1>

      {profileData && (
        <Card className="sm:w-[500px]">
          <CardHeader>
            <CardTitle className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Avatar className=" w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]">
                <AvatarImage src={profileData?.avatar_url} alt="@shadcn" />
                <AvatarFallback>Sid-80</AvatarFallback>
              </Avatar>
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full flex flex-col gap-2">
            {eventData.map((event, index) => (
              <div
                className="w-full border bg-secondary border-gray-600 rounded-md p-2 flex gap-2 flex-col"
                key={index}
              >
                <div className="flex gap-2 sm:flex-row flex-col items-center justify-between">
                  <h1 className=" font-bold">Repository : {event.repo.name}</h1>

                  <Badge className="bg-primary dark:text-white text-black">
                    {event.type}
                  </Badge>
                </div>
                <p className=" text-base font-medium text-gray-800 dark:text-gray-400">
                  {" "}
                  Created At:{" "}
                  {new Date(event.created_at).toLocaleString().toString()}{" "}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default RecentActivity;
