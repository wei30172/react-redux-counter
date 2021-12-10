import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actionCreators from "./state/action-creator/index"

function App() {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <div className="container">
        <h1 className="acount">{ account }</h1>
        <div className="button">
          <button onClick={() => depositMoney(1000)}>Deposit</button>
          <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
        </div>
      </div>
    </div>
  );
}

export default App;
