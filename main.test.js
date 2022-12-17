/**
 * @jest-environment jsdom
 */

import { sort, search, newsList } from "./main.js"

describe(`newsList variable test`, () => {
  test(`Should return as an array.`, () => {
    expect(newsList).toBeInstanceOf(Array)
  })
  test(`All elements in the array are strings.`, () => {
    newsList.forEach((item) => {
      expect(typeof item).toStrictEqual(`string`)
    })
  })
  test(`newsList does not contain fake news.`, () => {
    expect(newsList).not.toContain(
      "Breaking news: Bones of a suspected dragon found!",
      "Breaking news: One famous shopping mall sells gaming products for the price of 1$!"
    )
  })
})

describe(`Search Function Test`, () => {
  test(`Should return an array of results based on search criteria.`, () => {
    const input = "journalist"
    expect(
      newsList.filter((item) =>
        item.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      )
    )
  })
})

describe(`Sort Function Test`, () => {
  test("Should return an array.", () => {
    expect(sort()).toBeInstanceOf(Array)
  })

  test("Should return an array containing strings.", () => {
    expect(sort().every((item) => typeof item === "string")).toBe(true)
  })

  test(`Should return an array list based on ascending order.`, () => {
    expect(sort("ascending")).toStrictEqual(
      newsList.sort((a, b) => a.localeCompare(b))
    )
  })
  test(`Should return an array list based on descending order.`, () => {
    expect(sort("descending")).toStrictEqual(
      newsList.sort((a, b) => b.localeCompare(a))
    )
  })
})
