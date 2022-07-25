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

export default function BillboardCard(props: FieldSet) {
  console.log(props["Cover Image"])
  let attachments: ReadonlyArray<Attachment> = props["Cover Image"]
  let attatchment: Attachment = attachments[0];
  let imageUrl = attatchment.thumbnails["large"].url;

  return (
    <a href={props.URL} target="_blank" rel="noopener noreferrer">
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
          <Heading>{props.Name}</Heading>
        </CardHeader>
      </Card>
    </a>
  );
}
