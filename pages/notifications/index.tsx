import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  ChatIcon,
  CheckCircleIcon,
  EditIcon,
  EmailIcon,
  StarIcon,
  UnlockIcon,
  ViewIcon,
  WarningIcon
} from "@chakra-ui/icons";
import {
  Text,
  SimpleGrid,
  Card,
  Container,
  Box,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  FormHelperText,
  Textarea,
  Checkbox,
  useToast,
  Avatar
} from "@chakra-ui/react";
import Router from "next/router";
import notificationsStore from "@/stores/notifications.store";
import UserStore from "@/stores/user.store";

function index() {
  useEffect(() => {
    if (!UserStore.token) {
      Router.push("/login");
    }
  }, []);

  return (
    <Container as={"section"} maxWidth="4xl" mt={"5"}>
      <SimpleGrid columns={3} spacing="10px" minChildWidth={"420px"}>
        {notificationsStore.notifications.map((notification) => (
          <Card
            key={notification.post.id}
            borderTop="8px"
            borderColor={"purple.400"}
            bg="white"
            marginBottom={"25px"}
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar
                  src={
                    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  }
                />
                <Box>
                  <Heading as="h3" size={"sm"}>
                    {notification.post.title}
                  </Heading>
                  <Text>by {UserStore.name}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <Divider borderColor={"grey.200"} />
            <CardFooter alignSelf={"center"}>
              <HStack gap={2}>
                <Button variant={"ghost"} leftIcon={<StarIcon />}>
                  {notification.likes.length}
                </Button>
                <Button variant={"ghost"} leftIcon={<EditIcon />}>
                  {notification.comments.length}
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default observer(index);
