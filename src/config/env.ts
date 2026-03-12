// In a real application, you would use a library like Zod to validate environment variables.
// For this example, we'll just export them directly.

export const env = {
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
};
