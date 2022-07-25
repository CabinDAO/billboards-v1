import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { FieldSet } from "airtable";
import {Billboard} from "@types"
import Head from "next/head";
import { styled, Heading, Box } from "@cabindao/topo";
import { getBillboards } from "@api/billboards";
import BillboardCard from "@components/BillboardCard";

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
const Home: NextPage<Props> = ({ records }) => {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Test</Heading>
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
              <BillboardCard 
                {...record}
              />
            </div>
          ))}
        </Box>
      </main>
    </Box>
  );
};

export default Home;
