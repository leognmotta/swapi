import MockAdapter from 'axios-mock-adapter';

import Swapi from '../../core/Swapi';

const apiMock = new MockAdapter(Swapi.api);

describe('Swapi', () => {
  it('should return planet - sucess', async () => {
    const response = { name: 'planet' };

    apiMock.onGet('/planets/1/').replyOnce(200, response);

    const result = await Swapi.getPlanet(1);

    expect(result).toEqual(response);
  });

  it('should not return planet - 404 failure', async () => {
    const response = { detail: 'Not found' };

    apiMock.onGet('/planets/1000/').replyOnce(404, response);

    try {
      await Swapi.getPlanet(1000);
    } catch (error) {
      expect(error.response.data).toEqual(response);
    }
  });
});
