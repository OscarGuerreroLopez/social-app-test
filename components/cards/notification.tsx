import { AggregatedNotification } from "@/models";
import UserStore from "@/stores/user.store";
import { EditIcon, StarIcon } from "@chakra-ui/icons";
import {
  Text,
  Card,
  Box,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Stack,
  Avatar,
  Heading
} from "@chakra-ui/react";

interface Props {
  notification: AggregatedNotification;
}

export default function notification({ notification }: Props) {
  return (
    <Card borderTop="8px" borderColor={"purple.400"} marginBottom={"25px"}>
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
          </Box>
        </Flex>
      </CardHeader>
      <CardBody color={"gray.500"}>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Text>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={UserStore.avatar} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{UserStore.name}</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </CardBody>

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
  );
}
