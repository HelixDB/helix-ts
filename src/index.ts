import { HelixDBClient, HelixDBInput, HelixDBResponse } from "./types";

class HelixDB implements HelixDBClient {
    port: number;
    constructor(port: number = 6969) {
        this.port = port;
    }

    async query(endpoint: string, data: HelixDBInput): Promise<HelixDBResponse> {
        const response = await fetch(`http://localhost:${this.port}/${endpoint}`, {
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
