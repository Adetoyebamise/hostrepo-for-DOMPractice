// Examine the Document Model
 
console.log(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.forms)
console.log(document.links)
console.log(document.images)

/* Method to query the DOM 
a. getelementbyid */

//  console.log(document.getElementById('header-title'))
//  var headerTitle = document.getElementById('header-title')
//  console.log(headerTitle)
//  headerTitle.textContent = ""
//  headerTitle.innerText = ""
//  console.log(headerTitle.innerText)
//  headerTitle.innerHTML = '<h3></h3>'
//  header.style.borderBottom = "solid 3px #000"

/* Method to query the DOM
b. getElementbyClassName */
//  var items = document.getElementsByClassName('list-group-item');
//  console.log(items)
//  console.log(items[1]) 
//  items[1].textContent = ""
//  items[1].style.fontWeight = ""
//  items[1].style.backgroundColor = ""

// items.style.backgroundColor = "#f4f4f4"

//  for (var i; i < items.length; i++) {
//      items[i].style.backgroundColor = '#f4f4f4'
//  }

/*c. getElementByTagName */

// var li = document.getElementsByTagName('list-group-item')
// console.log(li)
// console.log(li[1]) 
// li[1].textContent = ""
// li[1].style.fontWeight = ""
// li[1].style.backgroundColor = ""

// items.style.backgroundColor = "#f4f4f4"

// for (var i; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }

/*d. QuerySelector  */

//  var header = document.querySelector('#main-header')
//  header.style.borderBottom = " solid 4px #ccc"

//  var input = document.querySelector( 'input')
//  input.value = "Hello World"

//  var submit = document.querySelector('input[type="submit"]')
//  submit.value="SEND"

//  var item = document.querySelector('.list-group-item')
//  item.style.color = 'red'

//  var lastitem = document.querySelector('.list-group-item : last-child')
//  lastitem.style.color = 'blue'

//  var secondItem = document.querySelector('.list-group-item : nth-child(2)')
//  secondItem.style.color = 'coral'

// /*e QuerySSelectorAll */

//  var titles = document.querySelectorAll('.title')

//  console.log(titles)
//  titles[0].textContent = 'Hello'

//  var odd = document.querSelectorAll('li:nth-child(odd)')
//  var even = document.querSelectorAll('li:nth-child(even)')

//  for (var i = 0; i < odd.length; i++) {
//      odd[i].style.backgroundColor = '#f4f4f4'
//      even[i].style.backgroundColor = '#ccc'
//  }

// Tranversing the DOM
//  var itemList = document.querySelector('#items');

// parentNode
//  console.log(itemList.parentNode);
//  itemList.parentNode.style.backgroundColor = '#f4f4f4'
//  console.log(itemList.parentNode.parentNode.parentNode)


// parentElement
//  console.log(itemList.parentElement);
//  itemList.parentElement.style.backgroundColor = '#f4f4f4'
//  console.log(itemList.parentElement.parentElement.parentElement)


// childnode
//  console.log(itemList.childNodes)

//  console.log(itemList.children)
//  console.log(itemList.children[1])
//  itemList.children[1].style.backgroundColor = 'yellow'

// firstChild
//  console.log(itemList.firstChild)
 
// firstElementChild
//  console.log(itemList.firstElementChild)
//  itemList.firstElementChild.textContent = ''

// lastChild
//  console.log(itemList.lastChild)
 
// lastElementChild
//  console.log(itemList.lastElementChild)
//  itemList.lastElementChild.textContent = ''

// nextSiblings 
//  console.log(itemList.nextSibling)

// nextElementSibling
//  console.log(itemList.nextElementSibling)

// previousSibling
// console.log(itemList.previousSibling)

// previousElementSibling
//  console.log(itemList.previousElementSibling)
//  itemList.previousElementSibling.style.color = ''

// You dont need Jquery for simple DOM manipulation

// createElement

// create div
//  var newDiv = document.createElement('div')
// Add class
//  newDiv.className = ''
// Add id
//  newDiv.id = ''
// Add attribute
//  newDiv.setAttribute('', '')

// create a text node
//  var newDivText = document.createTextNode('')
// Add text to div
//  newDiv.appendChild(newDivText)

//  var container = document.querySelector('header.container')
//  var h1 = document.querySelector('')


//  console.log(newDiv)

//  newDiv.style.fontSize = ''

//  container.insertBefore( )
 



