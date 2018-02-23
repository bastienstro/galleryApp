export const getPhotos = async (params) => {
	
	let response = await fetch('/photos')
	let photos = await response.json()
	
	return photos
}