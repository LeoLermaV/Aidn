const INITIAL_STATE = {
	sections: [
  {
    title: 'hats',
    imageUrl: `https://i.imgur.com/ZDBLkII.jpg`,
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: `https://i.imgur.com/gTW7GNM.jpg`,
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: `https://i.imgur.com/hu2yVUx.jpg`,
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: `https://i.imgur.com/ph9sRAb.jpg`,
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: `https://i.imgur.com/qxwQGpP.jpg`,
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens',
  }]  
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		default:
		return state;
	}
};

export default directoryReducer;