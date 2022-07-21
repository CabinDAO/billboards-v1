import { configure, base } from "airtable";

configure({
  endpointUrl: process.env.AIRTABLE_ENDPOINT_URL,
  apiKey: process.env.AIRTABLE_API_KEY,
});

export const catalog = base(process.env.CATALOG_BASE_ID);
