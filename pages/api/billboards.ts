// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { catalog } from "../../utils/airtable";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await getData();
  console.log("data api: ", data)

  res.status(200).json(data);
}

export async function getData() {
  return catalog("Billboards")
    .select({
      view: "Grid view",
    })
    .firstPage().then(
      (records) => {
        const list = records?.map(record => ({ ...record.fields }))
        return list
      }
    )
}
