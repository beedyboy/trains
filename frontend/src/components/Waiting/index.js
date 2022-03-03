import React from "react";
import { Skeleton, Stack } from "@chakra-ui/react";

const Waiting = ({}) => {
  return (
    <>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </>
  );
};
 

export default Waiting;
