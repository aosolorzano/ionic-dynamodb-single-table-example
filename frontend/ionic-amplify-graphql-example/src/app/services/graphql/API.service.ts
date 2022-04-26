/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateSingleTableInput = {
  pk: string;
  sk: string;
  gsi1pk: string;
  gsi1sk: string;
  location?: LocationVOInput | null;
  company?: CompanyVOInput | null;
  openPosition?: OpenPositionVOInput | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type LocationVOInput = {
  country: string;
  flagImageUrl: string;
};

export type CompanyVOInput = {
  city: string;
  name: string;
  industry: string;
  url: string;
};

export type OpenPositionVOInput = {
  title: string;
  seniority: string;
  field: string;
  skills: string;
};

export type ModelSingleTableConditionInput = {
  gsi1pk?: ModelIDInput | null;
  gsi1sk?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelSingleTableConditionInput | null> | null;
  or?: Array<ModelSingleTableConditionInput | null> | null;
  not?: ModelSingleTableConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type SingleTable = {
  __typename: "SingleTable";
  pk: string;
  sk: string;
  gsi1pk: string;
  gsi1sk: string;
  location?: LocationVO | null;
  company?: CompanyVO | null;
  openPosition?: OpenPositionVO | null;
  createdAt: string;
  updatedAt?: string | null;
};

export type LocationVO = {
  __typename: "LocationVO";
  country: string;
  flagImageUrl: string;
};

export type CompanyVO = {
  __typename: "CompanyVO";
  city: string;
  name: string;
  industry: string;
  url: string;
};

export type OpenPositionVO = {
  __typename: "OpenPositionVO";
  title: string;
  seniority: string;
  field: string;
  skills: string;
};

export type UpdateSingleTableInput = {
  pk: string;
  sk: string;
  gsi1pk?: string | null;
  gsi1sk?: string | null;
  location?: LocationVOInput | null;
  company?: CompanyVOInput | null;
  openPosition?: OpenPositionVOInput | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteSingleTableInput = {
  pk: string;
  sk: string;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelSingleTableFilterInput = {
  pk?: ModelIDInput | null;
  sk?: ModelStringInput | null;
  gsi1pk?: ModelIDInput | null;
  gsi1sk?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelSingleTableFilterInput | null> | null;
  or?: Array<ModelSingleTableFilterInput | null> | null;
  not?: ModelSingleTableFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelSingleTableConnection = {
  __typename: "ModelSingleTableConnection";
  items: Array<SingleTable | null>;
  nextToken?: string | null;
};

export type CreateSingleTableMutation = {
  __typename: "SingleTable";
  pk: string;
  sk: string;
  gsi1pk: string;
  gsi1sk: string;
  location?: {
    __typename: "LocationVO";
    country: string;
    flagImageUrl: string;
  } | null;
  company?: {
    __typename: "CompanyVO";
    city: string;
    name: string;
    industry: string;
    url: string;
  } | null;
  openPosition?: {
    __typename: "OpenPositionVO";
    title: string;
    seniority: string;
    field: string;
    skills: string;
  } | null;
  createdAt: string;
  updatedAt?: string | null;
};

export type UpdateSingleTableMutation = {
  __typename: "SingleTable";
  pk: string;
  sk: string;
  gsi1pk: string;
  gsi1sk: string;
  location?: {
    __typename: "LocationVO";
    country: string;
    flagImageUrl: string;
  } | null;
  company?: {
    __typename: "CompanyVO";
    city: string;
    name: string;
    industry: string;
    url: string;
  } | null;
  openPosition?: {
    __typename: "OpenPositionVO";
    title: string;
    seniority: string;
    field: string;
    skills: string;
  } | null;
  createdAt: string;
  updatedAt?: string | null;
};

export type DeleteSingleTableMutation = {
  __typename: "SingleTable";
  pk: string;
  sk: string;
  gsi1pk: string;
  gsi1sk: string;
  location?: {
    __typename: "LocationVO";
    country: string;
    flagImageUrl: string;
  } | null;
  company?: {
    __typename: "CompanyVO";
    city: string;
    name: string;
    industry: string;
    url: string;
  } | null;
  openPosition?: {
    __typename: "OpenPositionVO";
    title: string;
    seniority: string;
    field: string;
    skills: string;
  } | null;
  createdAt: string;
  updatedAt?: string | null;
};

export type GetSingleTableQuery = {
  __typename: "SingleTable";
  pk: string;
  sk: string;
  gsi1pk: string;
  gsi1sk: string;
  location?: {
    __typename: "LocationVO";
    country: string;
    flagImageUrl: string;
  } | null;
  company?: {
    __typename: "CompanyVO";
    city: string;
    name: string;
    industry: string;
    url: string;
  } | null;
  openPosition?: {
    __typename: "OpenPositionVO";
    title: string;
    seniority: string;
    field: string;
    skills: string;
  } | null;
  createdAt: string;
  updatedAt?: string | null;
};

export type ListSingleTablesQuery = {
  __typename: "ModelSingleTableConnection";
  items: Array<{
    __typename: "SingleTable";
    pk: string;
    sk: string;
    gsi1pk: string;
    gsi1sk: string;
    location?: {
      __typename: "LocationVO";
      country: string;
      flagImageUrl: string;
    } | null;
    company?: {
      __typename: "CompanyVO";
      city: string;
      name: string;
      industry: string;
      url: string;
    } | null;
    openPosition?: {
      __typename: "OpenPositionVO";
      title: string;
      seniority: string;
      field: string;
      skills: string;
    } | null;
    createdAt: string;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetItemByGSIQuery = {
  __typename: "ModelSingleTableConnection";
  items: Array<{
    __typename: "SingleTable";
    pk: string;
    sk: string;
    gsi1pk: string;
    gsi1sk: string;
    location?: {
      __typename: "LocationVO";
      country: string;
      flagImageUrl: string;
    } | null;
    company?: {
      __typename: "CompanyVO";
      city: string;
      name: string;
      industry: string;
      url: string;
    } | null;
    openPosition?: {
      __typename: "OpenPositionVO";
      title: string;
      seniority: string;
      field: string;
      skills: string;
    } | null;
    createdAt: string;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateSingleTable(
    input: CreateSingleTableInput,
    condition?: ModelSingleTableConditionInput
  ): Promise<CreateSingleTableMutation> {
    const statement = `mutation CreateSingleTable($input: CreateSingleTableInput!, $condition: ModelSingleTableConditionInput) {
        createSingleTable(input: $input, condition: $condition) {
          __typename
          pk
          sk
          gsi1pk
          gsi1sk
          location {
            __typename
            country
            flagImageUrl
          }
          company {
            __typename
            city
            name
            industry
            url
          }
          openPosition {
            __typename
            title
            seniority
            field
            skills
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSingleTableMutation>response.data.createSingleTable;
  }
  async UpdateSingleTable(
    input: UpdateSingleTableInput,
    condition?: ModelSingleTableConditionInput
  ): Promise<UpdateSingleTableMutation> {
    const statement = `mutation UpdateSingleTable($input: UpdateSingleTableInput!, $condition: ModelSingleTableConditionInput) {
        updateSingleTable(input: $input, condition: $condition) {
          __typename
          pk
          sk
          gsi1pk
          gsi1sk
          location {
            __typename
            country
            flagImageUrl
          }
          company {
            __typename
            city
            name
            industry
            url
          }
          openPosition {
            __typename
            title
            seniority
            field
            skills
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSingleTableMutation>response.data.updateSingleTable;
  }
  async DeleteSingleTable(
    input: DeleteSingleTableInput,
    condition?: ModelSingleTableConditionInput
  ): Promise<DeleteSingleTableMutation> {
    const statement = `mutation DeleteSingleTable($input: DeleteSingleTableInput!, $condition: ModelSingleTableConditionInput) {
        deleteSingleTable(input: $input, condition: $condition) {
          __typename
          pk
          sk
          gsi1pk
          gsi1sk
          location {
            __typename
            country
            flagImageUrl
          }
          company {
            __typename
            city
            name
            industry
            url
          }
          openPosition {
            __typename
            title
            seniority
            field
            skills
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSingleTableMutation>response.data.deleteSingleTable;
  }
  async GetSingleTable(pk: string, sk: string): Promise<GetSingleTableQuery> {
    const statement = `query GetSingleTable($pk: ID!, $sk: String!) {
        getSingleTable(pk: $pk, sk: $sk) {
          __typename
          pk
          sk
          gsi1pk
          gsi1sk
          location {
            __typename
            country
            flagImageUrl
          }
          company {
            __typename
            city
            name
            industry
            url
          }
          openPosition {
            __typename
            title
            seniority
            field
            skills
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      pk,
      sk
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSingleTableQuery>response.data.getSingleTable;
  }
  async ListSingleTables(
    pk?: string,
    sk?: ModelStringKeyConditionInput,
    filter?: ModelSingleTableFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListSingleTablesQuery> {
    const statement = `query ListSingleTables($pk: ID, $sk: ModelStringKeyConditionInput, $filter: ModelSingleTableFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listSingleTables(pk: $pk, sk: $sk, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            pk
            sk
            gsi1pk
            gsi1sk
            location {
              __typename
              country
              flagImageUrl
            }
            company {
              __typename
              city
              name
              industry
              url
            }
            openPosition {
              __typename
              title
              seniority
              field
              skills
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (pk) {
      gqlAPIServiceArguments.pk = pk;
    }
    if (sk) {
      gqlAPIServiceArguments.sk = sk;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSingleTablesQuery>response.data.listSingleTables;
  }
  async GetItemByGSI(
    gsi1pk: string,
    gsi1sk?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelSingleTableFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetItemByGSIQuery> {
    const statement = `query GetItemByGSI($gsi1pk: ID!, $gsi1sk: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelSingleTableFilterInput, $limit: Int, $nextToken: String) {
        getItemByGSI(gsi1pk: $gsi1pk, gsi1sk: $gsi1sk, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            pk
            sk
            gsi1pk
            gsi1sk
            location {
              __typename
              country
              flagImageUrl
            }
            company {
              __typename
              city
              name
              industry
              url
            }
            openPosition {
              __typename
              title
              seniority
              field
              skills
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      gsi1pk
    };
    if (gsi1sk) {
      gqlAPIServiceArguments.gsi1sk = gsi1sk;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetItemByGSIQuery>response.data.getItemByGSI;
  }
}
