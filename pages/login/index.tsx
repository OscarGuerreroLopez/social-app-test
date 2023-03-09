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
  Text,
  useToast
} from "@chakra-ui/react";
import Router from "next/router";
import { Fetcher } from "@/utils/http";
import { GetNotifications } from "@/utils/getNotifications";
import UserStore from "@/stores/user.store";
import { BackendUrl } from "@/consts";
import { LockIcon } from "@chakra-ui/icons";

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
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Did you forget your password?",
      description: "Bad luck, we don't know your password either",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "bottom",
      icon: <LockIcon />
    });
  };

  const showRememberToast = () => {
    toast({
      title: "You want to be remembered?",
      description:
        "This is not implemented, so we will not remember you for now",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "bottom",
      icon: <LockIcon />
    });
  };

  return (
    <Flex
      minH={"100vh"}
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
                <Checkbox
                  onChange={(e) => {
                    if (e.target.checked) {
                      showRememberToast();
                    }
                  }}
                >
                  Remember me
                </Checkbox>
                <Link color={"blue.400"} onClick={showToast}>
                  Forgot password?
                </Link>
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
