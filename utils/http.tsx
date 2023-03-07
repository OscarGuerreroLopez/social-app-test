import axios, { AxiosRequestConfig } from "axios";

const headerConfig = (token: string, cancelToken = null) =>
  cancelToken
    ? { headers: { Authorization: `Bearer ${token}` }, cancelToken }
    : { headers: { Authorization: `Bearer ${token}` } };

export const axiosFetcher = async (
  url: string,
  config: AxiosRequestConfig = {},
  token?: string | undefined
) => {
  token && Object.assign(config, headerConfig(token));

  const { method } = config;
  const response = await axios({
    url,
    responseType: "json",
    method,
    ...config
  });

  return response.data;
};
