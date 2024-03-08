export const validationRules = {
  email: {
    required: {
      value: true,
      message: "Email is required.",
    },
    pattern: {
      value: /\S{4,}@(\S+\.\S{2,4})+(\.\S{2,4})?/,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
  },
};
