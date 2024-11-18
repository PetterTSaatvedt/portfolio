import React from "react";
import { Avatar, Heading, VStack, Mark, defineStyle, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const TechStackAndCertificatesSection = () => {

    return (
        <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2f3e46"
        color="#cad2c5"
        >
            <VStack spacing={8}>
                <Text>Tech Stack & Certificates</Text>
            </VStack>
        </FullScreenSection>
    )
}

export default TechStackAndCertificatesSection;