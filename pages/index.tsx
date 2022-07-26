import type { NextPage } from "next";
import Head from "next/head";
import { styled, theme, Box, Card, CardBody, CardHeader, Heading, Text } from "@cabindao/topo";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import hexToRgba from "hex-to-rgba";
import Link from "next/link";
import Layout from "@components/Layout";
import Hero from "@components/Hero"

type Props = {};
const Home: NextPage<Props> = () => {

  return (
    <Layout>
      <Head>
        <title>Cabinverse</title>
        <meta name="description" content="Catalog of the Cabin ecosystem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Hero
          heading="Welcome to the Cabin-verse!"
          description="This is the catalog of the Cabin ecosystem. You'll find all our current neighborhoods and outposts here as well as any upcoming programs across all our locations."
        />


        <Box
          css={{
            display: "grid",
            rowGap: "$4",
            columnGap: "$4",
            "@md": {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
            "@lg": {
              gridTemplateColumns: "repeat(3, 1fr)",
            },
            "@xxl": {
              gridTemplateColumns: "repeat(4, 1fr)",
            },
          }}
        >
          <Link href="/neighborhood" passHref>
            <Card as="a">
              <CardBody
                css={{
                  backgroundImage: `linear-gradient( ${hexToRgba(
                    theme.colors.sand,
                    0.5,
                  )}, ${hexToRgba(theme.colors.sand, 0.5)} ), url("/cover-images/neighborhood.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <AspectRatio.Root />
              </CardBody>
              <CardHeader>Neighborhoods</CardHeader>
            </Card>
          </Link>

          <Link href="/outpost" passHref>
            <Card as="a">
              <CardBody
                css={{
                  backgroundImage: `linear-gradient( ${hexToRgba(
                    theme.colors.sand,
                    0.5,
                  )}, ${hexToRgba(theme.colors.sand, 0.5)} ), url("/cover-images/outpost.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <AspectRatio.Root />
              </CardBody>
              <CardHeader>Outposts</CardHeader>
            </Card>
          </Link>
        </Box>
      </main>
    </Layout>
  );
};

export default Home;
