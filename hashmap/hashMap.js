class MyHashMap {
  constructor() {
    this.map = []
  }

  put(key, value) {
    const idx = this.map.findIndex((item) => item[0] === key)

    if (idx > -1) {
      const currArr = this.map[idx]
      currArr[1] = value
      this.map[idx] = [...currArr]
    } else {
      this.map.push([key, value])
    }
  }

  get(key) {
    const arr = this.map.find((item) => item[0] === key)

    if (arr) {
      return arr[1]
    }

    return -1
  }

  remove(key) {
    this.map = this.map.filter((item) => item[0] !== key)
  }
}

const map = new MyHashMap()

map.put(1, 1)
map.put(2, 2)

console.log(map)
console.log(map.get(1))
console.log(map.get(3))
