import  app  from "./../src/app"
import supertest from "supertest"

const api = supertest(app);

describe("GET /health", () => {
    it("health", async () => {
        const result = await api.get("/health");
        expect(result.status).toEqual(200);
        expect(result.text).toBe("OK!");
    })
})