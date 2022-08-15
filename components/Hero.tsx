import { Heading, Text, Button, Box } from "@cabindao/topo";
import Link from "next/link";

type HeroProps = {
  heading: string;
  description?: string;
  cta?: {
    href: string;
    text: string;
  }
}

export default function Hero({ heading, description, cta }: HeroProps) {
  return (
    <Box css={{ mb: "$12" }}>
      <Box css={{ mr: "auto", maxWidth: 600 }}>
        <Heading>{heading}</Heading>
        <Text weight="light">{description}</Text>
      </Box>
      {cta && (
        <Box css={{}}>
          <Link
            passHref
            href={cta.href}
          >
            <Button as="a" tone="forest">{cta.text}</Button>
          </Link>
        </Box>
      )}
    </Box>
  )
}
