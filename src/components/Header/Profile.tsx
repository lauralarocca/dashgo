import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Laura La-Rocca</Text>
                    <Text color="gray.300" fontSize="small">lauralf.eso@gmail.com</Text>
                </Box>
            )}
             <Avatar size="md" name="Laura La-Rocca" src="https://github.com/lauralarocca.png" />
        </Flex>
    );
}