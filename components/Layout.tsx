import { styled, Heading, Box, Container } from "@cabindao/topo";
import PageHeader from "./PageHeader";

export default function Layout({ children }) {
  return (
    <Box>
      <PageHeader />
      <Container>{children}</Container>
    </Box>
  );
}
