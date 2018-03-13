const { startServer, stopServer, handleAgentError } = require('../test/specHelper')

let supertest

beforeAll(async () => {
  const specHelper = await startServer()
  supertest = specHelper.supertest
})

afterAll(() => stopServer())

describe('Basic API functions', () => {
  test('health check', async () => {
    await supertest
      .get('/health')
      .expect(200)
      .catch(handleAgentError)
  })
})
