import * as React from "react";
import { styled, Text, Heading, Box, Container, Footer } from "@cabindao/topo";
import PageHeader from "./PageHeader";

const CabinLink = styled("a", {
  textDecoration: "underline",
  "&:hover": {
    color: "$sprout",
  },
});

type Props = {
  children: React.ReactNode;
  headingText?: string;
};
const Layout: React.FC<Props> = ({ children, headingText }) => {
  return (
    <Box css={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <PageHeader headingText={headingText} />
      <Container css={{ pb: "$12", flex: 1 }}>{children}</Container>
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
};

export default Layout;
