// Declaring variable using the DOM 
  const clickMeButton= document.querySelector('.click-me-button');
  const outputDiv = document.querySelector('.output');
  const unorderedItemListOne = document.querySelector('#unorderedItemList > ul:nth-child(1) > li:nth-child(1)');
  const nameInputField = document.querySelector('.item-input');

//  Query selector for the Submitt button
  const submitButton =document.querySelector('#submitButton');

//  Functions to change the output text when the click here button is click.
  const giveClickHereFeedback = () => {
   outputDiv.innerText = 'Please Enter the form above ';
   };

  const replyItemOneFeedback = () => {
   unorderedItemListOne.innerText = nameInputField.value ;
   };

  const showOutputFeedback = () => {
     outputDiv.innerText = 'You can add another Item';
   };

// Declare another variable and function for item two
 const unorderedItemListTwo = document.querySelector('#unorderedItemList > ul:nth-child(1) > li:nth-child(2)');

  const tellItemTwoFeedback = () => {
   unorderedItemListTwo.innerText = nameInputField.value ;
    };
// Declare variable and function for item three
   const unorderedItemListThree = document.querySelector('#unorderedItemList > ul:nth-child(1) > li:nth-child(3)');

  const reportItemThreeFeedback = () => {
   unorderedItemListThree.innerText = nameInputField.value ;
   };
// Declare variable and function for item four
   const unorderedItemListFour = document.querySelector('#unorderedItemList > ul:nth-child(1) > li:nth-child(4)');

  const sendItemFourFeedback = () => {
   unorderedItemListFour.innerText = nameInputField.value ;
    };

    const showOutputFeedbackItemSelection = () => {
      outputDiv.innerText = 'You can only add four items';
    };

// Event Listener Method for submit and click Here button.

  clickMeButton.addEventListener('click', giveClickHereFeedback);

  submitButton.addEventListener('click', replyItemOneFeedback);

  submitButton.addEventListener('click', showOutputFeedback);

  submitButton.addEventListener('click', tellItemTwoFeedback);

  submitButton.addEventListener('click', showOutputFeedback);
 
  submitButton.addEventListener('click', reportItemThreeFeedback);

  submitButton.addEventListener('click', sendItemFourFeedback);

  submitButton.addEventListener('click', showOutputFeedbackItemSelection);



               /* ===  DOCUMENT OBJECT MODEL ASSIGNMENT  ===  */


               /* ====  Examine the Document Model     ====   */
 
//  console.dir(document);    //shows us all of the different property and method in the document
//  console.log(document);
//  console.log(document.domain);
//  console.log(document.URL);
//  console.log(document.title);
//  document.title = 'Understanding JavaScript with Don';  //changes the title of the document
//  console.log(document.doctype);
//  console.log(document.head);
//  console.log(document.body);
//  console.log(document.all);    //can be used to select or replace object but not the best way
//  console.log(document.all[13]);
//  document.all[13].textcontent = 'string'
//  console.log(document.forms)
//  console.log(document.links)
//  console.log(document.images)

               /* METHOD TO QUERY THE DOM    a. getelementbyid */

//  console.log(document.getElementById('header-title'))
//  const headerTitle = document.getElementById('header-title')
//  console.log(headerTitle)                       
//  headerTitle.textContent = "JavaScript"
//  headerTitle.innerText = ""
//  console.log(headerTitle.innerText)
//  headerTitle.innerHTML = '<h3></h3>'
//  header.style.borderBottom = "solid 3px #000"

              /* METHOD TO QUERY THE DOM  b. getElementbyClassName */

//  const items = document.getElementsByClassName('listGroupItem');
//  console.log(items)
//  console.log(items[1]) 
//  items[1].textContent = ""
//  items[1].style.fontWeight = ""
//  items[1].style.backgroundColor = ""

//  items.style.backgroundColor = "#f4f4f4"

//  for ( i; i < items.length; i++) {
//      items[i].style.backgroundColor = '#f4f4f4'
//        }

               /*  METHOD TO QUERY THE DOM c. getElementByTagName */

//  const li = document.getElementsByTagName('list-group-item')
//  console.log(li)
//  console.log(li[1]) 
//  li[1].textContent = "Headset"
//  li[1].style.fontWeight = ""
//  li[1].style.backgroundColor = ""
//  items.style.backgroundColor = "#f4f4f4"

//  for ( i; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
//        }

               /*  METHOD TO QUERY THE DOM d. QuerySelector  */

//  const header = document.querySelector('#updateItem')
//  header.style.borderBottom = " solid 4px #ccc"

//  const input = document.querySelector( '.input')
//  input.value = "Hello World"

//  const submit = document.querySelector('input[type="submit"]')
//  submit.value="SEND"

//  const item = document.querySelector('.list-group-item')
//  item.style.color = 'red'

//  const lastitem = document.querySelector('.list-group-item : last-child')
//  lastitem.style.color = 'blue'

//  const secondItem = document.querySelector('.list-group-item : nth-child(2)')
//  secondItem.style.color = 'coral'

               /*  METHOD TO QUERY THE DOM e. QuerySelectorAll */

//  const titles = document.querySelectorAll('.title')

//  console.log(titles)
//  titles[0].textContent = 'Hello'

//  const odd = document.querSelectorAll('li:nth-child(odd)')
//  const even = document.querSelectorAll('li:nth-child(even)')

//  for ( i = 0; i < odd.length; i++) {
//      odd[i].style.backgroundColor = '#f4f4f4'
//      even[i].style.backgroundColor = '#ccc'
//        }

               /*   Tranversing the DOM     */

//  const itemList = document.querySelector('#items');

               /*   parentNode  */

//  console.log(itemList.parentNode);
//  itemList.parentNode.style.backgroundColor = '#f4f4f4'
//  console.log(itemList.parentNode.parentNode.parentNode)


               /*    parentElement */

//  console.log(itemList.parentElement);
//  itemList.parentElement.style.backgroundColor = '#f4f4f4'
//  console.log(itemList.parentElement.parentElement.parentElement)


               /*    childnode     */

//  console.log(itemList.childNodes)
//  console.log(itemList.children)
//  console.log(itemList.children[1])
//  itemList.children[1].style.backgroundColor = 'yellow'

               /*    FirstChild    */

//  console.log(itemList.firstChild)
 
               /*    FirstElementChild   */

//  console.log(itemList.firstElementChild)
//  itemList.firstElementChild.textContent = ''

               /* lastChild    */

//  console.log(itemList.lastChild)
 
               /* lastElementChild    */

//  console.log(itemList.lastElementChild)
//  itemList.lastElementChild.textContent = ''

               /*  nextSiblings  */

//  console.log(itemList.nextSibling)

               /* nextElementSibling    */

//  console.log(itemList.nextElementSibling)

               /* previousSibling     */

//  console.log(itemList.previousSibling)

               /* previousElementSibling    */

//  console.log(itemList.previousElementSibling)
//  itemList.previousElementSibling.style.color = ''

               /*  You dont need Jquery for simple DOM manipulation   */

               /*  createElement and  create div    */

//  const newDiv = document.createElement('div')

               /*  Add class    */

//  newDiv.className = ''

               /* Add id       */

//  newDiv.id = ''

               /* Add attribute   */

//  newDiv.setAttribute('', '')

               /* create a text node  */

//  const newDivText = document.createTextNode('')

               /* Add text to div   */

//  newDiv.appendChild(newDivText)

//  const container = document.querySelector('header.container')
//  const h1 = document.querySelector('')
//  console.log(newDiv)
//  newDiv.style.fontSize = ''
//  container.insertBefore( )