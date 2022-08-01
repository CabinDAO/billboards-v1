// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { catalog } from "@utils/airtable";
import { FieldSet } from "airtable";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FieldSet[]>,
) {
  const data: FieldSet[] = await getBillboards();

  console.log(data);

  res.status(200).json(data);
}

export async function getBillboards(): Promise<FieldSet[]> {
  console.log(catalog.table)

  return catalog("Billboards")
    .select({
      view: "Grid view",
    })
    .firstPage()
    .then((records) => {
      return records?.map((record) => ({ ...record.fields }));
    })
    .catch((e) => {
      console.log(e);
      throw new Error(e);
    });
}
