import React from 'react'

export const ViewCalculator = ({handleClick,state,num,ops,ids}) => {
    return (

        <div className='container'>
        
          {/*   {(JSON.stringify(state, null, 2))} */}
            <div className="calculator border rounded-top shadow-lg">
                <div id="display" className="display">
                    {/*   <small>{state.calc} }</small> */}
                    {state.calc}</div>
                <div className="nums-container row g-0">

                    <div className="col-9">
                        <div className="d-flex flex-nowrap " style={{ gap: '8px' }}>
                            <button type="button" id='clear' onClick={handleClick} className="button btn ac ">AC</button>
                        </div>
                        <div className="d-flex flex-wrap" >
                            {
                                num.map((num) => (<button
                                    onClick={handleClick}
                                    type="button"
                                    id={ids[num]}
                                    className={`${num !== 0 ?
                                        'button btn light-grey me-2 ' : 'button btn me-2 cero button btn light-grey '
                                        }`}
                                    key={num}>{num}</button>))
                            }

                            <button type="button" id='decimal'
                                onClick={handleClick}
                                className="button btn btn-dark "
                            >.
               </button>
                        </div>
                    </div>
                    <div className="col-3 d-flex flex-wrap justify-content-center" >
                        {
                            ops.map((ops) => (
                                <button onClick={handleClick}
                                    type="button" id={ops}
                                    className="button btn orange"
                                    id={ids[ops]}
                                    key={ops}
                                >{ops}
                                </button>))
                        }
                        <button className="button btn orange" id='decimal'
                            onClick={handleClick}
                            id="equals"
                            type="button"
                        >=
               </button>
                    </div>
                </div>

            </div>

        </div>

    )
}
