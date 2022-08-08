import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { FieldSet, Attachment, Thumbnail } from "airtable";
import Head from "next/head";
import { styled, Heading, Text, Button, Box } from "@cabindao/topo";
import { getBillboards } from "@api/billboards";
import CatalogItem from "@components/CatalogItem";
import Layout from "@components/Layout";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const records: FieldSet[] = await getBillboards();

  return {
    props: {
      records,
    },
  };
};

type Props = {
  records: FieldSet[];
};
const Neighborhoods: NextPage<Props> = ({ records }) => {
  return (
    <Layout headingText="neighborhoods">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box css={{ mb: "$12" }}>
          <Box css={{ mr: "auto", maxWidth: 600 }}>
            <Heading>Neighborhoods</Heading>
            <Text weight="light">
              Cabin is made up of independently owned and operated
              neighborhoods: co-living communities with strong communities,
              access to nature, and fast internet.
            </Text>
          </Box>
          <Box css={{}}>
            <Link
              passHref
              href="https://creatorcabins.typeform.com/to/LbSGqEzL?typeform-source=www.google.com"
            >
              <Button
                tone="forest"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Neighborhood
              </Button>
            </Link>
          </Box>
        </Box>

        <Box
          css={{
            display: "grid",
            columnGap: "$4",
            rowGap: "$4",
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
          {records.map((record, i) => (
            <div key={i}>
              <CatalogItem {...record} />
            </div>
          ))}
        </Box>

        <Box
          css={{
            mt: "$20",
            mb: "$4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            passHref
            href="https://creatorcabins.typeform.com/to/LbSGqEzL?typeform-source=www.google.com"
          >
            <Button
              tone="forest"
              as="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a Neighborhood
            </Button>
          </Link>
        </Box>
      </main>
    </Layout>
  );
};

export default Neighborhoods;
