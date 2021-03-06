/* eslint-env jest */
import { visit } from './testUtils'
describe('Letterhead Page', () => {
  it('loads in /letterhead', async () => {
    const page = visit('/letterhead')
    await page.end()
  })

  it('has 4 letterheads', async () => {
    const page = visit('/letterhead')
    const letterheadCount = await page
      .wait('.letterhead-card')
      .evaluate(() => document.querySelectorAll('.letterhead-card').length)
      .end()
    expect(letterheadCount).toEqual(4)
  })

  it('has 4 images from placeimg.com', async () => {
    const page = visit('/letterhead')
    const selector = '.letterhead-card img[src*="unsplash.it"]'
    const letterheadCount = await page
      .wait(selector)
      .evaluate(sel => document.querySelectorAll(sel).length, selector)
      .end()

    expect(letterheadCount).toEqual(4)
  })

  it('has at least one letterhead with a button', async () => {
    const page = visit('/letterhead')
    const buttonIsVisible = await page.visible('.letterhead-card button').end()

    expect(buttonIsVisible).toEqual(true)
  })

  it('has some text before letterheads', async () => {
    const page = visit('/letterhead')
    const textIsVisible = await page
      .visible('.container > .row:first-child p')
      .end()

    expect(textIsVisible).toEqual(true)
  })
})
