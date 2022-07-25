import { Stack, Box, Flex } from "@chakra-ui/react";
import CurrentTotals from "./currentTotals";
import Bike from "./bike";
import Bike1 from "../assets/bike1.png";
import Bike2 from "../assets/bike2.png";
import Bike3 from "../assets/bike3.png";
const Dashboard = () => {
  return (
    <Stack
      as={Box}
      textAlign={"center"}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
    >
      <CurrentTotals />
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Bike></Bike>
        <Bike></Bike>
        <Bike></Bike>
      </Flex>
    </Stack>
  );
};

export default Dashboard;
