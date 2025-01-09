import React from "react";
import {Box, Flex, Heading, HStack, Text, VStack} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <VStack
          margin="0 auto"
          p={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
        >
          <Heading as="h2" fontSize="2xl" color="#84a98c" fontStyle="italic">Kontaktinfo</Heading>
          <Text fontSize="sm">Mail: <a href="mailto:pettertorst@hotmail.no">pettertorst@hotmail.no</a></Text>
          <Text fontSize="sm">Tlf: 40760686</Text>
          <Text fontSize="sm">0271 Oslo, Norge</Text>
        </VStack>
      </footer>
    </Box>
  );
};
export default Footer;