
import {Box,Typography,styled,Divider,List} from '@mui/material'
import Transaction  from './Transaction';
const Transactions = ({transactions , setTransactions}) => 
{
    return (
       <Box>
             <Typography variant="h5">Transactions history</Typography>
             <Divider />
             <List>
                {
                    transactions.map(transaction => (
                      <Transaction  transaction={transaction}  setTransactions = {setTransactions} transactions = {transactions}/>
                    ))
                }
             </List>
       </Box>
    )
}
export default Transactions;
 