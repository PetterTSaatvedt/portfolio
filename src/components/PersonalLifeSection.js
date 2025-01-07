import React from "react";
import { Heading, VStack, HStack, Text, Divider, Box, Image, Stack, StackDivider } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const PersonalLifeSection = () => {
    return (
        <FullScreenSection
        p={{base: 8, md: 12}}
        spacing={{base: 6, md: 12}}
        alignItems="center"
        isDarkBackground
        backgroundColor="#2f3e46"
        color="#cad2c5"
        id="personal-section"
        >
            <Heading as="h1" size="xl">Hvem er så jeg?</Heading>
            <Stack direction={{base: "column", md: "row"}} spacing={{base: 4, md: 8}} width="100%" alignItems="center" justifyContent="center">
                <Image src={require('../images/personal1.jpg')} width={{md: 60, lg: 80}} rounded="xl" alt="" display={{base: "none", md: "block"}}/>
                <VStack alignItems="left" height="100%">
                    <Heading as="h2" size="xl" color="#84a98c" fontStyle="italic">Om meg</Heading>
                    <Text fontWeight="light" fontSize="md">
                        Mitt navn er Petter Torst Saatvedt, jeg er 25 år, og er født og oppvokst i Stavanger. I 2019 flyttet jeg til Oslo, hvor jeg jobbet
                        i ett år, før jeg så i 2020 startet på bachelorstudie i informasjonsteknologi. Siden den gang har jeg fullført bachelorgraden
                        min, og gått videre til et toårig masterprogram som jeg etter planen blir ferdig med til sommeren 2025.
                    </Text>
                    <Text fontWeight="light" fontSize="md">
                        Som person vil jeg beskrive meg selv som en omgjengelig og positiv type. Jeg er omsorgsfull, og ønsker alltid å bidra til å skape gode opplevelser for menneskene rundt meg.
                        Ellers vil jeg beskrive meg selv som strukturert, ansvarsfull og pålitelig, noe som har blitt forsterket gjennom studietiden hvor jeg i stor grad selv har stått for det mye av planlegging, oppsett
                        og gjennomføring av læring knyttet til pensum og eksamener, som har resultert i gode akademiske resultater.
                    </Text>
                </VStack>
            </Stack>
            <HStack width="100%" maxWidth="100%" height={{base: "15vh", sm: "25vh"}} display={{base: "flex", md: "none"}} spacing={2} justifyContent="center" overflow="hidden">
                <Image src={require('../images/personal1.jpg')} flex="1" objectFit="cover" maxH="100%" rounded="xl" alt="" />
                <Image src={require('../images/personal2.jpg')} flex="2" objectFit="cover" maxH="100%" rounded="xl" alt="" />
            </HStack>
            <Stack direction={{base: "column", md: "row"}} spacing={{base: 4, md: 8}} width="100%" alignItems="center" justifyContent="center">
                <VStack alignItems="left" height="100%">
                    <Heading as="h2" size="xl" color="#84a98c" fontStyle="italic">Interesser</Heading>
                    <Text fontWeight="light" fontSize="md">
                        Jeg er over gjennomsnittet glad i fotball, og derfor går mye av tiden min til å følge med på det som vises av fotball på skjermen,
                        eller til å selv spille her i Oslos gjeveste turnering: 8. divisjon ⚽️ Ellers er jeg generelt sett glad i å være fysisk aktiv, så i tillegg til fotballen holder jeg meg aktiv gjennom løping og 
                        nå nylig gjennom padel 🎾 På vinteren er det ski som gjelder, både alpint og langrenn!
                    </Text>
                    <Text fontWeight="light" fontSize="md">
                        Selv om playstationen har begynt å samle litt støv de siste semesterene er jeg fortsatt ikke fremmed for litt gaming en gang i blant, men spillinteressen (og konkurranseinstinktet) får i større grad utløp gjennom brettspill med venner og familie! 🎮🎲
                    </Text>
                </VStack>
                <Image src={require('../images/personal2.jpg')} height={{md: 60, lg: 80}} display={{base: "none", md: "block"}}rounded="xl" alt=""/>
            </Stack>
        </FullScreenSection>
    );
}

export default PersonalLifeSection;