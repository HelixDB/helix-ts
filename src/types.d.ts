export interface HelixDBClient {
    port: number;
    /**
     * Query the HelixDB API
     * @param endpoint - The endpoint to query
     * @param data - The data to send to the endpoint
     * @returns The response from the endpoint
     */
    query: (endpoint: string, data: HelixDBInput) => Promise<HelixDBResponse>;
}

export type HelixDBResponse= Record<string, any>;
export type HelixDBInput= Record<string, any>;