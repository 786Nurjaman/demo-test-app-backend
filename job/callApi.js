const cron = require('node-cron');
const axios = require('axios');

// Define your API endpoint
const apiEndpoint = 'https://demo-backend-ovm0.onrender.com/test';

// Define the cron schedule (every 3 minutes)
// const cronSchedule = '*/3 * * * *';
const cronSchedule = '* * * * *';
// Function to make the API call
const makeAPICall = async () => {
  try {
    const response = await axios.get(apiEndpoint);
    console.log('API call successful:', response.data);
  } catch (error) {
    console.error('Error making API call:', error.message);
  }
};

// Schedule the cron job
const nodeJob = cron.schedule(cronSchedule, () => {
  console.log('Running cron job to call API...');
  makeAPICall();
});

module.exports={
    nodeJob
}