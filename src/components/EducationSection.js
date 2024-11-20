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
                divider={<StackDivider borderColor="#2f3e46" />}
            >
                <Box>
                    <VStack>
                        <HStack justifyContent="space-between" width="100%" spacing={8}>
                            <Heading as="h2" size="lg">{firstStudyName} <br />
                                <Heading as="h2" size="lg" color="#84a98c">{firstSchoolName}</Heading>
                            </Heading>
                            <Image src={require("../images/kristiania.png")} h="60px" rounded="md" />
                        </HStack>
                        <HStack spacing={4} justifyContent="start" width="100%" divider={<StackDivider borderColor="#2f3e46"/>}>
                            <Text fontSize="xl" fontStyle="italic" fontWeight="bold">Bachelor</Text>
                            <Text fontSize="lg">2020 - 2023</Text>
                        </HStack>
                    </VStack>
                </Box>
                <Box>
                    <VStack alignItems="start">
                        <HStack justifyContent="space-between" width="100%" spacing={8}>
                            <Heading as="h2" size="lg">{secondStudyName} <br /> 
                                <Heading as="h2" size="lg" color="#84a98c">{secondSchoolName}</Heading>
                            </Heading>
                            <Image src={require("../images/oslomet.png")} h="60px" rounded="md" />
                        </HStack>
                        <HStack spacing={4} divider={<StackDivider borderColor="#2f3e46"/>}>
                            <Text fontSize="xl" fontStyle="italic" fontWeight="bold">Master</Text>
                            <Text fontSize="lg">2023 - 2025</Text>
                            <Text fontSize="lg">Universell utforming av IKT</Text>
                        </HStack>
                    </VStack>
                </Box>
            </Stack>
        </FullScreenSection>
    )
}

export default EducationSection;