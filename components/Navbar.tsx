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
  useDisclosure,
  useColorModeValue,
  Stack,
  AvatarBadge,
  Text,
  useColorMode,
  Heading
} from "@chakra-ui/react";
import Router from "next/router";
import { observer } from "mobx-react-lite";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NavLink from "@/components/NavLink";
import NotificationsStore from "@/stores/notifications.store";
import UserStore from "@/stores/user.store";

import NotificationsNavBar from "@/components/cards/notificationsNavBar";

const Links = [
  { name: "Home", path: "/" },
  {
    name: "Projects",
    path: "https://github.com/OscarGuerreroLopez?tab=repositories"
  },
  { name: "Posts", path: "/posts" }
];

const clickedNotification = (id: string) => {
  Router.push(`/post/${id}`);
};

function NavBar() {
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
              <Heading as="h3" size={"md"}>
                Fatbook
              </Heading>
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
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={{ base: 1, md: 3, lg: 5 }}>
              <Button onClick={toggleColorMode} background={colorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                {UserStore.isLogged && (
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar size={"sm"} src={UserStore.avatar}>
                      {!!NotificationsStore.notifications.length && (
                        <AvatarBadge width={"1,7em"} bg="red.500">
                          <Text fontSize={"xs"} color="white">
                            {NotificationsStore.mergedNotifications.length}
                          </Text>
                        </AvatarBadge>
                      )}
                    </Avatar>
                  </MenuButton>
                )}

                <MenuList
                  alignItems={"center"}
                  maxW={{ base: "370px", sm: "470px", md: "800px" }}
                >
                  {NotificationsStore.mergedNotifications.map(
                    (notification) => {
                      return (
                        <NotificationsNavBar
                          notification={notification}
                          key={`${notification.postId}.${notification.text}`}
                          clikedEvent={() =>
                            clickedNotification(notification.postId)
                          }
                        />
                      );
                    }
                  )}
                </MenuList>
              </Menu>
            </Stack>
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
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default observer(NavBar);
