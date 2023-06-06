export default defineEventHandler(async (event) => {
  // const query = getQuery(event)   // this is for GET requests only
  const body = await readBody(event)  // this is for POST requests only
    return {
      status: 'working',
      uid: body.uid, // extracting data from url
      pwd: body.pwd,
      order: body.order
    }
  })