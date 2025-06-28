import { HelixDBClient, HelixDBInput, HelixDBResponse } from "./types";

class HelixDB implements HelixDBClient {
    url: string;

    /**
     * Create a new HelixDB client
     * @param url - The url of the HelixDB server
     * 
     * (default: `https://localhost:6969`)
     */
    constructor(url: string = "https://localhost:6969") {
        this.url = url;
    }

    async query(endpoint: string, data: HelixDBInput): Promise<HelixDBResponse> {
        const response = await fetch(`${this.url}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
}

export default HelixDB;
