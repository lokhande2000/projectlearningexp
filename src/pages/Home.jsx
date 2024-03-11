import { FaLongArrowAltRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import img from "../img/img.png";
import mean from "../img/mean.png";
import user from "../img/user_circle.png";
import turned from "../img/turned.png";
import star from "../img/star.png";
import {
  Box,
  Button,
  Flex,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
// import Navbar from "../component/navbar/Navbar";
import Paragraph from "../component/Paragraph";
import Cart from "../component/Cart";
import Number from "../component/Number";
const Home = () => {
  return (
    <div>
      <div style={{ width: "100%", position: "relative", top: 0, left: 0 }}>
        <Box
          className="womanimg"
          style={{
            height: "100vh",
            objectPosition: "center",
            objectFit: "cover",
          }}
        >
          <div className="overlay">
            <Box w="50%" alignItems="center" justifyContent="center">
              <Heading fontWeight={600} as="h2" size="xl">
                We Create Learning Experience With Excellent Technology.
              </Heading>
              <Text w="60%" mt={2} fontSize="md">
                Unlimited Access To 100+ world-Class Courses, Hands-On Projects,
                And Job-Ready Certificate Programs- All Included in Your
                Subscription
              </Text>
              <Flex alignItems='center' gap='50px'>
                <Button borderRadius="30px" color="#000" bg="yellow" mt={5}>
                  Book Demo Class
                </Button>

                <Flex
                className="colorchange"
                mt={5}
                  w="25%"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Link style={{fontSize:'20px'}}>Explore More </Link>
                  <FaLongArrowAltRight style={{marginTop:'8px', marginLeft:'10px'}}/>
                </Flex>
              </Flex>
            </Box>
            
            <Box borderRadius='20px' overflow='hidden'>
            <iframe width="400" height="250" src="https://www.youtube.com/embed/g7xkVEWrX8E" title="Web Design Promotional Video - After Effects Template" frameborder="0" allow="  clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted" allowfullscreen></iframe>
            </Box>
          </div>
        </Box>

        <Paragraph />
        <Cart />

        <Box textAlign="center" p={7}>
          <Heading as="h2" size="xl" fontWeight="600">
            Why Us
          </Heading>
          <Text
            w={{ base: "100%", sm: "100%", xl: "43%" }}
            m="auto"
            mt={5}
            color="#707070"
            fontWeight={500}
            fontSize="lg"
          >
            At Learning Exp.We Are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals Join Us
            Today And Emabark On A Journey Of Discovery, Growth, And Success.
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={10}
          w="80%"
          m="auto"
          pt={50}
          pb={100}
        >
          <Box width={{ base: "100%", xl: "80%" }} h="100%" position="relative">
            <iframe
              style={{ borderRadius: "20px" }}
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/k9IsC7Ir4Do"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <SimpleGrid className="top" width="100px" columns={4} spacing={7}>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
            </SimpleGrid>
            <SimpleGrid
              className="bottom"
              width="100px"
              columns={4}
              spacing={7}
            >
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
              <Box borderRadius="50%" bg="#DA69A3" h="6px" w="6px"></Box>
            </SimpleGrid>
          </Box>

          <Box px={50} display="flex" gap="10px" flexDirection="column">
            <Heading as="h3" size="lg">
              Crafting Your Dream Career: Building a Path You Love with us
            </Heading>

            <Text fontSize="lg">
              At Learning Exp. We Are Committed To Providing You With A Superior
              Learning Experience That Empowers You To Achieve Your Goals. Join
              Us Today And Embark On A Journey Of Discovery, Growth, And
              Success.
            </Text>
            <Text fontSize="lg">
              Our Platform Is Designed To Empower Learners Like You To Excel In
              Todays Dynamic World.
            </Text>

            <Button
              width="auto"
              colorScheme="yellow"
              borderRadius="30px"
              fontWeight={700}
              bg="#FFEC05"
              size="lg"
            >
              Get More
            </Button>
          </Box>
        </SimpleGrid>

        <Box textAlign="center" w="70%" m="auto" p={10}>
          <Heading as="h3" size="2xl" fontWeight={500}>
            We Completed 1200+ Certification Program Successfully & Counting
          </Heading>
          <Text
            p={3}
            w="70%"
            m="auto"
            fontSize="lg"
            color="#251C1C"
            fontWeight={600}
          >
            At Learning Exp. We Are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals. Join Us
            Today And Embark On A Journey Of Discovery, Growth, And Success.
          </Text>
        </Box>

        <SimpleGrid
          pb={50}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={10}
          w="80%"
          m="auto"
        >
          <Flex alignItems="center">
            <Box>
              <Image className="samesize" src={turned} alt="img" />
            </Box>
            <Box>
              <Box>
                <Heading as="h1" size="lg" color="blue" fontWeight={600}>
                  <Flex>
                    <Number n={100} />+
                  </Flex>
                </Heading>
              </Box>
              <Box>
                <Text fontWeight={700} color="blue" fontSize="lg">
                  Batch Complete
                </Text>
              </Box>
            </Box>
          </Flex>

          <Flex>
            <Box>
              <Image className="samesize" src={turned} alt="img" />
            </Box>
            <Box>
              <Box>
                <Heading as="h1" size="lg" color="blue" fontWeight={600}>
                  <Flex>
                    <Number n={50} />+
                  </Flex>
                </Heading>
              </Box>
              <Box>
                <Text fontWeight={600} fontSize="lg">
                  Active Batches
                </Text>
              </Box>
            </Box>
          </Flex>

          <Flex>
            <Box>
              <Image className="samesize" src={user} alt="img" />
            </Box>
            <Box>
              <Box>
                <Heading as="h1" size="lg" color="blue" fontWeight={600}>
                  <Flex>
                    <Number n={10000} />+
                  </Flex>
                </Heading>
              </Box>
              <Box>
                <Text fontWeight={600} fontSize="lg">
                  Student Satisfied
                </Text>
              </Box>
            </Box>
          </Flex>

          <Flex>
            <Box>
              <Image className="samesize" src={user} alt="img" />
            </Box>
            <Box>
              <Box>
                <Heading as="h1" size="lg" color="blue" fontWeight={600}>
                  <Flex>
                    <Number n={10} />+
                  </Flex>
                </Heading>
              </Box>
              <Box>
                <Text fontWeight={600} fontSize="lg">
                  Course Modules
                </Text>
              </Box>
            </Box>
          </Flex>
        </SimpleGrid>

        <Flex w="80%" m="auto" gap={40}>
          <VStack w="80%" alignItems="flex-start">
            <Heading as="h3" size="lg">
              Our Students Feedback
            </Heading>
            <Text fontSize="md" fontWeight={600} color="#717171">
              At Learning Exp. We Are Committed to Providing You With A Superior
              Learning Experience that Empowers You To Achieve Your Goals. Join
              Us Today And Embark On A Journey Of Discovery, Growth, And Success
            </Text>
          </VStack>
          <Flex
            gap="20px"
            alignItems="center"
            justifyContent="space-between"
            fontWeight={700}
            bgColor="gray"
            w="20%"
            p={2}
            h={50}
            borderRadius="10px"
          >
            <Link>Read More </Link>
            <FaLongArrowAltRight />
          </Flex>
        </Flex>

        <Flex w="80%" m="auto" my={50} bg="#EFEFFE">
          <Box>
            <Image w={250} src={mean} alt="img" />
          </Box>
          <VStack alignItems="flex-start" p={10}>
            <Flex>
              <Image w="30px" src={star} alt="img" />
              <Image w="30px" src={star} alt="img" />
              <Image w="30px" src={star} alt="img" />
              <Image w="30px" src={star} alt="img" />
            </Flex>
            <Text fontSize="md">
              sed Ut Perspiciatis Unde Omnis lste Natus Error Sit <br />{" "}
              Voluptatem Accusantium Doloremque Laudantium,
              <br />
              Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo
            </Text>
            <Heading as="h5" size="sm">
              Riad Isalm
            </Heading>
            <Flex alignItems="center" gap="5px">
              <Heading as="h5" size="xs">
                Product Managar
              </Heading>
              <Link style={{ color: "blue" }}>@learning.com</Link>
            </Flex>
          </VStack>
        </Flex>
      </div>
    </div>
  );
};

export default Home;
