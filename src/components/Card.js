import { Heading, HStack, Image, propNames, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSimCard } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
  <VStack paddingBottom={"20px"} borderRadius={"10px"} spacing={8} align={"flex-start"} background={"white"}>
  <Image borderRadius={"10px"} src={imageSrc}/>
  <Heading color={"black"} paddingLeft={"10px"}>{title}</Heading>
  <Text paddingLeft={"10px"} color={"#404040"}>{description}</Text>
  <HStack paddingLeft={"10px"} color={"black"}>
    <Text>See more</Text>
    <FontAwesomeIcon icon={faArrowRight} size="1x" />
  </HStack>
  </VStack>
  );
};

export default Card;
