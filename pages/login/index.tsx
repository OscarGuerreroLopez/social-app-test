import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  Text
} from "@chakra-ui/react";
import Router from "next/router";
import { Fetcher } from "@/utils/http";
import { GetNotifications } from "@/utils/getNotifications";
import UserStore from "@/stores/user.store";
import { BackendUrl } from "@/consts";

const checkLogin = async () => {
  try {
    const result = await Fetcher(`${BackendUrl}login`, {
      method: "POST"
    });

    const { token } = result;

    UserStore.setUser(token, "/user_11.png", "John Doe");

    await GetNotifications(token);
    await Router.push("/notifications");
  } catch (error) {
    console.error(error);
  }
};

export default function LoginCard() {
  return (
    <Flex
      minH={"70vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={{ sm: "1xl", md: "3xl", lg: "4xl" }}>
            Sign in to your account
          </Heading>
          <Text
            fontSize={{ base: "xs", sm: "sm", md: "xl" }}
            color={"gray.600"}
          >
            Click sign in, this is just a mock ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" defaultValue={"oscar@gmail.com"} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" defaultValue={"oscar@gmail.com"} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500"
                }}
                onClick={() => checkLogin()}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
