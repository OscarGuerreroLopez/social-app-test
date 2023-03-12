import { AggregatedNotification } from "@/models";
import {
  Center,
  Heading,
  SimpleGrid,
  Card,
  Avatar,
  Text
} from "@chakra-ui/react";

interface LikesProps {
  notification: AggregatedNotification;
}

export const Likes = ({ notification }: LikesProps) => {
  return (
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
            marginBottom={"25px"}
            align="center"
          >
            <Avatar src={`/${like.avatar}`} />
            <Text>{like.name || "Unknown user"}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};
