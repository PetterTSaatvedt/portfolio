import React from "react";
import { Avatar, Heading, VStack, Mark, defineStyle, Text, HStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hallais👋 Mitt navn er Petter!";
const bio1 = "frontend-utvikler";
const bio2 = "med en interesse for UX og universell utforming!";
const bio3 = "For øyeblikket fullfører jeg en mastergrad i informasjonsteknologi på OsloMet 📚"

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const ringCss = defineStyle({
  outlineWidth: "2px",
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
        <Avatar src={require("../images/landingpicture.jpg")} size="2xl" css={ringCss} />
        <Heading size="sm">{greeting}</Heading>
      </VStack>
      <VStack>
        <Heading>
          Jeg er en {" "}
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
          {" "} spesialisert i React
        </Heading>
        <Heading>{bio2}</Heading>
      </VStack>
      <VStack spacing={8}>
        <Heading size="sm">{bio3}</Heading>
      </VStack>
    </VStack>
    
  </FullScreenSection>
);

export default LandingSection;