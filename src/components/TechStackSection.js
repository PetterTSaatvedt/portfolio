import React from "react";
import { Avatar, Heading, VStack, Mark, defineStyle, Text, HStack, Box, SimpleGrid} from "@chakra-ui/react";
import { faReact, faJs, faHtml5, faCss3Alt, faFigma, faVuejs, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullScreenSection from "./FullScreenSection";

const TechStackSection = () => {
    return (
        <FullScreenSection
        p={{base: 8, md: 12}}
        spacing={12}
        alignItems="center"
        isDarkBackground
        backgroundColor="#2f3e46"
        color="#cad2c5"
        id="techstack-section"
        justifyContent="space-between"
        maxWidth="100%"
        >
            <VStack spacing={12} maxWidth="100%">
                <Heading as="h1" size="xl">Tech Stack</Heading>
                <Text maxWidth={{base: "100%", md: "45rem", lg: "50rem"}} textAlign={{base: "left", md: "center"}}>
                    Min nåværende tech stack består hovedsakelig av HTML, CSS, JavaScript og React. Jeg følger nøye med på bransjestandarder for teknologier,
                    og ønsker alltid å tilpasse meg de kontinuerlige forandringene ved å lære meg flere teknologier, og har derfor erfaring med både React og Vue. Samtidig ser jeg som student stor verdi i å 
                    i større grad fokusere på fundamentale teknologier som JavaScript, som gjør det enklere å tilpasse seg bruk av rammeverk som kommer og går. For design og prototyping bruker jeg designverktøyet
                    Figma.
                </Text>
                <Box 
                  position="relative"
                  overflow="hidden"
                  maxWidth={{base: "100%", md: "45rem", lg: "50rem"}}
                >
                  <HStack 
                    className="scroll-content"
                    animation={`scroll 15s linear infinite`}
                    sx={{
                        '@keyframes scroll': {
                            '0%': { transform: 'translateX(0)' },
                            '100%': { transform: 'translateX(-50%)' }
                        },
                        display: 'inline-flex',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                    }}
                  >
                    {[...Array(2)].map((_, i) => (
                      <HStack key={i}>
                        <VStack spacing={1} marginRight="1.5rem">
                          <FontAwesomeIcon icon={faHtml5} size="8x" color="#ff6d41"/>
                          <Text fontSize="sm">HTML5</Text>
                        </VStack>
                        <VStack spacing={1} marginRight="1.5rem">
                          <FontAwesomeIcon icon={faCss3Alt} size="8x" color="#53a7ea" />
                          <Text fontSize="sm">CSS3</Text>
                        </VStack>
                        <VStack spacing={1} marginRight="1.5rem">
                          <FontAwesomeIcon icon={faJs} size="8x" color="#F0DB4F" />
                          <Text fontSize="sm">JavaScript</Text>
                        </VStack>
                        <VStack spacing={1} marginRight="1.5rem">
                          <FontAwesomeIcon icon={faReact} size="8x" color="rgb(88 196 220)"/>
                          <Text fontSize="sm">React</Text>
                        </VStack>
                        <VStack spacing={1} marginRight="1.5rem">
                          <FontAwesomeIcon icon={faVuejs} size="8x" color="#42b883"/>
                          <Text fontSize="sm">Vue</Text>
                        </VStack>
                        <VStack spacing={1} marginRight="1.5rem">
                          <FontAwesomeIcon icon={faFigma} size="8x" color="#a259ff"/>
                          <Text fontSize="sm">Figma</Text>
                        </VStack>
                      </HStack>
                    ))}
                  </HStack>
                </Box>
            </VStack>
        </FullScreenSection>
    )
}

export default TechStackSection;