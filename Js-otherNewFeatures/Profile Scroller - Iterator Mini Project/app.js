const data = [
  {
    name : 'jhon Doe',
    age : 32,
    gender : 'male',
    lookingfor : 'female',
    location : 'Boston',
    image : 'https://randomuser.me/api/portraits/men/82.jpg'
  },

  {
    name : 'jen Smith',
    age : 26,
    gender : 'female',
    lookingfor : 'male',
    location : 'Miami',
    image : 'https://randomuser.me/api/portraits/women/82.jpg'
  },

  {
    name : 'william johnson',
    age : 29,
    gender : 'male',
    lookingfor : 'female',
    location : 'Newyork',
    image : 'https://randomuser.me/api/portraits/men/84.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click',nextProfile);

// Next Profile Display
function nextProfile() {

  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `s
      <ul class = "list-group">
        <li class = "list-group-item"> Name : ${currentProfile.name} </li>
        <li class = "list-group-item"> Age : ${currentProfile.age} </li>
        <li class = "list-group-item"> Location : ${currentProfile.location} </li>
        <li class = "list-group-item"> Preferance : ${currentProfile.gender} looking for ${currentProfile.lookingfor} </li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src = "${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// profile Iterators
function profileIterator(profiles) {
  let nextIndex = 0;
  
  return{
    next : function() {
      if(nextIndex < profiles.length){
        return {value: profiles [nextIndex++], done: false}
      } else {
        return {done : true}
      }
    }
  };
}