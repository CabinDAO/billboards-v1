import { styled, Card } from "@cabindao/topo";
import { Billboard } from "@types";

export default function BillboardCard(props: Billboard) {
  return <li>{props.Name}</li>;
}
