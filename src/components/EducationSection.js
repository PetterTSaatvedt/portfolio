import React from "react";
import { Avatar, Heading, VStack, HStack, Mark, defineStyle, Text, Divider, Box, Image, Stack, StackDivider } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const EducationSection = () => {
    const firstStudyName = "Informasjonsteknologi";
    const firstSchoolName = "Høyskolen Kristiania";
    const secondStudyName = "Anvendt data- og informasjonsteknologi";
    const secondSchoolName = "OsloMet"

    return (
        <FullScreenSection
        p={{base: 8, md: 12}}
        spacing={12}
        alignItems="center"
        isDarkBackground
        backgroundColor="#0c1821"
        color="#cad2c5"
        id="education-section"
        >
            <Heading as="h1" size="xl">Utdanning</Heading>
            <Stack 
                direction={{base: 'column', lg: 'row'}}
                spacing={12}
                divider={<StackDivider borderColor="#2f3e46" />}
            >
                <Box width={{base: '100%', lg: '50%'}}>
                    <VStack alignItems="start" divider={<StackDivider borderColor="#2f3e46" />} spacing={6}>
                        <VStack width="100%">
                            <HStack justifyContent={{base: 'space-between', md: 'start', lg: 'space-between'}} spacing={{base: 2, md: 8}} width="100%">
                                <Heading as="h2" size="lg">{firstStudyName} <br />
                                    <Text as="span" color="#84a98c">{firstSchoolName}</Text>
                                </Heading>
                                <Image src={require("../images/kristiania.png")} h={{base: "50px", md: "60px"}} rounded="md" alt="Høyskolen Kristiania Logo" />
                            </HStack>
                            <HStack spacing={4} justifyContent="start" width="100%" divider={<StackDivider borderColor="#2f3e46"/>}>
                                <Text fontSize="xl" fontStyle="italic" fontWeight="bold">Bachelor</Text>
                                <Text fontSize="lg">2020 - 2023</Text>
                                <Text fontSize="lg">Frontend- og mobilutvikling</Text>
                            </HStack>
                        </VStack>
                        <VStack alignItems="left">
                            <Text fontWeight="light">
                                Gjennom bachelorgraden i informasjonsteknologi med fordypning i frontend- og mobilutvikling har jeg fått kjennskap til utvikling gjennom hele stacken,
                                blandt annet med frontend-teknologier som Javascript (React, Vue), HTML, CSS og backend-teknologier som Java. I tillegg har jeg
                                fått kjennskap til mobilutvikling med native-teknologier som Kotlin og Swift, og kryssplattformutvikling med Ionic.
                                Jeg har blitt kjent med designprosesser, og fått erfaring med UX- og UI-design gjennom bruk av designverktøyet
                                Figma. Innføring i versjonskontroll, testing, sikkerhet og bruk/oppsett av databaser.
                            </Text>
                        </VStack>
                        <VStack alignItems="left">
                            <Heading as="h3" size="md">Bacheloroppgave</Heading>
                            <Text fontWeight="light">
                                I perioden januar 2023 - mai 2023 gjennomførte jeg mitt bachelorprosjekt hos Norges Idrettsforbund, hvor jeg og min gruppe hadde som ansvar å designe og utvikle
                                vår egen modul av en større løsning på tvers av fire bachelorgrupper. Prosjektets formål var å utvikle et produkt for påmelding i idretten, hvor man kan bli medlem av
                                eller lage grupper for sine lag eller uavhengige grupper. På vår gruppe hadde jeg hovedansvar for frontendutviklingen, som ble gjort gjennom Vue, i tillegg til å ha en
                                sentral stemme i designprosessen.
                            </Text>
                        </VStack>
                    </VStack>
                </Box>
                <Box width={{base: '100%', lg: '50%'}}>
                    <VStack alignItems="start" divider={<StackDivider borderColor="#2f3e46" />} spacing={6}>
                        <VStack width="100%">
                            <HStack justifyContent={{base: 'space-between', md: 'start', lg: 'space-between'}} spacing={{base: 2, md: 8}} width="100%">
                                <Heading as="h2" size="lg">{secondStudyName} <br /> 
                                    <Text as="span" color="#84a98c">{secondSchoolName}</Text>
                                </Heading>
                                <Image src={require("../images/oslomet.png")} h={{base: "50px", md: "60px"}} rounded="md" alt="OsloMet Logo" />
                            </HStack>
                            <HStack spacing={4} justifyContent="start" width="100%" divider={<StackDivider borderColor="#2f3e46"/>}>
                                <Text fontSize="xl" fontStyle="italic" fontWeight="bold">Master</Text>
                                <Text fontSize="lg">2023 - 2025</Text>
                                <Text fontSize="lg">Universell utforming av IKT</Text>
                            </HStack>
                        </VStack>
                        <VStack alignItems="left">
                            <Text fontWeight="light">
                                Gjennom masterprogrammet i anvendt data- og informasjonsteknologi med spesialisering i universell utforming av IKT har jeg tilegnet meg
                                mye kunnskap rundt temaer som brukervennlighet, tilgjengelighet og brukermangfold. Med andre ord har jeg i stor grad lært brukeren bak skjermen å kjenne,
                                og fått en forståelse for de ulike interaksjonsmetodene som skal tas hensyn til i utforming og utvikling av digitale løsninger, for å legge til rette for at
                                flest mulig mennesker har tilgang til dem.
                            </Text>
                        </VStack>
                        <VStack alignItems="left">
                            <Heading as="h3" size="md">Masteroppgave</Heading>
                            <Text fontWeight="light">
                                Jeg skal gjennomføre mitt masterprosjekt i perioden januar 2025 - mai 2025. Oppgaven baserer seg på en eksisterende problemstilling; en aldrende befolkning, og derav
                                en økning i antall personer med demens og andre sykdommer. Denne oppgaven planlegger spesifikt å fokusere på demens, og hvordan man potensielt kan forebygge dette gjennom 
                                å stimulere hjernen gjennom kognitiv aktivitet. Det overordnede målet blir derfor å designe og utvikle en digital løsning, med intensjon om å integrere kognitiv trening inn 
                                i eldres daglige mobilbruk!
                            </Text>
                        </VStack>
                    </VStack>
                </Box>
            </Stack>
        </FullScreenSection>
    )
}

export default EducationSection;