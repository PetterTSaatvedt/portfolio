import React from "react";
import { Avatar, Heading, VStack, Mark, defineStyle, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const EducationSection = () => {

    return (
        <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#0c1821"
        color="#cad2c5"
        >
            <VStack spacing={8}>
                <Text>Education</Text>
            </VStack>
        </FullScreenSection>
    )
}

export default EducationSection;