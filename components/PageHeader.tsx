import { styled, Text, Heading, Box, Container } from "@cabindao/topo";

export default function PageHeader() {
  return (
    <Box
      css={{
        borderBottom: "2px solid",
        borderColor: "$forest",
        pb: "$5",
        mb: "$12",
      }}
    >
      <Container>
        <Box>
          <Heading css={{ mb: "$2" }}>Catalog: Billboards</Heading>
          <Text weight="light" css={{ m: 0, fontStyle: "italic" }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
