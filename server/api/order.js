import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
    // const query = getQuery(event)   // this is for GET requests only
    const body = await readBody(event)  // this is for POST requests only

    // extracting data from POST request body
    var uid = body.uid 
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

    // retrieve user data
    const { data: session_data, error: session_error } = await supabase.auth.getSession()
    const user_id = session_data.session.user.identities[0].id

    if (order == 'LED') {
        let { data: reactor_runs, error: query_error } = await supabase
            .from('reactor_runs')
            .select('program')
            .eq('owner', user_id)
    
        return {
            order_response: reactor_runs[0].program.LED,
            user_id: user_id,
        }
    } else {
        return 'You have no programs available for this order'
    }
})