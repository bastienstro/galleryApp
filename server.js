const express = require('express'),
      config = require('./config'),
      Flickr = require("flickrapi")

flickrOptions = {
      api_key: config.API_KEY,
      secret: config.API_SECRET
    };

Flickr.tokenOnly(flickrOptions, function(error, flickr) {
	
    var express = require("express"),
        app = express()	
	
	app.get('/photos/:page*?',(req,resp) => {
		
		const page = req.params.page || 1;

		flickr.photos.getRecent({ page: page,
								  per_page:10,
								  extras: "owner_name,url_t,url_m,url_l,description,date_taken,views" 
			
			
			
		}, function(err,result) {
          if(err) { resp.send(err); }
          resp.send(result.photos)  
        });
		
	})
	port = 3001
	
	app.listen(port, (err,result) => {
		if (err) { console.error(err);process.exit(1);}
		else console.log(`Listening on port ${port}`);
	});
	
});

// Initialize the app




