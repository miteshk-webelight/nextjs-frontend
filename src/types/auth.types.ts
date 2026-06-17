export type AuthUser = {
  id: string;
  name: string;
  email: string;
};

export type UseAuthReturn = {
  isAuthenticated: boolean;
  user: AuthUser | null;
};
