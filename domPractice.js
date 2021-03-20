// Declaring variable using the DOM 
  const clickMeButton= document.querySelector('.click-me-button');
  const outputDiv = document.querySelector('.output');
  const unorderedItemListOne = document.querySelector('#unorderedItemList > ul:nth-child(1) > li:nth-child(1)');

//  Query selector for the Submitt button
  const submitButton =document.querySelector('#submitButton');

//  Functions to change the output text when the click here button is click.
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
   unorderedItemListTwo.innerText = 'You added the second Item'
    };
// Declare variable and function for item three
   const unorderedItemListThree = document.querySelector('#unorderedItemList > ul:nth-child(1) > li:nth-child(3)');

  const reportItemThreeFeedback = () => {
   unorderedItemListThree.innerText = 'You added the third Item'
   };
// Declare variable and function for item four
   const unorderedItemListFour = document.querySelector('#unorderedItemList > ul:nth-child(1) > li:nth-child(4)');

  const sendItemFourFeedback = () => {
   unorderedItemListFour.innerText = 'You added the fourth Item'
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