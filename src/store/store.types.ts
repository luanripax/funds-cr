import { AuthState } from "./modules/auth/auth.slice";
import { FundsState } from "./modules/funds/funds.slice";

export interface RootState {
  auth: AuthState;
  funds: FundsState;
}
