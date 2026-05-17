const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: '.env.local' });

async function listModels() {
  // NEVER hardcode API keys - use environment variables
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error('❌ Error: GEMINI_API_KEY not set in .env.local');
    console.log('💡 Add GEMINI_API_KEY=your_key to .env.local file');
    process.exit(1);
  }
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  try {
    console.log('Fetching available models...\n');
    
    // Try to list models
    const models = await genAI.listModels();
    
    console.log('Available models:');
    for await (const model of models) {
      console.log(`- ${model.name}`);
      console.log(`  Display Name: ${model.displayName}`);
      console.log(`  Supported Methods: ${model.supportedGenerationMethods?.join(', ')}`);
      console.log('');
    }
  } catch (error) {
    console.error('Error listing models:', error.message);
    
    // Try common model names
    console.log('\nTrying common model names...\n');
    const testModels = [
      'gemini-2.5-flash',
      'gemini-1.5-pro-latest',
      'gemini-1.5-flash-latest',
      'gemini-pro',
      'gemini-1.5-pro',
      'gemini-1.5-flash',
      'gemini-1.0-pro'
    ];
    
    for (const modelName of testModels) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent('test');
        console.log(`✅ ${modelName} - WORKS`);
      } catch (err) {
        console.log(`❌ ${modelName} - ${err.message.split('\n')[0]}`);
      }
    }
  }
}

listModels();

// Made with Bob
