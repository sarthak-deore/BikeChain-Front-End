import { Box, Image, Text, Stack, Button } from "@chakra-ui/react";

const Bike = () => {
  return (
    <Box boxSize="lg" mx={2}>
      <Image src={bike} mb={10} />
      <Text>
        Mountain bikes are designed for off-road riding, almost the opposite of
        road bikes. The thick tyres and treads on mountain bikes make them
        extremely slow on tarmac, as if the heavy frame wasn't slowing you down
        enough, though they're perfectly suited to helping you stay upright on
        rocky, muddy singletrack trails.
      </Text>
      <Stack spacing={0} direction={"row"} align={"center"} justify={"center"}>
        <Button
          colorScheme={"teal"}
          bg={"teal.400"}
          rounded={"full"}
          px={6}
          _hover={{
            bg: "teal.500",
          }}
        >
          Check Out
        </Button>
        <Button
          colorScheme={"teal"}
          bg={"teal.400"}
          rounded={"full"}
          px={6}
          _hover={{
            bg: "teal.500",
          }}
        >
          Check In
        </Button>
      </Stack>
    </Box>
  );
};

export default Bike;
