import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { SimpleGrid, Container, Text, Center } from "@chakra-ui/react";
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

  const clickedNotification = (id: string) => {
    Router.push(`/post/${id}`);
  };

  return (
    <>
      {notificationsStore.isLoading ? (
        <Center>
          <Text fontSize="6xl">Loading.....</Text>
        </Center>
      ) : (
        UserStore.token && (
          <Container as={"section"} maxWidth="4xl" mt={"5"}>
            <SimpleGrid columns={3} spacing="20px" minChildWidth={"300px"}>
              {notificationsStore.notifications.map((notification) => (
                <NotificatioCard
                  notification={notification}
                  key={notification.post.id}
                  clikedEvent={() => clickedNotification(notification.post.id)}
                />
              ))}
            </SimpleGrid>
          </Container>
        )
      )}
    </>
  );
}

export default observer(index);
