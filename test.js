const http = require('http');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZWY0M2E5YTAxZTc3OGVjNGRlZWFkMSIsImlhdCI6MTc3NzI4OTQyMCwiZXhwIjoxNzc3ODk0MjIwfQ.X7muKBaXR4U8GiIlGELoqPGmPWhdHBOmbNBGmFexNIE';

const data = JSON.stringify({
    title: "My First Post",
    content: "This is my first community post content",
    tags: ["intro", "community"]
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/posts',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'Authorization': `Bearer ${token}`
    }
};

const req = http.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => console.log(body));
});

req.write(data);
req.end();