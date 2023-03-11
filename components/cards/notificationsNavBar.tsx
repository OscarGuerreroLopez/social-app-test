import { MenuItem, Avatar, Text, Heading } from "@chakra-ui/react";
import { TextNotifications } from "@/models";
import { Truncate } from "@/utils/truncate";

interface Props {
  notification: TextNotifications;
}

const notifications: React.FC<Props> = ({ notification }): JSX.Element => {
  let avatarSrc: string | undefined;
  let members = "";
  let membersCounter = 0;

  for (const user of notification.user) {
    membersCounter++;

    if (!avatarSrc) {
      avatarSrc = user.avatar || undefined;
    }

    if (membersCounter <= 2) {
      members = `${members} ${user.name || "User"} ${
        notification.user.length === 1 ? "" : ", "
      } `;
    } else {
      const theOthers = notification.user.length + 1 - membersCounter;
      members = `${members} and ${theOthers}  ${
        theOthers === 1 ? "other" : "others"
      } `;
      break;
    }
  }

  return (
    <MenuItem>
      <Avatar src={avatarSrc} borderRadius={2} mr="7px" />

      <Heading
        fontWeight={600}
        fontSize={{ base: "sm", sm: "sm", md: "med" }}
        lineHeight={"110%"}
        color={"blue.600"}
      >
        {members}
        <Text as={"span"} color={"gray.500"}>
          {notification.text} "{Truncate(notification.postTitle)}"
        </Text>
      </Heading>
    </MenuItem>
  );
};

export default notifications;
