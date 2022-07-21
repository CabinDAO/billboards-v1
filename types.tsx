export type Billboard = {
  Name: string;
  Status: string;
  URL: string;
  Description: string;
  "Cover Image": [Attachment];
  Caretakers: [string];
  Country: string;
  "Neighborhood Type": string;
  Capacity: number;
  "Name (from Caretakers)": [string];
};

export type Attachment = {
  id: string;
  url: string;
  filename: string;
  size: number;
  type: string;
  width?: number;
  height?: number;
  thumbnails: { [key: string]: Thumbnail };
};

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};
