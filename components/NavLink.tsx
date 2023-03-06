import { ReactNode } from "react";
import Link from "next/link";
import { Box, useColorModeValue } from "@chakra-ui/react";

const NavLink = ({
  children,
  path
}: {
  children: ReactNode;
  path: string;
}): JSX.Element => {
  return (
    <Box
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700")
      }}
    >
      <Link href={path}>{children}</Link>
    </Box>
  );
};

export default NavLink;
