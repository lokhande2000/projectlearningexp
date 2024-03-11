import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { Box, Center, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import logo from "../../img/Group.svg";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#into-slid", {
        y: "10",
        duration: 1.3,
        delay: 0.3,
      }).from("#big", {
        x: "10",
      });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div className="navbar">
      <Box
        ref={comp}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w='90%'
        m='auto'
        pt={5}
        // bg="red"
      >
        <Flex>
          <Center gap="5%">
            <Image src={logo} alt="logo" />
            <Heading as="h2" size="lg" color='#fff' fontWeight={400}>
              Learning.Ex
            </Heading>
          </Center>
        </Flex>
        <Flex 

          id="into-slid"
          width="45%"
          justify="space-between"
          fontSize="2xl"
          fontWeight={500}
          color="#CEC5DB"
          className="links"
          display={{base:'none', sm:'none',lg:'none', xl:'flex'}}
        >
          <Link id="big" to="">
            Home
          </Link>
          <Link className="changecolor" to="">Services Us</Link>
          <Link className="changecolor" to="">Why Us</Link>
          <Link className="changecolor" to="">Our Goals</Link>
          <Link className="contactbtn" to="">Contact Us</Link>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
