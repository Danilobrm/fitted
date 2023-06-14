import {api} from '../api/api';

export class APIHelpers {
  async post(url: string, data: object) {
    try {
      const post = await api.post(url, data);

      return post;
    } catch (error: any) {
      return error.response;
    }
  }
}

export default APIHelpers;
