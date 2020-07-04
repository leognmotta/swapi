import { AxiosResponse } from 'axios';

import HttpClient from '../HttpClient';
import { Planets, Options } from './interfaces';

class Swapi extends HttpClient {
  public async getAllPlanets(options?: Options): Promise<Planets[]> {
    try {
      const res: AxiosResponse<Planets[]> = await this.get<
        Planets,
        AxiosResponse<Planets[]>
      >('planets/', {
        params: { options },
      });

      return this.success(res);
    } catch (error) {
      throw error;
    }
  }

  public async getPlanet(id: number): Promise<Planets> {
    try {
      const res: AxiosResponse<Planets> = await this.get<
        Planets,
        AxiosResponse<Planets>
      >(`planets/${id}/`);

      return this.success(res);
    } catch (error) {
      throw error;
    }
  }
}

export default new Swapi({ baseURL: 'https://swapi.dev/api/' });
