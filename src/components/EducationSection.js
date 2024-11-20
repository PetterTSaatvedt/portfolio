import React from "react";
import { Avatar, Heading, VStack, HStack, Mark, defineStyle, Text, Divider, Box, Image, Stack, StackDivider } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const EducationSection = () => {
    const firstStudyName = "Frontend- og mobilutvikling";
    const firstSchoolName = "Høyskolen Kristiania";
    const secondStudyName = "Anvendt data- og informasjonsteknologi";
    const secondSchoolName = "OsloMet"

    return (
        <FullScreenSection
        p={8}
        spacing={8}
        alignItems="center"
        isDarkBackground
        backgroundColor="#0c1821"
        color="#cad2c5"
        id="education-section"
        >
            <Heading as="h1" size="xl">Utdanning</Heading>
            <Stack 
                direction={{base: 'column', lg: 'row'}}
                spacing={8}
                divider={<StackDivider p={2} />}
            >
                <Box>
                    <VStack>
                        <HStack spacing={8}>
                            <Heading as="h2" size="lg">{firstStudyName} <br /> {firstSchoolName}</Heading>
                            <Image src={require("../images/kristiania.png")} h="60px" rounded="md" />
                        </HStack>
                        <HStack spacing={16}>
                            <Text fontSize="xl" fontStyle="italic" fontWeight="bold">Bachelor</Text>
                            <Text fontSize="xl">2020 - 2023</Text>
                        </HStack>
                    </VStack>
                </Box>
                <Box>
                    <VStack>
                        <HStack spacing={8}>
                            <Heading as="h2" size="lg">{secondStudyName} <br /> {secondSchoolName}</Heading>
                            <Image src={require("../images/oslomet.png")} h="60px" rounded="md" />
                        </HStack>
                        <HStack spacing={16} justifyContent="start" width="100%">
                            <Text fontSize="xl" fontStyle="italic" fontWeight="bold">Master</Text>
                            <Text fontSize="xl">2023 - 2025</Text>
                        </HStack>
                        <Text>Spesialisering i universell utforming av IKT</Text>
                    </VStack>
                </Box>
            </Stack>
        </FullScreenSection>
    )
}

export default EducationSection;