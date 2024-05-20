import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Flex as="nav" bg="teal.500" p={4} color="white">
      <Link as={RouterLink} to="/" mr={4}>
        Home
      </Link>
      <Link as={RouterLink} to="/about">
        About
      </Link>
    </Flex>
  );
}

export default Navigation;
