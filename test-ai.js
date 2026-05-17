const testAI = async () => {
  const response = await fetch('http://localhost:3000/api/analyze-file', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      filePath: 'test.js',
      fileContent: `const apiKey = 'sk-1234567890abcdef';\nconsole.log(apiKey);`,
      fileType: 'javascript'
    })
  });
  
  const result = await response.json();
  console.log(JSON.stringify(result, null, 2));
};

testAI();

// Made with Bob
