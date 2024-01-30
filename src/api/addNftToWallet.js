import axios from "redaxios";
// import { API_ROOT } from "../config";

export const addNftToWallet = async ({ email, assetId }) => {
    const API_ROOT="https://scbfmgolh6.execute-api.us-east-1.amazonaws.com/default/";
  try {
    const res = await axios.post(`${API_ROOT}/AddNftToWallet`, {
      email,
      assetId,
    });
    return res?.data?.insertId;
  } catch (error) {
    console.error(error);
  }
};
export default addNftToWallet;
