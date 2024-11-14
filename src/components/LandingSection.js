import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Petter!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2f3e46"
    color="#cad2c5"
  >
    <VStack spacing={8}>
      <VStack spacing={4}>
        <Avatar src="https://i.pravatar.cc/150?img=56" size="xl"></Avatar>
        <Heading size="xs">{greeting}</Heading>
      </VStack>
      <VStack>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    </VStack>
    
  </FullScreenSection>
);

export default LandingSection;