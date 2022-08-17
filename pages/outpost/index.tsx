import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { FieldSet } from "airtable";
import Head from "next/head";
import { Heading, Text, Button, Box } from "@cabindao/topo";
import { getBillboards } from "@api/billboards";
import CatalogItem from "@components/CatalogItem";
import Layout from "@components/Layout";
import Link from "next/link";
import Hero from "@components/Hero";

export const getServerSideProps: GetServerSideProps = async () => {
  let records: FieldSet[] = await getBillboards();

  records = records.filter(record => record['Type'] === 'Outpost')

  return {
    props: {
      records,
    },
  };
};

type Props = {
  records: FieldSet[];
};
const Outposts: NextPage<Props> = ({ records }) => {

  return (
    <Layout headingText="outposts">
      <Head>
        <title>Cabinverse: Outposts</title>
        <meta name="description" content="Catalog of the Cabin ecosystem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          heading="Outpost"
          description="While Cabin is primarily made up of independently owned and operated neighborhoods, some members of the network are still getting established. We call these Outposts."
          cta={{
            href: "https://creatorcabins.typeform.com/to/LbSGqEzL?typeform-source=cabin-catalog",
            text: "Become an Outpost"
          }}
        />

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
            >
              Become an Outpost
            </Button>
          </Link>
        </Box>
      </main>
    </Layout>
  );
};

export default Outposts;

