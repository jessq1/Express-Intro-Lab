export { 
	find
}
const student = [
  {name: 'Kustaa Vaněk', grade: 4.0, year: "first"},
  {name: 'Jason Danielson', grade: 2.5, year: "first"},
  {name: 'Phebe Woods', grade: 3.5, year: "first"},
  {name: 'Frieda Scrivens', grade: 3.0, year: "second"},
  {name: 'Eulalia Abbey', grade: 2.3, year: "second"},
  {name: 'Bert Rimmer', grade: 3.2, year: "second"},
  {name: 'Bryan Hopson', grade: 3.8, year: "third"},
  {name: 'Luanne James', grade: 2.9, year: "third"},
  {name: 'Adelia Bishop', grade: 3.8, year: "third"},

]
const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, student)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}