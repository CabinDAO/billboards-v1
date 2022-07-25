// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { catalog } from "@utils/airtable";
import { FieldSet } from "airtable";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FieldSet[]>,
) {
  const data: FieldSet[] = await getBillboards();

  res.status(200).json(data);
}

export async function getBillboards() {
  return catalog("Billboards")
    .select({
      view: "Grid view",
    })
    .firstPage()
    .then((records) => {
      const list = records?.map((record) => ({ ...record.fields }));
      return list;
    });
}
