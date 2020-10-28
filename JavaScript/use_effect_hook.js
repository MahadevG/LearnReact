'use strict';

const e = React.createElement;

const Counter = () => {
  const [count, setCount] = React.useState(0);
  
  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });


    return e(
      'button',
      { onClick: () => setCount(count + 1) },
      'Counter'
    );

}

const domContainer = document.querySelector('#counter_button_container');
ReactDOM.render(e(Counter), domContainer);
