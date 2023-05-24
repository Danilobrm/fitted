import {api} from '../api/api';

export class APIHelpers {
  async create(url: string, data: object) {
    const response = await api.post(url, data);

    return response;
  }
}

const apiActions = new APIHelpers();

export default apiActions;
