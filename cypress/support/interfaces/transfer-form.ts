import { AccountData } from "./account-data";

export type TransferForm = {
  transferValue?: number;
  description?: string;
} & AccountData;
