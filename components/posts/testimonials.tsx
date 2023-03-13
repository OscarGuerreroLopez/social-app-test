import {
  Box,
  useColorModeValue,
  Text,
  Stack,
  Avatar,
  Flex
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface TestimonialProps {
  children: ReactNode;
}

interface AvatarProps {
  src: string | undefined;
  name: string;
  title: string;
}

export const Testimonial = ({ children }: TestimonialProps) => {
  return <Box>{children}</Box>;
};

export const TestimonialText = ({ children }: TestimonialProps) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

export const TestimonialContent = ({ children }: TestimonialProps) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      {children}
    </Stack>
  );
};

export const TestimonialAvatar = ({ src, name, title }: AvatarProps) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};
