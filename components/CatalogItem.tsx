import {
  styled,
  Text,
  Heading,
  Card,
  CardBody,
  CardHeader,
  theme,
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
          <AspectRatio.Root />
        </CardBody>
        <CardHeader>
          <Heading>{props.Name as string}</Heading>
        </CardHeader>
      </Card>
    </a>
  );
}
