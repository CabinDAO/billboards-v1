import {
  styled,
  theme,
  Box,
  Text,
  Heading,
  Card,
  CardBody,
  CardHeader,
  Tag,
} from "@cabindao/topo";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import hexToRgba from "hex-to-rgba";
import { FieldSet, Attachment } from "airtable";

export default function CatalogItem(props: FieldSet) {
  let attachments: ReadonlyArray<Attachment> = props[
    "Cover Image"
  ] as ReadonlyArray<Attachment>;
  let attatchment: Attachment = attachments[0] as Attachment;
  let imageUrl = attatchment?.thumbnails?.large?.url;

  const neighborhoodType = props["Neighborhood Type"] as ReadonlyArray<String>;
  const type = neighborhoodType[0] as string;

  return (
    <a href={props.URL as string} target="_blank" rel="noopener noreferrer">
      <Card>
        <CardBody
          css={{
            backgroundImage: `linear-gradient( ${hexToRgba(
              theme.colors.sand,
              0.5,
            )}, ${hexToRgba(theme.colors.sand, 0.5)} ), url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <AspectRatio.Root ratio={2/1}/>
        </CardBody>
        <CardHeader>
          <Heading css={{fontSize: "$xl", fontWeight: "$light"}}>{props.Name as string}</Heading>
          <Box css={{mt: "$2"}}>
            <Tag tone="wheat">{type}</Tag>
          </Box>
        </CardHeader>
      </Card>
    </a>
  );
}
