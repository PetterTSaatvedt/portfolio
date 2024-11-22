import React from "react";
import { Heading, VStack, HStack, Text, Divider, Box, Image, Stack, StackDivider } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const PersonalLifeSection = () => {
    return (
        <FullScreenSection
        p={{base: 4, md: 12}}
        spacing={12}
        alignItems="center"
        isDarkBackground
        backgroundColor="#2f3e46"
        color="#cad2c5"
        id="personal-section"
        >
            <Heading as="h1" size="xl">Hvem er så jeg?</Heading>
            <HStack spacing={8} width="100%" justifyContent="space-between" alignItems="start">
                <Image src={require('../images/personal1.jpg')} width={{base: 40, md: 60, lg: 80}} rounded="xl" />
                <VStack alignItems="left" height="100%" marginTop={{base: "5px", md: "10px"}}>
                    <Heading as="h2" size="xl" color="#84a98c" fontStyle="italic">Om meg</Heading>
                    <Text fontWeight="light" fontSize={{base: "sm", md: "lg"}}>
                        Mitt navn er Petter Torst Saatvedt, jeg er 25 år, og er født og oppvokst i Stavanger. I 2019 flyttet jeg til Oslo, hvor jeg jobbet
                        i ett år, før jeg så i 2020 startet på bachelorstudie i informasjonsteknologi. Siden den gang har jeg fullført bachelorgraden
                        min, og gått videre til et toårig masterprogram som jeg etter planen blir ferdig med til sommeren 2025.
                    </Text>
                    <Text fontWeight="light" fontSize={{base: "sm", md: "lg"}}>
                    På et personlig plan, vil jeg beskrive meg selv som en omgjengelig og positiv type, som er
                    </Text>
                </VStack>
            </HStack>
            <HStack spacing={8} width="100%" justifyContent="space-between" alignItems="start">
                <VStack alignItems="left" height="100%" marginTop={{base: "5px", md: "10px"}}>
                    <Heading as="h2" size="xl" color="#84a98c" fontStyle="italic">Interesser</Heading>
                    <Text fontWeight="light" fontSize={{base: "sm", md: "lg"}}>
                        Jeg er over gjennomsnittet glad i fotball, og derfor går mye av tiden min til å følge med på det som vises av fotball på skjermen,
                        eller til å selv spille her i Oslos gjeveste turnering: 8. divisjon ⚽️
                    </Text>
                    <Text fontWeight="light" fontSize={{base: "sm", md: "lg"}}>
                        Jeg er generelt sett glad i å være fysisk aktiv, så i tillegg til fotballen holder jeg meg aktiv gjennom løping og 
                        nå nylig gjennom padel 🎾 På vinteren er det ski som gjelder, både alpint og langrenn!
                    </Text>
                    <Text>
                        Jeg er
                    </Text>
                </VStack>
                <Image src={require('../images/profile.jpg')} width={{base: 40, md: 60, lg: 80}} rounded="xl" />
            </HStack> 
        </FullScreenSection>
    );
}

export default PersonalLifeSection;