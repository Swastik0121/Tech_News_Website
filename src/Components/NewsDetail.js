import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, CssBaseline, Button } from '@mui/material';

const NewsDetail = () => {
  const { id } = useParams();  // Get the news id from the URL
  const [news, setNews] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://tech-news-website-8xgj.onrender.com/news/${id}`);  // Fetch news by id
        //const res = await fetch(`http://localhost:5000/news/${id}`);
        const data = await res.json();
        setNews(data);  // Set the fetched news data to state
      } catch (error) {
        console.error('Error fetching news details:', error);
      }
    };
    fetchData();
  }, [id]);  // Re-fetch if the id changes

  if (!news) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
        <CssBaseline/>
        <Container maxWidth='lg' sx={{ padding: '20px', color:'#E5E4E2' }}>
        <Card>
            <CardMedia
            component="img"
            height="400"
            image={news.image}  
            alt="news image"
            />
            <CardContent>
            <Typography variant="h4" gutterBottom>
                {news.title} 
            </Typography>
            <Typography variant="body1">
                {news.content}  
            </Typography>
            </CardContent>
            <Button variant="outlined" onClick={() => navigate(-1)} sx={{mb:2, marginLeft:'20px', color:'#ff5001'} }>
              Back
            </Button>
        </Card>
        </Container>    
    </>
  );
};

export default NewsDetail;
