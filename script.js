// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const file = document.getElementById('cvFile').files[0];
    const storageRef = storage.ref('cv/' + file.name);

    storageRef.put(file).then(function(snapshot) {
        document.getElementById('uploadStatus').innerText = 'CV uploaded successfully!';
    }).catch(function(error) {
        document.getElementById('uploadStatus').innerText = 'Upload failed: ' + error.message;
    });
});
