import React from 'react'


import { Container, Row, Col } from 'react-bootstrap';
import product from "../assets/data/data";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { addToPanier } from '../redux/cartSlice';

const Products = () => {
    const dispatch=useDispatch()
    const handelclick=(item)=>{
        dispatch(addToPanier(item))
    }
  return (
    <div>
          <Container fluid>
      <Row className="justify-content-center align-items-center">
        {product.map((item) => (
          <Col sm={12} md={6} lg={3} className="mb-5" key={item.id}>
            <Card sx={{ maxWidth: 345, height: 400 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={item.cover}
                title={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price} $
                </Typography>
              </CardContent>
              <CardActions className="d-flex justify-content-center">
                <AddCircleOutlineIcon style={{ fontSize: '32px' }}  onClick={()=> handelclick(item)}/>
              </CardActions>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default Products
