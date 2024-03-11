import React from "react";
import { Link } from 'react-router-dom'
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text,
    VStack,
  } from "@chakra-ui/react";

  import logo from '../img/Group.svg'

import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box
        bg="#F3F3FC"
        pt={{ base: 200, md: 120 }}
        mt={100}
        position="relative"
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          spacing={10}
          textAlign={{ base: "center" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="30%"
          >
            <Flex>
              <Center gap="5%">
                <Image w={10} src={logo} alt="logo" />
                <Heading as="h2" size="md" color="#000" fontWeight={500}>
                  Learning.Ex
                </Heading>
              </Center>
            </Flex>
            <Flex gap="30px">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaPinterest />
            </Flex>
          </Box>

          <Box>
            <Heading as="h4" size="md">
              Links
            </Heading>
            <VStack alignItems="flex-start" mt={5}>
              <Link>Home</Link>
              <Link>Pricing</Link>
              <Link>Download</Link>
              <Link>About</Link>
              <Link>Service</Link>
            </VStack>
          </Box>
          <Box>
            <Heading as="h4" size="md">
              Support
            </Heading>
            <VStack alignItems="flex-start" mt={5}>
              <Link>FAQ</Link>
              <Link>How it</Link>
              <Link>Features</Link>
              <Link>contact</Link>
              <Link>Reporting</Link>
            </VStack>
          </Box>
          <Box>
            <Heading as="h4" size="md">
              Contact Us
            </Heading>
            <VStack alignItems="flex-start" mt={5}>
              <Link>+880 12345678</Link>
              <Link>youremail@gmail.co</Link>
              <Link>Pune City</Link>
            </VStack>
          </Box>
        </SimpleGrid>

        <Flex w="80%" m="auto" py={10} justifyContent="space-between">
          <Box>
            <Text fontSize="md" fontWeight={600}>
              copyright & Design By @Learning Exp.
            </Text>
          </Box>
          <Box>
            <Text fontSize="md">Terms of use | Privacy Policy</Text>
          </Box>
        </Flex>

        {/* ===== contact us  ======== */}
        <Flex
          flexDirection={{ base: "column", xl: "row" }}
          bg="#333697"
          borderRadius="20px"
          p={10}
          w={{ base: "100%", xl: "60%" }}
          m="auto"
          position="absolute"
          top={0}
          left="50%"
          transform="translate(-50%,-50%)"
        >
          <VStack flexDirection="column" alignItems="flex-start">
            <Heading as="h4" size="lg" color="#fff">
              Contact Us!
            </Heading>
            <Text fontSize="lg" fontWeight={600} color="#C5C6E1">
              There are many variations of passages of Lorem Ipsum but the
              majority have suffered alteration.
            </Text>
          </VStack>

          <Box display="flex" alignItems="center">
            <Flex bg="#fff" p={2} borderRadius={40} overflow="hidden">
              <input className="input" type="text" placeholder="Email here" />
              <Button
                bg="yellow"
                borderRadius={30}
                px={10}
                size={{ base: "sm", xl: "lg" }}
              >
                seand
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
