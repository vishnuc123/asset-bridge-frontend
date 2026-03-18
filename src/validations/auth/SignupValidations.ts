export const signupValidation = {
  name: {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Minimum 3 characters",
    },
  },

  email: {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email format",
    },
  },

  password: {
    required: "Password required",
    minLength: {
      value: 6,
      message: "Minimum 6 characters",
    },
  },
};