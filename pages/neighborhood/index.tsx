import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { FieldSet, Attachment, Thumbnail } from "airtable";
import Head from "next/head";
import { styled, Heading, Box } from "@cabindao/topo";
import { getBillboards } from "@api/billboards";
import CatalogItem from "@components/CatalogItem";
import Layout from "@components/Layout";

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
  console.log(records);

  return (
    <Layout headingText="catalog / neighborhoods">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box
          css={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: "$6",
            rowGap: "$8",
          }}
        >
          {records.map((record, i) => (
            <div key={i}>
              <CatalogItem {...record} />
            </div>
          ))}
        </Box>
      </main>
    </Layout>
  );
};

export default Neighborhoods;
