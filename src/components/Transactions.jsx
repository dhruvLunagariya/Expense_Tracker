
import React from 'react'
import {Box,Typography,Divider,List} from '@mui/material'
import Transaction from './Transaction'

const Transactions=({transations,setTrasaction}) => {
  return (
    <Box>
        <Typography variant="h5">Transactions history</Typography>
        <Divider/>
        <List>
            {
                    transations.map(transaction => (
                        <Transaction transaction={transaction} setTrasaction={setTrasaction} transations={transations}/>
                    ))
            }
        
        </List>
    </Box>
  )
}

export default Transactions