import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  AvatarBadge,
  Text,
  useColorMode
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NavLink from "@/components/NavLink";

const Links = [
  { name: "Home", path: "/" },
  {
    name: "Projects",
    path: "https://github.com/OscarGuerreroLopez?tab=repositories"
  }
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              {" "}
              <Avatar size={"sm"} src={"/logo.png"} />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
              {colorMode === "light" ? (
                <MoonIcon onClick={toggleColorMode} />
              ) : (
                <SunIcon onClick={toggleColorMode} />
              )}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={"/user_11.png"}>
                  <AvatarBadge width={"1,7em"} bg="red.500">
                    <Text fontSize={"xs"} color="white">
                      3
                    </Text>
                  </AvatarBadge>
                </Avatar>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
              <Flex justifyContent={"center"} maxWidth={"65px"}>
                {colorMode === "light" ? (
                  <MoonIcon onClick={toggleColorMode} />
                ) : (
                  <SunIcon onClick={toggleColorMode} />
                )}
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
