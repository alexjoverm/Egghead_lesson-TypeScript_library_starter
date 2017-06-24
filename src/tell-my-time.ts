// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import moment from "moment"

export function tell() {
  return moment().format("MMMM Do YYYY, h:mm:ss a")
}
