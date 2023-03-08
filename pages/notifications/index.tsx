import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { SimpleGrid, Container } from "@chakra-ui/react";
import Router from "next/router";
import notificationsStore from "@/stores/notifications.store";
import UserStore from "@/stores/user.store";
import NotificatioCard from "@/components/cards/notification";

function index() {
  useEffect(() => {
    if (!UserStore.token) {
      Router.push("/login");
    }
  }, []);

  return (
    <Container as={"section"} maxWidth="4xl" mt={"5"}>
      <SimpleGrid columns={3} spacing="10px" minChildWidth={"300px"}>
        {notificationsStore.notifications.map((notification) => (
          <div key={notification.post.id}>
            <NotificatioCard notification={notification} />
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default observer(index);
