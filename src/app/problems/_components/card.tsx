"use client";

import { Card, CardBody, CardDescription, Heading, Stack } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { abort } from "process"
const StudyCard = () => {
    return (
        <Flex display={"flex"} gap={"1rem"}>

            <Card.Root size="sm" height={"100px"} bgColor={"#282828"}>
                <Flex justifyContent={"start"} alignItems={"start"}>
                    <Card.Header width={"30%"}>
                        <img height={"100%"} width={"100%"} src="https://assets.leetcode.com/study_plan_v2/top-interview-150/cover" alt="" />
                    </Card.Header>

                    <Card.Body width={"70%"}>
                        <Heading size="sm" mb={"1"}> Top Interview </Heading>
                        {/* <Card.Body fontSize={"sm"} color="fg.muted" > */}
                        <CardDescription fontSize={"sm"}>Must Do list for interview prepration</CardDescription>
                        {/* </Card.Body> */}
                    </Card.Body>
                </Flex>
            </Card.Root>

            <Card.Root size="sm" height={"100px"} bgColor={"#282828"}>
                <Flex justifyContent={"start"} alignItems={"start"}>
                    <Card.Header width={"30%"}>
                        <img height={"100%"} width={"100%"} src="https://assets.leetcode.com/study_plan_v2/leetcode-75/cover" alt="" />
                    </Card.Header>

                    <Card.Body width={"70%"}>
                        <Heading size="sm" mb={"1"}> Top Interview </Heading>
                        {/* <Card.Body fontSize={"sm"} color="fg.muted" > */}
                        <CardDescription fontSize={"sm"}>Must Do list for interview prepration</CardDescription>
                        {/* </Card.Body> */}
                    </Card.Body>
                </Flex>
            </Card.Root>

            <Card.Root size="sm" height={"100px"} bgColor={"#282828"}>
                <Flex justifyContent={"start"} alignItems={"start"}>
                    <Card.Header width={"30%"}>
                        <img height={"100%"} width={"100%"} src="https://assets.leetcode.com/study_plan_v2/top-sql-50/cover" alt="" />
                    </Card.Header>

                    <Card.Body width={"70%"}>
                        <Heading size="sm" mb={"1"}> Top Interview </Heading>
                        {/* <Card.Body fontSize={"sm"} color="fg.muted" > */}
                        <CardDescription fontSize={"sm"}>Must Do list for interview prepration</CardDescription>
                        {/* </Card.Body> */}
                    </Card.Body>
                </Flex>
            </Card.Root>
        </Flex>
    )
}
export default StudyCard