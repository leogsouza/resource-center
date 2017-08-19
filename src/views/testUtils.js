import nightmare from 'nightmare'

export const visit = path => {
  const config = {
    // Try changing this to true and run the tests
    // It is pretty cool
    show: true,
    // From the docs: Note that, even though goto normally waits
    // for all the resources from a page to load, a timeout exception
    // is only raised if the DOM itself has not yet loaded
    gotoTimeout: 4000
  }
  return nightmare(config).goto(`http://localhost:3000${path}`)
}
