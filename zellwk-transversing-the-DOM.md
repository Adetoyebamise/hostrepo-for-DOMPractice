Traversing the DOM: The act of selecting an element from another element.
Traversing downwards : a) querySelector or queryselectorAll b) children
 a) QuerySelector or querySelectorAll
**Example**

    <div class = "component">
      <h2 class = "component__title">Component title</h2>
    </div>

    const component = document.querySelector(".component");

    const title = component.querySelector(".component__title");

    console.log(title);
    output
    -> <h2 class = "component__title">Component title</h2>

    //This is also known as a nodeList

 b) children: Property that select direct decendants(elements that are immediately nested in another element), It returns an HTML Collection that updates when children elements are changed

 **Example**

    <ul class = "list">
      <li><a href="#"> Link 1</li>
      <li><a href="#"> Link 2</li>
      <li><a href="#"> Link 3</li>
      <li><a href="#"> Link 4</li>
      <li><a href="#"> Link 5</li>
    </ul>

    const list = document.querySelector(".list");
    const listItems = list.children;

    console.log(listItems);

    // output prints the HTML collecton in an array of list; indexed 0 to 4. We can loop over it with <code>Array.prototype.forEach</code> , we need to convert it into an array with <code>Array.from</code> first

    const array = Array.from(HTMLcollecton)
    array.forEach(element => { /* do whatever we want to do*/})

Selecting A Specific child
  - We can select the nth-item in the list from both NodeLists (result from <code>querySelectorAll</code>) and HTML Collection (result from <code> children </code>)
  - To do so use the index of the element, ust like selecting a specific item from an array.

    **Example**

      <ul class="list">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
        <li><a href="#">Link 5</a></li>
      </ul>

      const listItems = document.querySelectorAll('li')

      const firstItem = listItems[0]
      const secondItem = listItems[1]
      const thirdItem = listItems[2]
      const fourthItem = listItems[3]
      const fifthItem = listItems[4]

      console.log(firstItem)
      console.log(secondItem)
      console.log(thirdItem)
      console.log(fourthItem)
      console.log(fifthItem)

      output:
      ->  <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
          <li>
            <a href="#">Link 4</a>
          </li>
          <li>
            <a href="#">Link 5</a>
          </li>

Traversing upwards
    - There are two methods to traverse upwards
        * parentElement
        * closest

  ParentElement: Property that lets you select the parent element. The parent element is the element that encloses the current element.
  IN the example below list is the parent element of all <code><li></code>. Each <code><li></code> is the parent element of their respective <code><a></code>

  **Example**

            <ul class="list">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
              <li><a href="#">Link 5</a></li>
            </ul>

            const firstListItem = document.querySelector('li')
            const list = firstListItem.parentElement

            console.log(list)
            output
            -> <ul class="list">...</ul>

  Closest: <code>parentElement</code> is great for selecting one level upwards.
  - To find element that can be multiple levels above the current element, we use the <code>closest</code> method.
  - <code>closest</code> allows us select the closest ancestor element that matches a selector.

          const closestAncestor = Element.closest(selector)


  **Exxample**
  In the following HTML, you can select .list from the <code><a></code> effortlessly with <code>Element.closest</code>:

        <ul class="list">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
        </ul>


          const firstLink = document.querySelector('a')
          const list = firstLink.closest('.list')

          console.log(list)
          output
          ->  <ul class="list"> ... </ul>

N.B : <code>closest</code> starts serching from the current element, that preceeds upwards until it reches the <code>document</code> . It stops returns the first element it finds.


      const firstLink = document.querySelector('a')
      const firstLinkThroughClosest = firstLink.closest('a')

      console.log(firstLinkThroughClosest)
      output
      -> <a href="#">Link 1</a>

Traversing Sideways: There are three methods to traverse sideways

  - nextElementSibling
  - previousElementSibling
  - combining parentElement, children, and index.

NextElementSibling: We can select the next Element with nextElementSibling.

      const nextElem = Node.nextElementSibling


      <ul class="list">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
        <li><a href="#">Link 5</a></li>
      </ul>


        const firstListItem = document.querySelector('li')
        const secondListItem = firstListItem.nextElementSibling

        console.log(secondListItem)
        output
        -> <li><a href="#">Link 2</a></li>

PreviousElementSibling: Likewise, you can select the previous element with previousElementSibling

      <ul class="list">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
        <li><a href="#">Link 5</a></li>
      </ul>


      const secondListItem = document.querySelectorAll('li')[1]
      const firstListItem = secondListItem.previousElementSibling

      console.log(firstListItem)
      output
      -> <li><a href="#">Link 1</a></li>


Combining parentElement, children, and index : The Method let you select a specific sibling.
  **Example**


      <ul class="list">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
        <li><a href="#">Link 5</a></li>
      </ul>

      const firstItem = document.querySelector('li')

    To select the fourth item, we can use <code>firstItem.parentElement</code> to get the list, then <code>list.children</code> to get a HTML collection. Once we have the HTML collection, we can find the fourth item by using an index of 3.

        const firstItem = document.querySelector('li')
        const list = firstItem.parentElement
        const allItems = list.children
        const fourthItem = allItems[3]

        console.log(fourthItem)
        output
        -> <li><a href="#">Link 4</a></li>

    Putting everything together in one step

        const firstItem = document.querySelector('li')
        const fourthItem = firstITem.parentElement.children[3]

        console.log(fourthItem)
        output
        -> <li><a href="#">Link 4</a></li>

    

****
**Reference**
[Traversing the DOM](https://zellwk.com/blog/dom-traversals/)