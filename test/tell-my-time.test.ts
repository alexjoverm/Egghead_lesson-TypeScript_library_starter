import { tell } from "../src/tell-my-time"
import moment from "moment"

describe("Dummy test", () => {
  it("Works if expected date is displayed", () => {
    expect(tell()).toEqual(moment().format("MMMM Do YYYY, h:mm:ss a"))
  })
})
