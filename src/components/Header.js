import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Text, IconButton, Menu, MenuButton, MenuList, MenuItem, useBreakpointValue } from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

  // Hamburger menu for mobile
  const isMobile = useBreakpointValue({ base: true, md: false });

  const NavLinks = () => (
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
  );


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
          px={{ base: 8, md: 16 }}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social) => {
                return (
                  <a href={social.url} key={social.url}>
                    <Box _hover={{color: "#84a98c"}}>
                      <FontAwesomeIcon icon={social.icon} size="2x" />
                    </Box>
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            {isMobile ? (
              <Menu gutter={0}>
                <MenuButton
                  as={IconButton}
                  aria-label="Navigation Menu"
                  icon={<FontAwesomeIcon icon={faBars} />}
                  variant="outline"
                  color="white"
                  _hover={{color: "#84a98c", bg: "none", borderColor: "#84a98c"}}
                />
                <MenuList 
                  bg="#00000090"
                  border="none" 
                  mt={6}
                  minWidth="100vw"
                  height="100vh"
                  rounded={0}
                  zIndex="2"
                  backdropFilter="blur(6px)"
                  >
                  <MenuItem onClick={handleClick("education")} bg="none" _hover={{bg: "#000000"}} p="1rem 2rem">
                    <Text fontSize="2xl" fontWeight="700" fontStyle="italic">Utdanning</Text>
                  </MenuItem>
                  <MenuItem onClick={handleClick("personal")} bg="transparent" _hover={{bg: "#000000"}} p="1rem 2rem">
                  <Text fontSize="2xl" fontWeight="700" fontStyle="italic">Om meg</Text>
                  </MenuItem>
                  <MenuItem onClick={handleClick("projects")} bg="transparent" _hover={{bg: "#000000"}} p="1rem 2rem">
                  <Text fontSize="2xl" fontWeight="700" fontStyle="italic">Prosjekter</Text>
                  </MenuItem>
                  <MenuItem onClick={handleClick("techstack")} bg="transparent" _hover={{bg: "#000000"}} p="1rem 2rem">
                  <Text fontSize="2xl" fontWeight="700" fontStyle="italic">Tech Stack</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <NavLinks />
            )}
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;