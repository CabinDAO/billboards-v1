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
import { Billboard } from "@types";

export default function BillboardCard(props: Billboard) {
  let imageUrl = props["Cover Image"][0].thumbnails["large"].url;

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
