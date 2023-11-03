// Map to store generated short URL mappings 
const urlMap = {};

// Generate short URL 
const generateShortUrl = (longUrl) => {
  // TODO: Implement logic to generate random 6 character short URL
  // Check if short URL already exists, generate again if needed
  
  return shortUrl; 
}

// Resolve short URL 
const resolveShortUrl = (shortUrl) => {
  // TODO: Lookup and return long URL
  
  return longUrl;
}

// Tests 

const longUrl1 = 'https://example.com/very/long/url';
const shortUrl1 = generateShortUrl(longUrl1);

const resolved = resolveShortUrl(shortUrl1);
console.assert(resolved === longUrl1); 

const longUrl2 = 'http://www.example.org/another/long/url';
const shortUrl2 = generateShortUrl(longUrl2); 

console.assert(shortUrl1 !== shortUrl2);