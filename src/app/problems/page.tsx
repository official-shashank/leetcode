"use client";

import { Box, Button, Heading, HStack, Image, Stack } from "@chakra-ui/react";
import { UserButton, useUser } from "@clerk/nextjs";

import Link from "next/link";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaHamburger } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import './problem.css'
import React from 'react'
import StudyCard from "./_components/card";
import Mycalendar from "./_components/calendar";
import { CollapsibleBasic } from "./_components/questionTag";
import TredingCompaines from "./_components/tredingCompaines";
import Pegination from "./_components/pagination";
import Sorting from "./_components/sorting";

const page = () => {
  return (
    <>

      <div className="center">

        <div className="left-side top-img" >
          <HStack gap={'1rem'}>
            <Link href="#">
              <img src="https://assets.leetcode.com/users/images/49479bba-73b3-45d2-9272-99e773d784b2_1687290663.3168745.jpeg" alt="" /></Link>
            <Link href="#">
              <img src="https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png" alt="" /></Link>
            <Link href="#">
              <img src="https://assets.leetcode.com/users/images/b0a08a5c-c575-48f6-9110-b6ae4e011e98_1655746322.579097.png" alt="" /></Link>
          </HStack>

          <div className="study-plan">
            <div className="study-plan-head">
              <h2 className="study_plan_heading">Study Plan</h2>
              <a href="#">Sea all</a>
            </div>
            <div className="row1">
              <HStack my={"20px"} gap={'1rem'}>
                <StudyCard />
              </HStack>
            </div>
            <div className="row2">
              <HStack gap={'1rem'}>
                <StudyCard />
              </HStack>
            </div>
          </div>
          <div className="questionTags">
            <CollapsibleBasic />
          </div>
          <div className="sorting">
            <Sorting/>
          </div>
          <div className="pegination">
            <select name="" id="limit">
              <option value="20">20 / page</option>
              <option value="50">50 / page</option>
              <option value="100">1000 / page</option>
            </select>
            <Pegination />
          </div>
        </div>

        <div className="right-col">
          <div className="calender">
            <Mycalendar />
          </div>
          <div className="tredingCo">
            <TredingCompaines />
          </div>
        </div>
      </div>
    </>
  )
}

export default page