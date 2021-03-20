// Declaring variable using the DOM 
  const clickMeButton= document.querySelector('.click-me-button');
  const outputDiv = document.querySelector('.output');
  const unorderedItemListOne = document.querySelector('#unorderedItemList > ul:nth-child(1) > li:nth-child(1)');

//  Query selector for the Submitt button
  const submitButton =document.querySelector('#submitButton');

//  Functions to run the program
  const giveClickHereFeedback = () => {
   outputDiv.innerText = 'Please Enter the form above ';
   };

  const replyItemOneFeedback = () => {
   unorderedItemListOne.innerText = 'You selected an item';
   };

  const showOutputFeedback = () => {
     outputDiv.innerText = 'You can add another Item';
   };

// Declare another variable and function for item two
 const unorderedItemListTwo = document.querySelector('#unorderedItemList > ul:nth-child(1) > li:nth-child(2)');

  const tellItemTwoFeedback = () => {
   unorderedItemListTwo.innerText = 'You selected the second Item'
    };
// Declare variable and function for item three
   const unorderedItemListThree = document.querySelector('#unorderedItemList > ul:nth-child(1) > li:nth-child(3)');

  const reportItemThreeFeedback = () => {
   unorderedItemListThree.innerText = 'You selected an your third Item'
   };
// Declare variable and function for item four
   const unorderedItemListFour = document.querySelector('#unorderedItemList > ul:nth-child(1) > li:nth-child(4)');

  const sendItemFourFeedback = () => {
   unorderedItemListFour.innerText = 'You can only buy Four Items'
    };

// Event Listener Method for submit and click Here button.

  clickMeButton.addEventListener('click', giveClickHereFeedback);

  submitButton.addEventListener('click', replyItemOneFeedback);

  submitButton.addEventListener('click', showOutputFeedback);

  submitButton.addEventListener('click', tellItemTwoFeedback);

  submitButton.addEventListener('click', showOutputFeedback);
 
  submitButton.addEventListener('click', reportItemThreeFeedback);

  submitButton.addEventListener('click', sendItemFourFeedback);