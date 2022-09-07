export const axiosConfig = (apiEndpoint, headers, query) => ({
      url: apiEndpoint,
      method: 'post',
      headers: headers,
      data: query,
})