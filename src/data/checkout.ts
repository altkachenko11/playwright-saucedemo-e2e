export const checkoutData = {
  validCustomer: {
    firstName: "Test",
    lastName: "User",
    postalCode: "12345",
  },

  missingPostalCode: {
    firstName: "Test",
    lastName: "User",
    postalCode: "",
  },
} as const;
