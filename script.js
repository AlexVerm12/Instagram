let pictures = [
  'img/profil1.jpg',
  'img/profil2.jpg',
  'img/profil3.jpg',
  'img/profil4.jpg',
  'img/profil5.jpg',
  'img/profil6.jpg'
]
let profilnames = [
  '$Alex$_Lo',
  'Rami_007',
  'Chris_055',
  'Phil_ipp',
  'Elio_Fou',
  '$007$'
]

let feeds = [
  {
    header: 'img/profil5.jpg',
    name: 'Elio_Fou',
    image: 'img/feed1.jpg',
    info:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    comments: []
  },
  {
    header: 'img/profil4.jpg',
    name: 'Phil_ipp',
    image: 'img/feed2.jpg',
    info:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    comments: []
  },
  {
    header: 'img/profil3.jpg',
    name: 'Chris_055',
    image: 'img/feed3.jpg',
    info:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    comments: []
  },
  {
    header: 'img/profil2.jpg',
    name: 'Rami_007',
    image: 'img/feed4.jpg',
    info:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    comments: []
  },
  {
    header: 'img/profil1.jpg',
    name: '$Alex$_Lo',
    image: 'img/feed5.jpg',
    info:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    comments: []
  }
]

function renderStoryBoard () {
  let storyboard = document.getElementById('storyboard')
  storyboard.innerHTML = ''
  for (let i = 0; i < pictures.length; i++) {
    storyboard.innerHTML += `
        <div class="container_story_img">
        <img class="imgprofilgradientstory" src="${pictures[i]}">
        <span>${profilnames[i]}</span>
        </div>`
  }
}

function renderNewProfil () {
  let newprofil = document.getElementById('newprofil')
  newprofil.innerHTML = ''
  for (let i = 0; i < pictures.length; i++) {
    newprofil.innerHTML += `
        <div class="container_profil margin_top">
            <img class="imgprofil" src="${pictures[i]}">
            <p class="name_profil">${profilnames[i]}</p>
            <p class="bluetext">Folgen</p>
        </div>`
  }
}

function renderFeed () {
  
  let feed = document.getElementById('feed')
  feed.innerHTML = '';
  for (let i = 0; i < feeds.length; i++) {
    const newFeed = feeds[i]

    feed.innerHTML = renderHTML(feed, i, newFeed);

    let comments = document.getElementById(`comments${i}`);
  comments.innerHTML+='';
  
  for (let j = 0; j < feeds[i]['comments'].length; j++) {
    let comment = feeds[i]['comments'][j];
        
        comments.innerHTML+=`<div>${comment}</div>`;
        
        
      }

  }
  
}

function search () {
  let search = document.getElementById('search').value;
  search = search.toLowerCase();
  feed.innerHTML = '';
  let feed = document.getElementById('feed');
  
   
  for (let i = 0; i < feeds.length; i++) {
    const newFeed = feeds[i];
    if(newFeed['name'].toLowerCase().includes(search)) {
    feed.innerHTML = renderHTML(feed, i, newFeed);
    }
  }
}

function renderHTML (feed, i, newFeed) {
  return (
    feed.innerHTML += `
    <div class="feed-container"> 
    <div class="feed-header">
        <img class="feed-profil-image" src="${newFeed['header']}"> ${newFeed['name']}
    </div>
    <div>
    <img class="imagefeed" src="${newFeed['image']}">
    </div>
    <div>
        <img class="feed-icon" src="img/icons8-herzen-60.png"><img class="feed-icon" src="img/icons8-sprechblase-50.png"><img class="feed-icon" src="img/icons8-gesendet-50.png">
    </div>
    <div class="feed-info">
    <b>${newFeed['name']}</b> ${newFeed['info']}
    </div>
    
    <div class="comments" id="comments${i}"></div>
    <div class="feed-comment-input">
    
    <input type="text" id="input${i}" placeholder="Kommentieren..."><img onclick="addComment(${i})" src="img/icons8-gesendet-50.png"> 
    </div>
    </div>`);
    
}

function addComment(index) {
  let input = document.getElementById(`input${index}`);
  feeds[index]['comments'].push(input.value);
  input.value = '';

 renderFeed();
    }