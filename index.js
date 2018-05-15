const { create } = require('axios');

class ClickUp {
  constructor(token, {
    baseURL = 'https://api.clickup.com/api/v1',
    debug = false
  } = {}) {
    this.client = create({
      baseURL,
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })

    if (debug) {
      this.client.interceptors.request.use(request => {
        console.log(request);
        return request;
      });
    }
  }

  async me() {
    const { data: { user } } = await this.client.get('/user')
    return user;
  }

  async newTask(listId, task) {
    try {
      const { data } = await this.client.post(`/list/${listId}/task`, {
        ...task
      })
      return data
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = ClickUp;
