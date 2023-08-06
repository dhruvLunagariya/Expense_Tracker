import { ListItem, ListItemText,styled,ListItemIcon} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const Detail = styled(ListItem)`
  margin-top:10px;
`
const Transaction = ({transaction,setTrasaction,transations}) => {

  const color = transaction.amount  >0 ?'Green':'Red';
  
  const deleteTransactions = (id)=>{
    setTrasaction(transations.filter(transaction=>transaction.id!==id))
  }
  
  return (
    <Detail style={{background:`${color}`,color:'#fff'}}>
      <ListItemIcon>
        <DeleteIcon onClick={() => deleteTransactions(transaction.id)}/> 
      </ListItemIcon>
         <ListItemText>{transaction.text}</ListItemText>
         <ListItemText>{transaction.amount}</ListItemText>
    </Detail>

  ) 
}

export default Transaction