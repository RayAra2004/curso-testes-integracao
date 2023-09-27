import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })

  it("should return status 200 and body equal to [0, 1, 1, 2, 3, 5, 8], when elements equals 7", async () =>{
    const {status, body} = await api.get("/fibonacci?elements=7");
    expect(status).toBe(200);
    expect(body).toHaveLength(7);
    expect(body).toEqual([0, 1, 1, 2, 3, 5, 8]);
  })

  it("must return status 400, when elements is not passed", async() => {
    const {status} = await api.get("/fibonacci");
    expect(status).toBe(400);
  })
})