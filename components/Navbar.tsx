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
  useColorMode,
  Heading,
  Center
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NavLink from "@/components/NavLink";
import NotificationsStore from "@/stores/notifications.store";
import UserStore from "@/stores/user.store";

import NotificationLikes from "@/components/cards/notificationsLikes";
import NotificationComments from "@/components/cards/notificationsComments";

const Links = [
  { name: "Home", path: "/" },
  {
    name: "Projects",
    path: "https://github.com/OscarGuerreroLopez?tab=repositories"
  },
  { name: "Notifications", path: "/notifications" }
];

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
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
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
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
                    {NotificationsStore.notifications.length && (
                      <AvatarBadge width={"1,7em"} bg="red.500">
                        <Text fontSize={"xs"} color="white">
                          {NotificationsStore.notifications.length}
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
                {NotificationsStore.notifications.map((notification) => {
                  if (
                    notification.likes.length &&
                    notification.comments.length
                  ) {
                    return (
                      <>
                        <NotificationLikes
                          post={notification.post}
                          likes={notification.likes}
                        />

                        <NotificationComments
                          post={notification.post}
                          comments={notification.comments}
                        />
                      </>
                    );
                  }
                  if (notification.likes.length) {
                    return (
                      <NotificationLikes
                        post={notification.post}
                        likes={notification.likes}
                      />
                    );
                  }
                  if (notification.comments.length) {
                    return (
                      <NotificationComments
                        post={notification.post}
                        comments={notification.comments}
                      />
                    );
                  }
                })}
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
  );
}

export default observer(NavBar);
