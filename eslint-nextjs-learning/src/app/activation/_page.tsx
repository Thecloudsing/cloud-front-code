import { dataMapping } from "@/activation/mapping";
import Code from "@/app/activation/code";
const _page = () => {
  return <Code {...dataMapping} />;
};

export default _page;
