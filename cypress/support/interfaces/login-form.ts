export type LoginForm<OptionalFields extends boolean = false> =
  OptionalFields extends false
    ? {
        email: string;
        password: string;
      }
    : {
        email?: string;
        password?: string;
      };
