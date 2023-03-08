import { MenuItem, Avatar, Text, Heading } from "@chakra-ui/react";
import { User, Post } from "@/models";
import { Truncate } from "@/utils/truncate";

interface Props {
  post: Post;
  likes: User[];
}

export default function notifictionsLikes({ post, likes }: Props) {
  let avatarSrc: string | undefined;
  let likeMembers = "";
  let likesCounter = 0;

  for (const like of likes) {
    likesCounter++;

    if (!avatarSrc) {
      avatarSrc = like.avatar || undefined;
    }

    if (likesCounter <= 2) {
      likeMembers = `${likeMembers} ${like.name || "User"} ${
        likes.length === 1 ? "" : ", "
      } `;
    } else {
      likeMembers = `${likeMembers} and ${
        likes.length + 1 - likesCounter
      }  others `;
      break;
    }
  }

  likeMembers = `${likeMembers} `;

  return (
    <MenuItem key={post.id}>
      <Avatar src={avatarSrc} borderRadius={2} mr="7px" />

      <Heading
        fontWeight={600}
        fontSize={{ base: "sm", sm: "sm", md: "med" }}
        lineHeight={"110%"}
        color={"blue.600"}
      >
        {likeMembers}
        <Text as={"span"} color={"gray.500"}>
          liked your post "{Truncate(post.title)}"
        </Text>
      </Heading>
    </MenuItem>
  );
}
