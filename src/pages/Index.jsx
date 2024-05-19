import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaRocket, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <HStack justifyContent="space-between" py={4}>
        <Heading size="lg">Rocketify</Heading>
        <HStack spacing={4}>
          <Button variant="link">Features</Button>
          <Button variant="link">Pricing</Button>
          <Button variant="link">Contact</Button>
          <Button colorScheme="orange">Sign Up</Button>
        </HStack>
      </HStack>

      {/* Hero Section */}
      <VStack spacing={8} py={16} textAlign="center">
        <Heading size="2xl">Launch Your Digital Rockets with Rocketify</Heading>
        <Text fontSize="lg">The ultimate platform for creating, managing, and launching digital rockets.</Text>
        <Button colorScheme="orange" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
        <Image src="https://images.unsplash.com/photo-1581091870627-3a6c6c7f8f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjByb2NrZXR8ZW58MHx8fHwxNjg0NzY4NzA3&ixlib=rb-4.0.3&q=80&w=1080" alt="Digital Rocket" borderRadius="md" boxShadow="lg" />
      </VStack>

      {/* Features Section */}
      <VStack spacing={8} py={16}>
        <Heading size="xl">Features</Heading>
        <HStack spacing={8} wrap="wrap" justifyContent="center">
          <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" maxW="sm">
            <Heading size="md">Rocket Design</Heading>
            <Text mt={2}>Create and customize your digital rockets with our intuitive design tools.</Text>
          </Box>
          <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" maxW="sm">
            <Heading size="md">Launch Management</Heading>
            <Text mt={2}>Manage and schedule your rocket launches with ease.</Text>
          </Box>
          <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" maxW="sm">
            <Heading size="md">Analytics</Heading>
            <Text mt={2}>Track the performance of your rockets with detailed analytics.</Text>
          </Box>
        </HStack>
      </VStack>

      {/* Newsletter Section */}
      <VStack spacing={4} py={16} textAlign="center">
        <Heading size="lg">Stay Updated</Heading>
        <Text>Subscribe to our newsletter to get the latest updates and offers.</Text>
        <InputGroup maxW="md">
          <Input placeholder="Enter your email" />
          <InputRightElement width="auto">
            <Button colorScheme="orange">Subscribe</Button>
          </InputRightElement>
        </InputGroup>
      </VStack>

      {/* Footer */}
      <HStack justifyContent="space-between" py={8}>
        <Text>&copy; {new Date().getFullYear()} Rocketify. All rights reserved.</Text>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
        </HStack>
      </HStack>
    </Container>
  );
};

export default Index;
