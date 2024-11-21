import React from "react";
import { Heading, VStack, HStack, Text, Divider, Box, Image, Stack, StackDivider } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const PersonalLifeSection = () => {
    return (
        <FullScreenSection
        p={12}
        spacing={12}
        alignItems="center"
        isDarkBackground
        backgroundColor="#2f3e46"
        color="#cad2c5"
        id="personal-section"
        >
            <Heading as="h1" size="xl">Hvem er så jeg?</Heading>
            <HStack width="80%" spacing={12}>
                <Image src={require('../images/profile.jpg')} h="300px" rounded="lg" />
                <Text fontWeight="light">
                    Mitt navn er Petter, jeg er 25 år, og er født og oppvokst i Stavanger. I 2019 flyttet jeg til Oslo, hvor jeg jobbet
                    i ett år, før jeg så i 2020 startet på bachelorstudie i informasjonsteknologi. Siden da har jeg fullført bachelorgraden
                    min, og gått videre til et toårig masterprogram som jeg blir ferdig med til sommeren 2025. På et personlig plan, vil
                    jeg beskrive meg selv som en omsorgsfull og positiv type
                </Text>
            </HStack>
            
            <Heading as="h2" size="lg">Interesser</Heading>
            
        </FullScreenSection>
    );
}

export default PersonalLifeSection;