export default defineEventHandler((event) => {
  const query = getQuery(event)
    return {
      status: 'working',
      param_1: query.param_1, // extracting data from url
      param_2: query.param_2
    }
  })