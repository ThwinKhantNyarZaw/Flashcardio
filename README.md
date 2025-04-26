# **FlashCardio**

**FlashCardio** is a mobile app designed to help students memorize and review study materials through flashcards. It allows users to create, organize, and study flashcards for different subjects, and provides features like dark mode and offline access.

---

## 📋 **Features**

- **Create, Edit, and Delete Flashcard Sets**  
  Users can easily create new sets of flashcards, add new cards, and edit or delete them.
  
- **Flip Flashcards for Study**  
  Flashcards can be flipped to review the front and back, ideal for memorization.

- **Dark Mode**  
  Toggle dark mode for comfortable reading at night.

- **User Authentication**  
  Users can sign up and log in using Firebase Authentication (email and password).

- **Offline Access**  
  All flashcards are stored locally using `AsyncStorage` and can be accessed without an internet connection.

---

## 💻 **Tech Stack**

- **Frontend:**  
  - React Native (Expo Bare Workflow)
  - React Navigation (for stack and tab navigation)
  - Firebase Authentication (for user sign-up and login)
  - AsyncStorage (for storing flashcards locally)

- **Tools & Dependencies:**  
  - React Native 0.74.4  
  - Expo SDK 52.0.0  
  - Firebase SDK  
  - React Navigation Stack & Bottom Tabs  
  - React Native AsyncStorage  

---

## 🚀 **Installation Guide**

### **Clone the Repository:**

```bash
git clone https://github.com/your-username/flashcardio.git
cd flashcardio
```

### **Install Dependencies:**

For npm:

```bash
npm install
```

Or if you're using yarn:

```bash
yarn install
```

### **Run the App:**

For **Android**:

```bash
npx react-native run-android
```

For **iOS**:

```bash
npx react-native run-ios
```

---

## 📱 **App Setup & Build**

If you want to build an APK for Android:

1. **Generate APK (Release Build)**:

```bash
cd android
./gradlew assembleRelease
```

2. The **APK** will be generated in:

```bash
android/app/build/outputs/apk/release/app-release.apk
```

3. Install the APK on your Android device to start using **FlashCardio**.

---

## 🧑‍💻 **Future Features & Improvements**

- Sync with Google Calendar for scheduled study reminders  
- Flashcard sharing and collaborative learning features  
- Cloud storage and syncing using Firebase Firestore

---

## 💬 **Feedback & Contributions**

Feel free to open issues or pull requests to improve the app! Contributions are welcome.
