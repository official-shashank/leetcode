"use client";

import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Stack,
} from "@chakra-ui/react";
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
import React from "react";

import { IoMdMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";


const NavbarIn = () => {
  const { user } = useUser();
  return (
    <HStack
      height={"5rem"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"90%"}
      margin={"auto"}
    >
      <HStack>
        <Image
          src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
          width={"3.5rem"}
        ></Image>
        <HStack display={["none", "none", "flex", "flex", "flex"]} gap={"1rem"}>
          <Link href="/explore">
            <Button
              variant={"plain"}
              _hover={{
                bg: "white",
                textDecoration: "none",

                color: "black",

                transition: "all 0.3s ease-in-out",
              }}
              color={"white"}
            >
              Explore
            </Button>
          </Link>
          <Link href="/problems">
            <Button
              variant={"plain"}
              _hover={{
                bg: "white",
                textDecoration: "none",

                color: "black",

                transition: "all 0.3s ease-in-out",
              }}
              color={"white"}
            >
              Problems
            </Button>
          </Link>
          <Link href="/contests">
            <Button
              variant={"plain"}
              _hover={{
                bg: "white",
                textDecoration: "none",

                color: "black",

                transition: "all 0.3s ease-in-out",
              }}
              color={"white"}
            >
              Contest
            </Button>
          </Link>
          <Link href="/discuss">
            <Button
              variant={"plain"}
              _hover={{
                bg: "white",
                textDecoration: "none",

                color: "black",

                transition: "all 0.3s ease-in-out",
              }}
              color={"white"}
            >
              Discuss
            </Button>
          </Link>
          <MenuRoot positioning={{ placement: "bottom-start" }}>
            <MenuTrigger asChild>
              <Button variant={"plain"} size="sm">
                 Interviews <FaChevronDown />
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="new-txt">New Text File</MenuItem>
              <MenuItem value="new-file">New File...</MenuItem>
              
            </MenuContent>
          </MenuRoot>
          <MenuRoot positioning={{ placement: "bottom-start" }}>
            <MenuTrigger asChild>
              <Button variant={"plain"} color={'yellow.500'} size="sm">
                 Store <FaChevronDown />
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="new-txt">New Text File</MenuItem>
              <MenuItem value="new-file">New File...</MenuItem>
              
            </MenuContent>
          </MenuRoot>
        </HStack>
      </HStack>
      <HStack>
        {!user && (
          <HStack>
            <Link href={"/sign-up"}>
              <Button variant={"outline"}>Register</Button>
            </Link>
            <Link href={"/sign-in"}>
              <Button variant={"outline"}>Login</Button>
            </Link>
          </HStack>
        )}
        <Link href="/premium">
          <Button
            variant={"plain"}
            _hover={{
              bg: "yellow.500",
              textDecoration: "none",
              color: "black",
              transition: "all 0.3s ease-in-out",
            }}
            color={"yellow.500"}
          >
            Premium
          </Button>
        </Link>
        {user ? (
          <UserButton />
        ) : (
          <Link href="/sign-in">
            <Button
              variant={"plain"}
              _hover={{
                bg: "white",
                textDecoration: "none",
                padding: "0.5rem",
                color: "black",
                borderRadius: "1rem",
                transition: "all 0.3s ease-in-out",
              }}
              color={"white"}
            >
              Sign in
            </Button>
          </Link>
        )}
      </HStack>
      <DrawerRoot>
        <DrawerBackdrop />
        <DrawerTrigger
          asChild
          display={["block", "block", "none", "none", "none"]}
        >
          <Button variant="outline" size="sm">
            <IoMdMenu />
          </Button>
        </DrawerTrigger>
        <DrawerContent offset="4" rounded="md">
          <DrawerHeader>
            {!user ? (
              <HStack justify={"center"} gap={"1rem"}>
                <Link href={"/sign-in"}>
                  <Button variant={"outline"}>Login</Button>
                </Link>
                <Link href={"/sign-up"}>
                  <Button variant={"outline"}>Register</Button>
                </Link>
              </HStack>
            ) : (
              <Stack>
                <Stack justify={"center"} alignItems={"center"}>
                  <Image
                    src={user.imageUrl}
                    width={"3rem"}
                    borderRadius={"full"}
                  ></Image>
                  <Box position={"absolute"} scale={1.2}>
                    <UserButton />
                  </Box>
                </Stack>
                <Heading size={"sm"} textAlign={"center"}>
                  {user?.fullName}
                </Heading>
                <Heading size={"xs"} textAlign={"center"} color={"teal"}>
                  {user?.primaryEmailAddress?.emailAddress}
                </Heading>
              </Stack>
            )}
          </DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerActionTrigger>
            <Button>Save</Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </HStack>
  );
};

export default NavbarIn;
