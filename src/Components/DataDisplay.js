import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, CardMedia, CardContent, Card, CardActionArea, Container, CssBaseline, Grid} from '@mui/material';

const DataDisplay = ({ endpoint, category }) => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://tech-news-website-8xgj.onrender.com`);
        //const res = await fetch(`http://localhost:5000`);
        const data = await res.json();
        setNews(data.news);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [endpoint]);

  const handleCardClick = (id) => {
    navigate(`/news/${id}`);  // Navigate to the news detail page with the news id
  };


  return (
    <>
      <CssBaseline/>
      <Container maxWidth='lg' sx={{padding:'10px'}}>
        <Grid container spacing={4} sx={{
          display: 'flex',
          minHeight: '100vh',
          padding:'10px'
        }}>
          {news.filter(i => !category || i.category.toLowerCase() === category.toLowerCase()).map(i => (
            <Grid item xs={12} sm={6} md={4} key={i.id}>
              <Card sx={{ maxWidth: 350, backgroundColor:''}}>
                <CardActionArea onClick={() => handleCardClick(i.id)}>
                  <CardMedia
                    component="img"
                    height="145"
                    image= {i.image}
                    alt="image"
                    sx={{padding:'5px'}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {i.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default DataDisplay;

