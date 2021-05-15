var med: medicine[] = []
var length: number
var flag: boolean
var medicineList: any
var row: any

class medicine {
  brand_name: string
  generic_name: string
  stock: number
  price: number

  constructor(bn: string, gn: string, s: number, p: number) {
    this.brand_name = bn
    this.generic_name = gn
    this.stock = s
    this.price = p
  }
}

function updateTable() {
  const table = document.querySelector('#medicines') as HTMLTableElement
  length = table.rows.length
  for (var i = length - 1; i >= 1; i--) {
    table.deleteRow(i)
  }
  for (var j = 1, i = 0; i < med.length && j <= med.length; i++) {
    row = table.insertRow(j)
    row.insertCell(0).innerHTML = med[i].brand_name
    row.insertCell(1).innerHTML = med[i].generic_name
    row.insertCell(2).innerHTML = med[i].stock.toString()
    row.insertCell(3).innerHTML = med[i].price.toString()
  }
}

function addRow() {
  const table = document.querySelector('#medicines') as HTMLTableElement
  const brand_name = document.querySelector('#brand_name') as HTMLInputElement
  const generic_name = document.querySelector('#generic_name') as HTMLInputElement
  const stock = document.querySelector('#stock') as HTMLInputElement
  const price = document.querySelector('#price') as HTMLInputElement

  if (brand_name.value == '' || generic_name.value == '' || stock.value == '' || price.value == '') {
    alert('Please fill out the fields')
  } else {
    medicineList = new medicine(brand_name.value, generic_name.value, stock.valueAsNumber, price.valueAsNumber)
    med.push(medicineList)
    updateTable()
    brand_name.value = ''
    generic_name.value = ''
    stock.value = ''
    price.value = ''
  }
}

function addQuantity() {
  const table = document.querySelector('#medicines') as HTMLTableElement
  const add_brand_name = document.querySelector('#add_brand_name') as HTMLInputElement
  const add_quantity = document.querySelector('#add_quantity') as HTMLInputElement
  length = table.rows.length
  var found = false

  if (add_brand_name.value == '' || add_quantity.value == '') {
    alert('Please fill out the fields')
  } else {
    for (var i = 0; i < med.length; i++) {
      if (add_brand_name.value.toLowerCase() === med[i].brand_name.toLowerCase()) {
        if (add_quantity.valueAsNumber < 0) {
          alert('You cannot use a negative amount!')
        } else {
          med[i].stock += add_quantity.valueAsNumber
        }
        found = true
        break
      }
    }
    if (!found) {
      alert(add_brand_name.value + ' Is Not Found')
    }
    updateTable()
    add_quantity.value = ''
    add_brand_name.value = ''
  }
}

function sellMedicine() {
  const table = document.querySelector('#medicines') as HTMLTableElement
  const sell_brand_name = document.querySelector('#sell_brand_name') as HTMLInputElement
  const sell_quantity = document.querySelector('#sell_quantity') as HTMLInputElement
  length = table.rows.length
  var found = false
  if (sell_brand_name.value == '' || sell_quantity.value == '') {
    alert('Please fill out the fields')
  } else {
    for (var i = 0; i < med.length; i++) {
      if (sell_brand_name.value.toLowerCase() === med[i].brand_name.toLowerCase()) {
        if (sell_quantity.valueAsNumber > med[i].stock) {
          alert('Insufficient stock!')
          found = true
          break
        } else if (sell_quantity.valueAsNumber < 0) {
          alert('You cannot use a negative amount!')
          found = true
        } else {
          med[i].stock -= sell_quantity.valueAsNumber
          found = true
          break
        }
      }
    }
    if (!found) {
      alert(sell_brand_name.value + ' Is Not Found')
    }
    updateTable()
    sell_quantity.value = ''
    sell_brand_name.value = ''
  }
}

function editPrice() {
  const edit_brand_name = document.querySelector('#edit_brand_name') as HTMLInputElement
  const edit_price = document.querySelector('#edit_price') as HTMLInputElement
  var found = false
  if (edit_brand_name.value == '' || edit_price.value == '') {
    alert('Please fill out the fields')
  } else {
    for (var i = 0; i < med.length; i++) {
      if (edit_brand_name.value.toLowerCase() === med[i].brand_name.toLowerCase()) {
        if (edit_price.valueAsNumber < 0) {
          alert('You cannot use a negative amount!')
          found = true
          break
        } else {
          med[i].price = edit_price.valueAsNumber
          found = true
          break
        }
      }
    }
    if (!found) {
      alert(edit_brand_name.value + ' Is Not Found')
    }
    updateTable()
    edit_brand_name.value = ''
    edit_price.value = ''
  }
}
