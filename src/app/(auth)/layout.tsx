import { Stack } from "@chakra-ui/react";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <Stack alignItems={'center'} justify={'center'} height={'100vh'}>{children}</Stack>;
};

export default layout;
