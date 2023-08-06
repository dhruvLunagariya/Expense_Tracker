
import './App.css';
import {Typography,styled,Box} from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';
import {useState} from 'react'

const Header = styled(Typography)`
// margin:10px
// padding:10px
 font-size: 36px;
 color: blue;
 text-transform: uppercase;
`
const Component = styled(Box)`
  display:flex;
  background:#fff;
  width:800px;
  padding:10px;
  border-radius:20px;
  margin:auto;
  & > div {
    height:70vh;
    width:50%;
    padding:10px;
  }
`
function App() {

    const [ transations,setTrasaction] = useState([
      {id:1, text:'Momos',amount:-20},
      {id:2, text:'Salary',amount:3000},
      {id:3, text:'Book',amount:-100},
      {id:4, text:'Bonus',amount:1000},

    ])


  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transations={transations}/>
          <ExpenseCard transations={transations}/>
          <NewTransaction setTrasaction={setTrasaction}/>
        </Box>
        <Box>
          <Transactions transations={transations} setTrasaction={setTrasaction} />
        </Box>
      </Component>
    </Box>
  );
}

export default App;
