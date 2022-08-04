import { styled, Text, Heading, Box, Container } from "@cabindao/topo";
import { useRouter } from "next/router";
import Link from "next/link";

const HeaderHeading = styled(Heading, {
  mb: "$2",
  display: "inline",
});

export default function PageHeader({ headingText }: { headingText?: string }) {
  console.log(headingText);

  return (
    <Box
      css={{
        borderBottom: "2px solid",
        borderColor: "$forest",
        py: "$5",
        mb: "$12",
      }}
    >
      <Container>
        <Box>
          <Link href="/" passHref>
            <a>
              <HeaderHeading>catalog</HeaderHeading>
            </a>
          </Link>
          {headingText && (
            <>
              <HeaderHeading css={{ mx: "$2" }}>/</HeaderHeading>
              <HeaderHeading>{headingText}</HeaderHeading>
            </>
          )}
          <Text weight="light" css={{ m: 0, fontStyle: "italic" }}>
            Directory for the Cabin-verse.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
