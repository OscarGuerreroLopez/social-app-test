import Router, { useRouter } from "next/router";
import { useEffect, ReactNode } from "react";
import { observer } from "mobx-react-lite";
import {
  Text,
  Box,
  Container,
  Heading,
  Stack,
  useColorModeValue,
  Avatar,
  Flex,
  Card,
  CardBody,
  CardHeader,
  Divider,
  VStack,
  SimpleGrid,
  Center
} from "@chakra-ui/react";
import notificationsStore from "@/stores/notifications.store";
import UserStore from "@/stores/user.store";

interface Props {
  postId: string;
}

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title
}: {
  src: string | undefined;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const PostDetail: React.FC<Props> = (): JSX.Element => {
  const router = useRouter();
  const { postId } = router.query;

  useEffect(() => {
    if (!UserStore.token) {
      Router.push("/login");
    }
  }, []);

  const notification = notificationsStore.notifications.find(
    (notification) => notification.post.id === postId
  );

  return (
    <>
      {UserStore.token && (
        <>
          <Box>
            <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
              <Stack spacing={0} align={"center"}>
                <Heading>{notification?.post.title}</Heading>
                <Text>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </Text>
              </Stack>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={{ base: 10, md: 4, lg: 10 }}
                justify="center"
              >
                {notification?.comments.map((comment) => (
                  <Testimonial key={`${comment.user}.${comment.commentText}`}>
                    <TestimonialContent>
                      <TestimonialText>{comment.commentText}</TestimonialText>
                    </TestimonialContent>
                    <TestimonialAvatar
                      src={comment.user.avatar}
                      name={comment.user.name}
                      title={comment.user.id}
                    />
                  </Testimonial>
                ))}
              </Stack>
            </Container>
          </Box>
          {notification?.likes.length && (
            <>
              <Center>
                <Heading fontSize={{ sm: "1xl", md: "3xl", lg: "4xl" }}>
                  People that liked your post
                </Heading>
              </Center>

              <SimpleGrid
                columns={3}
                spacing="10px"
                minChildWidth={"400px"}
                margin="10px"
              >
                {notification.likes.map((like) => (
                  <Card
                    key={`${notification.post.id}.${notification}`}
                    borderTop="8px"
                    borderColor={"purple.400"}
                    bg="white"
                    marginBottom={"25px"}
                    align="center"
                  >
                    like
                  </Card>
                ))}
              </SimpleGrid>
            </>
          )}
        </>
      )}
    </>
  );
};

export default observer(PostDetail);
