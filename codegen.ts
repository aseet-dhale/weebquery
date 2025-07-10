import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphql.anilist.co",
  documents: "src/graphql/*.graphql",
  generates: {
    "./src/generated/graphql/": {
      preset: "client",
      presetConfig: {
        reactApolloVersion: 3,
        gqlTagName: "gql",
      },
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
        nonOptionalTypename: true,
      },
    },
  },
};

export default config;
