/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createCards = /* GraphQL */ `
  mutation CreateCards(
    $input: CreateCardsInput!
    $condition: ModelCardsConditionInput
  ) {
    createCards(input: $input, condition: $condition) {
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
export const updateCards = /* GraphQL */ `
  mutation UpdateCards(
    $input: UpdateCardsInput!
    $condition: ModelCardsConditionInput
  ) {
    updateCards(input: $input, condition: $condition) {
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
export const deleteCards = /* GraphQL */ `
  mutation DeleteCards(
    $input: DeleteCardsInput!
    $condition: ModelCardsConditionInput
  ) {
    deleteCards(input: $input, condition: $condition) {
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
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
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
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
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
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
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
