import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      backgroundColor="#cad2c5"
      color="#2f3e46"
      rounded="xl"
    >
      <Image src={imageSrc} roundedTop="xl"/>
      <VStack spacing={4} alignItems="left" p={4}>
        <Heading as="h2" size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <Text fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;