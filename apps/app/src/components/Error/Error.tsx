import { Flex, Text } from "@radix-ui/themes";

interface ErrorProps {
    message: string;
}

function Error({ message }: ErrorProps) {
    return (
        <Flex justify='center' align='center'>
            <Text as="p" color={"red"} size="2">
                {message}
            </Text>
        </Flex>
    )
}

export default Error;