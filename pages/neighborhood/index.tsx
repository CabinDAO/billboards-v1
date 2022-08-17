import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { FieldSet } from "airtable";
import Head from "next/head";
import { Heading, Text, Button, Box } from "@cabindao/topo";
import { getBillboards } from "@api/billboards";
import CatalogItem from "@components/CatalogItem";
import Layout from "@components/Layout";
import Hero from "@components/Hero"
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => {
  let records: FieldSet[] = await getBillboards();

  records = records.filter(record => record['Type'] === 'Neighborhood')

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
        <title>Cabinverse: Neighborhoods</title>
        <meta name="description" content="Catalog of the Cabin ecosystem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          heading="Neighborhoods"
          description="Cabin is made up of independently owned and operated neighborhoods: co-living communities with strong communities, access to nature, and fast internet."
          cta={{
            href: "https://creatorcabins.typeform.com/to/LbSGqEzL?typeform-source=cabin-catalog",
            text: "Become a Neighborhood"
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
              Become a Neighborhood
            </Button>
          </Link>
        </Box>
      </main>
    </Layout>
  );
};

export default Neighborhoods;
