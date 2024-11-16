import React from "react";
import { Avatar, Heading, VStack, Mark, defineStyle } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Petter!";
const bio1 = "Frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const ringCss = defineStyle({
  outlineWidth: "1px",
  outlineColor: "#84a98c",
  outlineOffset: "1px",
  outlineStyle: "solid",
})

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
        <Avatar src="https://i.pravatar.cc/150?img=56" size="2xl" css={ringCss}></Avatar>
        <Heading size="xs">{greeting}</Heading>
      </VStack>
      <VStack>
        <Heading>
          A {" "}
          <Mark
              fontStyle="italic"
              color="#84a98c"
              position="relative"
          >
            {bio1}
            <img
              style={{ position: "absolute", left: 0 }}
              src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61c4dc7572d22f05ba26fd34_hero-underline.svg"
              loading="lazy"
              alt=""
            />
          </Mark>
        </Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    </VStack>
    
  </FullScreenSection>
);

export default LandingSection;