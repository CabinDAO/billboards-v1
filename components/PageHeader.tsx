import { Text, Heading, Box, Container } from "@cabindao/topo";
import { useRouter } from 'next/router'

export default function PageHeader({ headingText = "catalog" }: { headingText: string }) {

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
          <Heading css={{ mb: "$2" }}>
            { headingText }
          </Heading>
          <Text weight="light" css={{ m: 0, fontStyle: "italic" }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
