import React from "react";
import { Avatar, Heading, VStack, HStack, Mark, defineStyle, Text, Divider, Box, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const EducationSection = () => {

    return (
        <FullScreenSection
        p={16}
        spacing={8}
        alignItems="center"
        isDarkBackground
        backgroundColor="#0c1821"
        color="#cad2c5"
        >
            <VStack spacing={8}>
                <Heading as="h1">Utdanning</Heading>
                <HStack>
                    <Box>
                        <VStack>
                            <Heading as="h2" size="lg">Frontend- og mobilutvikling, Høyskolen Kristiania</Heading>
                            <Image src={require("../images/kristiania.png")} h="200px"/>
                        </VStack>
                    </Box>
                    <Divider orientation="vertical" h="300px" p={2}/>
                    <Box>
                        <VStack>
                            <Heading as="h2" size="lg">Anvendt data- og informasjonsteknologi, OsloMet</Heading>
                            <Image src={require("../images/oslomet.png")} h="200px"/>
                        </VStack>
                    </Box>
                </HStack>
            </VStack>
        </FullScreenSection>
    )
}

export default EducationSection;