import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="2xl" color="brand.800">
          Welcome to SaaS Business
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Transforming the way you manage your business with our cutting-edge solutions.
        </Text>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
      <Box mt={10}>
        <Image src="/images/saas-illustration.png" alt="SaaS Illustration" boxSize="300px" />
      </Box>
      <Flex mt={10} direction="column" align="center">
        <Heading as="h2" size="lg" mb={4}>
          Features
        </Heading>
        <VStack spacing={4} align="start">
          <Text fontSize="md" color="gray.700">- Feature 1: Comprehensive Analytics</Text>
          <Text fontSize="md" color="gray.700">- Feature 2: Seamless Integration</Text>
          <Text fontSize="md" color="gray.700">- Feature 3: User-Friendly Interface</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;