import { SimpleGrid, Box, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";
import smartphone from "../img/smartphone1.png";
import dashboard from '../img/Dashboard.png';
import layout from '../img/layout.png';
const Cart = () => {
  return (
    <SimpleGrid columns={{base:1, sm:1, md:2, lg:3}}  spacing={{base:10, sm:20}} w="80%" m="auto" p={5} alignItems='center'>
      <Box boxShadow="dark-lg" height={400} p={5} borderRadius='lg'>
        <Image m="auto" src={smartphone} alt="" />
          <Heading as="h3" size="md" textAlign='center' pt={4}>
            Learning Anything
          </Heading>
          <Text pt={4} px={5} fontSize='sm' fontWeight={600} color='#6C6A6A'>It Is Long Established Fact That A Reader Will Be distracted By The Readable</Text>
      </Box>

      <Box height={{sm:'auto', md:'auto'}} boxShadow="dark-lg" p={5} bg='#FAF8E4' borderRadius='lg' alignItems='center'>
        <Image m="auto"  mt={2} src={dashboard} alt="" />
          <Heading as="h3" size="md" textAlign='center' pt={4}>
            Flex Learning
          </Heading>
          <Text pt={4} px={5} fontSize='sm' fontWeight={600} color='#6C6A6A'>It Is A Long Estableshed Fact That A Reader Will Be Distracted By The Readable Content Of A Page When</Text>
      </Box>

      <Box boxShadow="dark-lg" p={5} borderRadius='lg' height={400} overflow='hidden'>
        <Image m="auto" h={200} src={layout} alt="" />
          <Heading as="h3" size="md" textAlign='center' pt={4}>
            Expert Connect
          </Heading>
          <Text pt={4} px={5} fontSize='sm' fontWeight={600} color='#6C6A6A'>It Is A Long Estableshed Fact That A Reader Will Be Distracted By The Readable</Text>
      </Box>
    </SimpleGrid>

    
  );
};

export default Cart;
