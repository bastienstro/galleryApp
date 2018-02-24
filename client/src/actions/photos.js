export const getPhotos = async (page = 1) => {
	
	let response = await fetch(`/photos/${page}`)
	let photos = await response.json()
	
	return photos
}