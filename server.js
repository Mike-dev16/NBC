const express = require("express");
const axios = require("axios");
const path = require("path");


const app = express();



// loads environment variables from .env file during development.
if (process.env.NODE_ENV !== "production") require("dotenv").config();



// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/newsy"));


//backend routes
app.get("/headline", (req, res) => {
axios
		.get(`https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey=` + 
            process.env.NEWS_API_KEY
        )
		.then(response => {
			res.send(response.data);
		})
		.catch(error => {
			res.status(400).json(error.response.data);
		});
});



app.get("/breaking", (req, res) => {
axios
		.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&language=en&apiKey=` + 
            process.env.NEWS_API_KEY
        )
		.then(response => {
			res.send(response.data);
		})
		.catch(error => {
			res.status(400).json(error.response.data);
		});
});




app.get("/aside", (req, res) => {
axios
		.get(`https://newsapi.org/v2/top-headlines?country=gb&language=en&apiKey=` + 
            process.env.NEWS_API_KEY
        )
		.then(response => {
			res.send(response.data);
		})
		.catch(error => {
			res.status(400).json(error.response.data);
		});
});



app.get("/latest", (req, res) => {
axios
		.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=` + 
            process.env.NEWS_API_KEY
        )
		.then(response => {
			res.send(response.data);
		})
		.catch(error => {
			res.status(400).json(error.response.data);
		});
});



app.get("/health", (req, res) => {
axios
		.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&language=en&apiKey=` + 
            process.env.NEWS_API_KEY
        )
		.then(response => {
			res.send(response.data);
		})
		.catch(error => {
			res.status(400).json(error.response.data);
		});
});


app.get("/think", (req, res) => {
axios
		.get(`https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=` + 
            process.env.NEWS_API_KEY
        )
		.then(response => {
			res.send(response.data);
		})
		.catch(error => {
			res.status(400).json(error.response.data);
		});
});



app.get("/scroll", (req, res) => {
axios
		.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=` + 
            process.env.NEWS_API_KEY
        )
		.then(response => {
			res.send(response.data);
		})
		.catch(error => {
			res.status(400).json(error.response.data);
		});
});





//angular routes
app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname + "/dist/newsy/index.html"));
});


// Start the app by listening on the default port
app.listen(process.env.PORT || 5000);
