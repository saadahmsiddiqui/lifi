import { Flex, Spinner, Text } from "@radix-ui/themes";

interface LoadingProps {
    message: string;
}

function Loading({ message }: LoadingProps) {
    return (
        <Flex justify='center' align='center'>
            <Spinner className="spinner" size='3' />
            <Text as="p" color={"gray"} size="2" ml={"2"}>
                {message}
            </Text>
        </Flex>
    )
}

export default Loading;