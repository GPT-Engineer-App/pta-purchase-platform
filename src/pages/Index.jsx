import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useToast, VStack, Image, Divider, Badge, HStack, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { FaExchangeAlt, FaCreditCard, FaWallet, FaUserCheck, FaShieldAlt, FaHistory, FaMoneyBillWave, FaArrowDown } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const toast = useToast();
  const [amount, setAmount] = useState("");
  const [exchangeRate, setExchangeRate] = useState(1.0); // Placeholder for real-time rate

  const handlePurchasePTA = () => {
    // Placeholder for purchase logic
    toast({
      title: "PTA Purchased Successfully!",
      description: "Your virtual PTA card has been issued.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleExchangeRateCheck = () => {
    // Placeholder for fetching real-time exchange rates
    setExchangeRate(1.2); // Example Rate
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          PTA & Currency Exchange Platform
        </Heading>
        <Image src="https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXJyZW5jeSUyMGV4Y2hhbmdlfGVufDB8fHx8MTcwOTY1MDU1Nnww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="cover" borderRadius="md" />
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" w="full">
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button leftIcon={<FaExchangeAlt />} colorScheme="blue" onClick={handleExchangeRateCheck}>
              Check Exchange Rates
            </Button>
            <Button leftIcon={<FaCreditCard />} colorScheme="green" onClick={handlePurchasePTA}>
              Purchase PTA
            </Button>
          </Stack>
          <Badge colorScheme="green" p={2} borderRadius="full">
            Current Rate: ${exchangeRate}
          </Badge>
        </Flex>
        <Divider />
        <Heading as="h2" size="lg">
          Services Offered
        </Heading>
        <Stack spacing={6} align="stretch" w="full">
          <ServiceFeature icon={<FaWallet />} title="Mobile Wallet" description="Manage your PTA balance and transactions on the go with our mobile app." />
          <ServiceFeature icon={<FaUserCheck />} title="KYC Verification" description="Authenticate your identity with our secure KYC verification process." />
          <ServiceFeature icon={<FaShieldAlt />} title="Secure Transactions" description="Enjoy peace of mind with our advanced security measures." />
          <ServiceFeature icon={<FaHistory />} title="Transaction Monitoring" description="Monitor your transactions in real-time with detailed history tracking." />
          <ServiceFeature icon={<FaMoneyBillWave />} title="Fund Withdrawal" description="Withdraw funds effortlessly to your linked bank account or payment method." />
        </Stack>
        <Alert status="info">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Real-time Exchange Rates!</AlertTitle>
            <AlertDescription display="block">Stay updated with the most current exchange rates for informed currency exchanges.</AlertDescription>
          </Box>
        </Alert>
      </VStack>
    </Container>
  );
};

const ServiceFeature = ({ icon, title, description }) => (
  <HStack align="start">
    <Box fontSize="3xl" as="span" color="blue.400">
      {icon}
    </Box>
    <VStack align="start">
      <Text fontWeight="bold">{title}</Text>
      <Text>{description}</Text>
    </VStack>
  </HStack>
);

export default Index;
