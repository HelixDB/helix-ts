export interface HelixDBClient {
  url: string;
  apiKey: string | null;
  /**
   * Query the HelixDB API
   * @param endpoint - The endpoint to query
   * @param data - The data to send to the endpoint
   * @returns The response from the endpoint
   */
  query: (endpoint: string, data: HelixDBInput) => Promise<HelixDBResponse>;
}

export type HelixDBResponse = Record<string, any>;
export type HelixDBInput = Record<string, any>;

class HelixDB implements HelixDBClient {
  url: string;
  apiKey: string | null;
  /**
   * Create a new HelixDB client
   * @param url - The url of the HelixDB server (default: `http://localhost:6969`)
   * @param apiKey - The api key of the HelixDB server (default: `null`)
   */
  constructor(url: string = "http://localhost:6969", apiKey: string | null = null) {
    this.url = url;
    this.apiKey = apiKey;
  }

  async query(endpoint: string, data: HelixDBInput): Promise<HelixDBResponse> {
    const response = await fetch(`${this.url}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(this.apiKey ? { "x-api-key": this.apiKey } : {}),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default HelixDB;
