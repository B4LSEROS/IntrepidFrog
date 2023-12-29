const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:3001';

const headers = {
    Accept: 'application/json, text/plain, */*',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
};

const API_SERVICE = {
    post : {
        async login(username: string, password: string) {
            const response = fetch(`${API_URL}/user/login`, 
            {
                method: 'POST',
                headers,
                //Passing arguments as an object-to-be-converted into a JSON object
                body: JSON.stringify({username, password})
            });

            return response;
        },
    }
}


export default API_SERVICE;