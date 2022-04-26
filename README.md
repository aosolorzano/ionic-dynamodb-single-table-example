## What is it?
This project uses Amplify Framework to generate an AWS GraphQL API and a DynamoDB Single Table.

## Detailed components' creation/modification
You can find more detail of the configurations and components coded in this project in the following post:
[Using the Single Table design on AWS DynamoDB](https://aosolorzano.medium.com/using-the-single-table-design-on-aws-dynamodb-65a9480bd0c5).

## Requirements
1. An AWS account.
2. [Git](https://git-scm.com/downloads).
5. [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
6. [Amplify CLI](https://docs.amplify.aws/cli/start/install).
3. OpenJDK 17. You can use [SDK Man](https://sdkman.io/install).
4. [Maven](https://maven.apache.org/download.cgi).


## Configuring Amplify for your AWS account
First, you need to initialize the Ionic/Angular project in the frontend folder:
```
amplify configure
amplify init
```
The previous command ask you to select your AWS profile installed in your local machine to deploy infra in your AWS account and region.

*NOTE:* If the previous command shows that there is a new version of Amplify CLI, try to update it first and then install Amplify again:
```
amplify upgrade
sudo npm install -g @aws-amplify/cli
```

## Configure GraphQL API
First, you need to configure the API integration for the app, selected GraphQL as desired one:
```
amplify add api
```
Then, you need to modify the *amplify/backend/api/ionicdynamosingletbl/schema.graphql* file adding the following content:
```
# This "input" configures a global authorization rule to enable public access to
# all models in this schema. Learn more about authorization rules here: https://docs.amplify.aws/cli/graphql/authorization-rules
input AMPLIFY { globalAuthRule: AuthRule = { allow: public } } # FOR TESTING ONLY!

type SingleTable @model(subscriptions: { level: off }, timestamps: null) {
  pk: ID! @primaryKey(sortKeyFields: ["sk"])
  sk: String!
  gsi1pk: ID! @index(name: "gsi1pk", sortKeyFields: ["gsi1sk"], queryField: "getItemByGSI")
  gsi1sk: String!
  location: LocationVO
  company: CompanyVO
  openPosition: OpenPositionVO
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime
}

type LocationVO {
  country: String!
  flagImageUrl: String!
}

type CompanyVO {
  city: String!
  name: String!
  industry: String!
  url: String!
}

type OpenPositionVO {
  title: String!
  seniority: String!
  field: String!
  skills: String!
}

```
This content creates a Single table on DynamoDB, and we will be using it to interact with our app. 

## Loading testing data
You can load initial data to test this app. If so, run the Java Faker project in the backend folder:
```
mvn clean package
java -jar target/java-faker-dynamodb-example.jar
```

## Build and deploy the project locally
```
ionic build
ionic serve
```
