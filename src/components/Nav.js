import React from "react";
import { Box, Text } from "@chakra-ui/core";

export default function Nav() {
  return (
    <div>
     <Box
 position= "absolute"
 w= "1440px"
 h= "140px"
 left= "0px"
 top= "0px"
 
 bg= "#292929"
>
  <Box >
      <Text color={"white"}>My App</Text>
  </Box>
</Box>
    </div>
  );
}