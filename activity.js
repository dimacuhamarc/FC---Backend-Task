import axios from 'axios'
import fs from 'fs'
import { Parser } from 'json2csv'

const API_URL = 'https://bored-api.appbrewery.com/random'

const args = process.argv.slice(2)
const count = args.indexOf('-n' || '--number')
const format = args.indexOf('-f' || '--format')

if (count === -1 || format === -1) {
  console.log('Usage: node activity -n <number> -f <format>')
  process.exit(1)
}

const countValue = args[count + 1]
const formatValue = args[format + 1]

const fetchActivities = async (count) => {
  const activities = []
  for (let i = 0; i < count; i++) {
    const { data } = await axios.get(API_URL)
    activities.push(data)
  }
  return activities
}

const formatHandler = {
  json: (activities) => JSON.stringify(activities, null, '  '),
  csv: (activities) => {
    const parser = new Parser()
    return parser.parse(activities)
  },
  console: (activities) => {
    console.log(activities)
    return ''
  },
}

fetchActivities(countValue).then((activities) => {
  const formattedActivities = formatHandler[formatValue](activities)
  formatValue === 'console' ? null : fs.writeFileSync(`activities.${formatValue}`, formattedActivities)
}).catch((error) => {
  console.error(error)
})

