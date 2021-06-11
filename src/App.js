import React from 'react'
import { num, ops, ids } from './components/IdBotones'
import { ViewCalculator } from './components/ViewCalculator'

function App() {

  const [state, setState] = React.useState({
    lastPressed: undefined,
    calc: '0',
    operation: undefined
  })

  const handleClick = (e) => {
    let { calc, lastPressed } = state
    const { innerText } = e.target

    switch (innerText) {
      case 'AC':
        {
          setState({
            ...state,
            calc: '0',
            lastPressed: innerText
          })
          break;
        }
      case '=': {
        const evaluated = eval(calc)
        setState({
          ...state,
          calc: evaluated,
          lastPressed: innerText
        })
        break;
      }
      case '.': {
        const splitted = calc.split(/[\+\-\*\/]/)
        const last = splitted.slice(-1)[0];

        if (!last.includes('.')) {
          setState({
            ...state,
            calc: calc + '.',

          })
        }

        break
      }
      default: {
        let e = undefined;
        // check operations
        if (ops.includes(innerText)) {
          if (ops.includes(lastPressed) && innerText !== '-') {
            const lastNumberIdx = calc.split('').reverse().
              findIndex(char => char !== ' ' && num.includes(+char))
            // console.log(calc.split(''),lastNumberIdx);
            e = calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `;
            //console.log(e);
          } else {
            e = `${calc} ${innerText} `;
          }
        } else {
          //console.log("numero");
          e = (calc === '0') ? innerText : (calc + innerText)
        }
        setState({
          ...state,
          calc: e,
          lastPressed: innerText
        })
      }
    }

  }
  return (
    <>
      <h1
        className="text-center mt-5 p-2"
      >Calculator
    </h1>
      <ViewCalculator
        handleClick={handleClick}
        state={state}
        num={num}
        ops={ops}
        ids={ids}
      />
    </>
  );
}
export default App;
