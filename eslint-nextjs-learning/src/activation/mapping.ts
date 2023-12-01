import { CSSProperties } from "react";
import { readFile } from "@/middleware/read-file";

export type MappingType = {
  [key: string]: {
    name: string;
    codeFile: string;
    iconOffset: number;
  };
};
export type Mapping = {
  [key: string]: {
    name: string;
    activationCode: string;
    iconStyle: CSSProperties;
  };
};
const codePathPrefix = "/public/activation/code/";
export const mapping: MappingType = {
  intelliJIdea: {
    name: "IntelliJ IDEA",
    codeFile: "intelli-j-idea",
    iconOffset: 7,
  },
  webStorm: {
    name: "WebStorm",
    codeFile: "web-storm",
    iconOffset: 15,
  },
  cLion: {
    name: "CLion",
    codeFile: "c-lion",
    iconOffset: 4,
  },
  pyCharm: {
    name: "PyCharm",
    codeFile: "py-charm",
    iconOffset: 9,
  },
  goLand: {
    name: "GoLand",
    codeFile: "go-land",
    iconOffset: 6,
  },
  phpStorm: {
    name: "PhpStorm",
    codeFile: "php-storm",
    iconOffset: 8,
  },
  appCode: {
    name: "AppCode",
    codeFile: "app-code",
    iconOffset: 3,
  },
  dataGrip: {
    name: "DataGrip",
    codeFile: "data-grip",
    iconOffset: 5,
  },
  dataSpell: {
    name: "DataSpell",
    codeFile: "data-spell",
    iconOffset: 28,
  },
  rubyMine: {
    name: "RubyMine",
    codeFile: "ruby-mine",
    iconOffset: 14,
  },
  rider: {
    name: "Rider",
    codeFile: "rider",
    iconOffset: 13,
  },
  dotCover: {
    name: "DotCover",
    codeFile: "dot-cover",
    iconOffset: 12,
  },
  dotMemory: {
    name: "DotMemory",
    codeFile: "dot-memory",
    iconOffset: 23,
  },
  dotTrace: {
    name: "DotTrace",
    codeFile: "dot-trace",
    iconOffset: 24,
  },
};

const readActivationCode = (filename: string) => {
  return readFile(codePathPrefix + filename);
};
export const getMapping = (): Mapping => {
  const result: Mapping = {};
  Object.entries(mapping).forEach(([key, value]) => {
    result[key] = {
      name: value.name,
      activationCode: readActivationCode(value.codeFile),
      iconStyle: {
        backgroundPosition: `0 -${value.iconOffset * 64}px`,
      },
    };
  });
  return result;
};

export const dataMapping = getMapping();
