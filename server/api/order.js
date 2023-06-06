import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
    // const query = getQuery(event)   // this is for GET requests only
    const body = await readBody(event)  // this is for POST requests only
    var uid = body.uid // extracting data from url
    var pwd = body.pwd
    var order = body.order

    //creating the storage provider for use by supabase to store the auth tokens
    function inMemoryStorageProvider() {
        const items = new Map();
        return ({
          getItem: (key) => items.get(key),
          setItem: (key, value) => {
            items.set(key, value);
          },
          removeItem: (key) => {
            items.delete(key);
          },
        });
    }

    // create supabase client for temporary anon user
    const supabase = createClient(
        process.env.SUPABASE_URL, 
        process.env.SUPABASE_KEY,
        {
            auth: {
                storage: inMemoryStorageProvider()
            }
        }
        );

    // log in using the provided credentials
    let { data, error } = await supabase.auth.signInWithPassword({
        email: uid,
        password: pwd
    }) 

    const token = data.session.access_token // retrieve logged in users access token
    const { data: {user} } = await supabase.auth.getUser(token)
    const user_id = user.identities[0].id

    let { data: reactor_runs, error: query_error } = await supabase
            .from('reactor_runs')
            .select('program')
            .eq('owner', user_id)

    const { data: proof_session, error: proof_error } = await supabase.auth.getSession()
    
    return {
        order_response: reactor_runs,
        user_id: user_id,
        session: proof_session
    }
})