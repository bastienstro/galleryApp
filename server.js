import express from "express"
import path from 'path'
import Flickr from 'flickrapi'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { API_KEY,API_SECRET } from './parameters'
import App from './client/src/Components/App'
import template from './views/index'

const flickrOptions = {
      api_key: API_KEY,
      secret: API_SECRET
    };

Flickr.tokenOnly(flickrOptions, function(error, flickr) {
	
    const app = express()	
        
    app.use(express.static('build'));
	/** App **/
	app.get('/',(req,resp) => {
		const appString = ReactDOMServer.renderToString(<App />);
		resp.send(template({
		body: appString,
		title: 'Gallery App',
        }));
	})
	/** API get photos route **/
	app.get('/photos/:page*?',(req,resp) => {
		
		const page = req.params.page || 1;
		const params = { page: page,
						 per_page:10,
						 extras: "owner_name,url_t,url_m,url_c,url_l,description,date_taken,views" 
						}
		flickr.photos.getRecent(params, (err,result) => {
          if(err) { resp.send(err); }
          resp.send(result.photos)  
        });
		
	})
	
	let port = 3000
	
	app.listen(port, (err,result) => {
		if (err) { 
			console.error(err)
			process.exit(1)
		}
		else console.log(`Listening on port ${port}`)
	});
	
});