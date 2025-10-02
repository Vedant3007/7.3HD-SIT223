const request = require('supertest')
const app = require('../src/app')

describe('simple-devops-app', () => {
  it('GET / returns welcome JSON', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.body.message).toMatch(/Welcome/)
  })

  it('GET /health returns ok', async () => {
    const res = await request(app).get('/health')
    expect(res.status).toBe(200)
    expect(res.body.status).toBe('ok')
  })

  it('GET /api/items returns array', async () => {
    const res = await request(app).get('/api/items')
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body.length).toBeGreaterThanOrEqual(1)
  })
})
