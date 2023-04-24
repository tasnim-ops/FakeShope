import React from 'react'

import './CartItems.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { addToPanier, decreasePanier, removeFromPanier } from '../../redux/cartSlice';


const CartItems = ({item}) => {
  const dispatch=useDispatch()
  const handelDecrease=(item)=>{
    dispatch(decreasePanier(item));
  }
  const handelIncrease=(item)=>{
    dispatch(addToPanier(item))
  }
  const handelRemove=(item)=>{
    dispatch(removeFromPanier(item))
  }
  return (
    <>
    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
 <Card sx={{ maxWidth: 290, }}>
  <div className="image-wrapper" >     
    <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={item.cover}
      /> 
    <div className="image-text">            
      <ClearIcon type='button' className='zone' onClick={()=>handelRemove(item)}  /> 
    </div>
  </div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Unit Price:  ${item.price}
        </Typography>
      </CardContent>
        <CardActions className='qte'>
        <AddSharpIcon   className='zone' onClick={()=>handelIncrease(item)}/>
            <div className="my-box">{item.cartQuantity}</div>
            <RemoveSharpIcon type='button' className='zone' onClick={()=>handelDecrease(item)}  /> 
        </CardActions>
    </Card>
  
    </>
  )
}

export default CartItems
