import { observer } from "mobx-react-lite";
import { Text } from "@chakra-ui/react";
import notificationsStore from "@/stores/notifications.store";

function index() {
  return (
    <>
      {notificationsStore.notifications.map((item) => (
        <Text key={item.post.id}>{item.post.title}</Text>
      ))}
      <div>notifications index</div>
    </>
  );
}

export default observer(index);
