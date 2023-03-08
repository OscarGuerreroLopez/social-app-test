import { MenuItem, Avatar, Text, Heading } from "@chakra-ui/react";
import { Comment, Post } from "@/models";
import { Truncate } from "@/utils/truncate";

interface Props {
  post: Post;
  comments: Comment[];
}

export default function notificationComments({ post, comments }: Props) {
  let avatarSrc: string | undefined;
  let commentMembers = "";
  let commentsCounter = 0;

  for (const comment of comments) {
    commentsCounter++;

    if (!avatarSrc) {
      avatarSrc = comment.user.avatar || undefined;
    }

    if (commentsCounter <= 2) {
      commentMembers = `${commentMembers} ${comment.user.name || "User"} ${
        comments.length === 1 ? "" : ", "
      } `;
    } else {
      commentMembers = `${commentMembers} and ${
        comments.length + 1 - commentsCounter
      }  others `;
      break;
    }
  }

  commentMembers = `${commentMembers} `;

  return (
    <MenuItem key={post.id}>
      <Avatar src={avatarSrc} borderRadius={2} mr="7px" />

      <Heading
        fontWeight={600}
        fontSize={{ base: "sm", sm: "sm", md: "med" }}
        lineHeight={"110%"}
        color={"blue.600"}
      >
        {commentMembers}
        <Text as={"span"} color={"gray.500"}>
          commented your post "{Truncate(post.title)}"
        </Text>
      </Heading>
    </MenuItem>
  );
}
