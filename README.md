# galleryApp

Install dependencies:
```shell
  yarn install
```

Install project:
```shell
  yarn deploy
```

This will install the client build in /build directory and run server on localhost:3000

# Decisions:

I choose not to use Redux for this project to keep it simple. 

As it is a little app, we handle the main state of the App in the App Component.

I could use powerful and maintained Components to handle the specs but I choose to create my own little components ( LazyImage, Modal, LightBox ) cause I assume it was what you are looking for.

So forgive me if they are not fully reusabled as the LightBox Component which is quite dependant of the API format response.

I choose to show a set of 10 images and ask for ten more every time you scroll to the bottom of the page cause I thought it was a better User Experience.

# Server:

We could use the Proxy functionality of Flickr API but I wanted to make my own route.So I basically create a route (photos/:page) which get recent Photos using the Flickr API and send it to the client without modifying the data.  

# LazyImage Component:

This component use two resolutions of the same picture. 

First, we show the low resolution image with a blur effect waiting for the high resolution image to be fully loaded.

When this one is loaded, we change the opacities of the two images to show the better one with a nice effect.

# Design:

For the grid, I used mostly 'flexbox' in an horizontal way.

That means the height of image boxes is fixed and I use 'object-fit:cover' to handle the different sizes of images to fit in my image containers.
