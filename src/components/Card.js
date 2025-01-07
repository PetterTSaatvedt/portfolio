import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, liveUrl, repositoryUrl  }) => {
  
  return (
    <VStack
      backgroundColor="#2f3e46"
      rounded="xl"
      color="#cad2c5"
    >
      <Image src={imageSrc} roundedTop="xl"/>
      <VStack spacing={8} p={6} height="100%" justifyContent="space-between">
        <VStack alignItems="left" spacing={4}>
          <Heading as="h2" size="lg" fontStyle="italic" color="#84a98c">{title}</Heading>
          <Text fontWeight="light" fontSize="md">{description}</Text>
        </VStack>
        <HStack justifyContent="center" alignItems="center" spacing={4}>
          <a href={liveUrl} key={liveUrl}>
            <Box _hover={{color: "#84a98c"}}>
              <FontAwesomeIcon icon={faLaptopCode} size="xl" />
            </Box>
          </a>
          <a href={repositoryUrl} key={repositoryUrl}>
            <Box _hover={{color: "#84a98c"}}>
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </Box>
          </a>
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;