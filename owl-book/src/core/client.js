import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        "Authorization": "bearer d30b090f69f63aed1789326eaccd14aedb8e03f3"
    }
});