import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Text, Box, Container, Heading, Stack } from "@chakra-ui/react";
import notificationsStore from "@/stores/notifications.store";
import UserStore from "@/stores/user.store";
import {
  Testimonial,
  TestimonialText,
  TestimonialContent,
  TestimonialAvatar
} from "@/components/posts/testimonials";
import { Likes } from "@/components/posts/likes";

interface Props {
  postId: string;
}

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
                      src={`/${comment.user.avatar}`}
                      name={comment.user.name}
                      title={`Software Engineer`}
                    />
                  </Testimonial>
                ))}
              </Stack>
            </Container>
          </Box>
          {notification?.likes.length ? (
            <Likes notification={notification} />
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default observer(PostDetail);
