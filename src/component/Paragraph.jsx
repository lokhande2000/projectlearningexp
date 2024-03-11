import { Box, VStack, Heading } from "@chakra-ui/react";
import React from "react";

const Paragraph = () => {
  return (
    <VStack  w='90%' m="auto" textAlign="center" gap={5} p={10}>
    <Box w={{sm:'100%', md:'90%'}}>
      <Heading as="h2"
       size={{sm: 'sm', md: 'md', lg:'lg'}}
    // fontSize='2vw'
       fontWeight={500} lineHeight={1} >
        We provide various kind of <br /> learning modules for you
      </Heading>
    </Box>

      <Heading as="h4"
       size="xs"

    // fontSize={{base:'3vw', sm:'1vw'}}
        color='#707070'>
        It Is Long Established Fact That A Reader Will Be Distracted By The
        Readable <br /> Content Of Page When Looking At Its Layout. The Point Of Using
        Lorem
      </Heading>
    </VStack>
  );
};

export default Paragraph;
