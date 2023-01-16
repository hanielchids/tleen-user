/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
          owner
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          userId
          carId
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      userId
      user {
        id
        username
        email
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
          owner
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        type
        status
        originLatitude
        originLongitude
        destLatitude
        destLongitude
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
          owner
        }
        carId
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCards = /* GraphQL */ `
  query GetCards($id: ID!) {
    getCards(id: $id) {
      id
      cardName
      cardNumber
      cardColor
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cardName
        cardNumber
        cardColor
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive
      userId
      user {
        id
        username
        email
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          userId
          carId
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
          owner
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
