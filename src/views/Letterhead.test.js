/* eslint-env jest */
import { visit } from './testUtils'
describe('Letterhead Page', () => {
  it('loads in /letterhead', async () => {
    const page = visit('/letterhead')
    await page.end()
  })
})
