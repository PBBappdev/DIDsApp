const express = require('express');
const { google } = require('googleapis');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com' // Update with your Firestore database URL
});

// Initialize Google Calendar API
const calendar = google.calendar({
  version: 'v3',
  auth: new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    ['https://www.googleapis.com/auth/calendar.readonly']
  )
});

const app = express();

// Define route to sync events
app.get('/sync', async (req, res) => {
  try {
    // Fetch events from Google Calendar
    const events = await fetchEventsFromGoogleCalendar();
    
    // Store events in Firestore
    const eventsRef = admin.firestore().collection('events');
    events.forEach(event => {
      eventsRef.doc(event.id).set(event);
    });

    res.status(200).json({ message: 'Events synced successfully' });
  } catch (error) {
    console.error('Error syncing events:', error);
    res.status(500).json({ error: 'An error occurred while syncing events' });
  }
});

// Function to fetch events from Google Calendar
const fetchEventsFromGoogleCalendar = async () => {
  // Fetch events from Google Calendar
  const response = await calendar.events.list({
    calendarId: 'your-calendar-id', // Use your calendar ID
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  });
  return response.data.items;
};

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
