import { Box, Heading, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        About Us
      </Heading>
      <Text fontSize="lg">Welcome to the About page. Here you can learn more about our mission and values.</Text>
    </Box>
  );
}

export default About;
