const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://localhost:3001";

const headers = {
  Accept: "application/json, text/plain, */*",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

const API_SERVICE = {
  post: {
    async login(username: string, password: string) {
      const response = fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers,
        //Passing arguments as an object-to-be-converted into a JSON object
        body: JSON.stringify({ username, password }),
      });

      return response;
    },

    async members(username: string, password: string) {
      const response = await fetch(`${API_URL}/members`, {
        method: "POST",
        headers,
        body: JSON.stringify({ username, password }),
      });

      return response;
    },

    async operations(authorization: string, username: string, value: number) {
      const response = await fetch(`${API_URL}/operations`, {
        method: "POST",
        headers: { ...headers, authorization },
        body: JSON.stringify({ username, value }),
      });

      return response;
    },
  },

  get: {
    async balance(username: string, authorization: string) {
      const response = fetch(`${API_URL}/members/balance`, {
        method: "GET",
        headers: { ...headers, authorization },
      });

      return response;
    },

    async transactions(
      authorization: string,
      method: string,
      recipient: string,
      receiver: string
    ) {
      const response = fetch(
        `${API_URL}/transactions?from=${recipient}&to=${receiver}&method=${method}`
      );

      return response;
    },
  },
};

export default API_SERVICE;
