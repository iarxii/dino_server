Deno.serve((_req) => {
    return new Response("Welcome to the Dino Server");
});

// Listening on a specific port:
// By default Deno.serve will listen on port 8000, 
// but this can be changed by passing in a port number in 
// options bag as the first or second argument 👇:

/* // To listen on port 4242.
Deno.serve({ port: 4242 }, handler);

// To listen on port 4242 and bind to 0.0.0.0.
Deno.serve({ port: 4242, hostname: "0.0.0.0" }, handler); */

// Inspecting the incoming request:
// Most servers will not answer with the same response for every request. 
// Instead they will change their answer depending on various aspects of 
// the request: the HTTP method, the headers, the path, 
// or the body contents.
// The request is passed in as the first argument to the handler function. 
// Here is an example showing how to extract various parts of the request:

/* Deno.serve(async (req) => {
    console.log("Method:", req.method);

    const url = new URL(req.url);
    console.log("Path:", url.pathname);
    console.log("Query parameters:", url.searchParams);

    console.log("Headers:", req.headers);

    if (req.body) {
        const body = await req.text();
        console.log("Body:", body);
    }

    return new Response("Hello, World!");
}); */

