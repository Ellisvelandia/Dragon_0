// var bMusic = new Audio('buu.mp3')
// 	bMusic.play()

function changeImage() {
  let displayImage = document.getElementById('goku')
  if (displayImage.src.match('media/goku.png')) {
    displayImage.src = 'media/goku2.png';
  } else {
    displayImage.src = 'media/goku.png';
  }
}

function changeImage2() {
  let displayImage2 = document.getElementById('kid')
  if (displayImage2.src.match('media/kidbuu.png')) {
    displayImage2.src = 'media/kidbuu2.png';
  } else {
    displayImage2.src = 'media/kidbuu.png';
  }
}