import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, CssBaseline } from '@mui/material';

const NewsDetail = () => {
  const { id } = useParams();  // Get the news id from the URL
  const [news, setNews] = useState(null);

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
        <Container maxWidth='lg' sx={{ padding: '20px' }}>
        <Card>
            <CardMedia
            component="img"
            height="400"
            image={news.image}  // Ensure this matches your DB column
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
        </Card>
        </Container>    
    </>
  );
};

export default NewsDetail;
