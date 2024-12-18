import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Text } from "@chakra-ui/react";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/PetterTSaatvedt",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/petter-torst-saatvedt-1619b21b1/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Hide/Show header on scroll
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const previousScrollPosition = usePrevious(scrollPosition);
  const scrollRef = useRef();

  const handleScroll = () => {
    setScrollPosition(window.scrollY);

    if (scrollRef.current){
      if (previousScrollPosition < scrollPosition) {
        scrollRef.current.style.transform = "translateY(-100%)";
      } else if (previousScrollPosition > scrollPosition) {
        scrollRef.current.style.transform = "translateY(0)";
      }
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [scrollPosition, previousScrollPosition]);

  return (
    <Box
      ref={scrollRef}
      position="fixed"
      zIndex="1"
      top={0}
      left={0}
      right={0}
      p={2}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#00000040"
      backdropFilter="blur(6px)"
      _hover={{bg: "#00000090"}}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social) => {
                return (
                  <a href={social.url} key={social.url}>
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                );
              })};
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#education" onClick={handleClick("education")}>
                <Text _hover={{color: "#84a98c", fontStyle: "italic"}}>Utdanning</Text>
              </a>
              <a href="/#personal" onClick={handleClick("personal")}>
               <Text _hover={{color: "#84a98c", fontStyle: "italic"}}>Om meg</Text>
              </a>
              <a href="/#projects" onClick={handleClick("projects")}>
                <Text _hover={{color: "#84a98c", fontStyle: "italic"}}>Prosjekter</Text>
              </a>
              <a href="/#tech-stack" onClick={handleClick("techstack")}>
               <Text _hover={{color: "#84a98c", fontStyle: "italic"}}>Tech Stack</Text>
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;