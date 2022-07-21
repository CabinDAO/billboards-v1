import { styled, Text, Heading, Box, Container, Footer } from "@cabindao/topo";
import PageHeader from "./PageHeader";

const CabinLink = styled("a", {
  textDecoration: "underline",
  "&:hover": {
    color: "$sprout",
  },
});

export default function Layout({ children }) {
  return (
    <Box>
      <PageHeader />
      <Container css={{pb: "$12"}}>{children}</Container>
      <Footer>
        <Text mono>
          Made with care by{" "}
          <CabinLink
            href="https://creatorcabins.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cabin
          </CabinLink>
          .
        </Text>
      </Footer>
    </Box>
  );
}
