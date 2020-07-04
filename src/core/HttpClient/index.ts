import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

class HttpClient {
  api: AxiosInstance;

  public constructor(confing?: AxiosRequestConfig) {
    this.api = axios.create(confing);
  }

  public get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.get(url, config);
  }

  public success<T>(response: AxiosResponse<T>): T {
    return response.data;
  }
}

export default HttpClient;
