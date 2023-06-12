const shortenBtn = document.getElementById('shortenBtn');
const shortenedUrlInput = document.getElementById('shortenedUrl');
const copyBtn = document.getElementById('copyBtn');

shortenBtn.addEventListener('click', shortenUrl);
copyBtn.addEventListener('click', copyUrl);

// function shortenUrl() {
//   const originalUrlInput = document.getElementById('originalUrl');
//   const originalUrl = originalUrlInput.value;

//   // Add your URL shortening logic here

//   // Assuming you get the shortened URL
//   const shortenedUrl = 'https://your-shortened-url.com';

//   shortenedUrlInput.value = shortenedUrl;
// }
function shortenUrl() {
    const originalUrlInput = document.getElementById('originalUrl');
    const originalUrl = originalUrlInput.value;
  
    // Make an API request to your backend for URL shortening
    fetch('https://immediate-fish-atom.glitch.me/url/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ longUrl: originalUrl }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          const shortenedUrl = data.data.shortUrl;
          shortenedUrlInput.value = shortenedUrl;
          console.log(shortenedUrl)
        } else {
          console.error(data.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  

function copyUrl() {
  shortenedUrlInput.select();
  document.execCommand('copy');
  copyBtn.innerText = 'Copied!';
}
