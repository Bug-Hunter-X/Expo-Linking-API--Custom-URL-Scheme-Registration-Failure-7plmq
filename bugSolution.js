The primary cause of this issue is often incorrect configuration of the custom URL scheme. Double-check that the scheme is correctly declared in your app's `app.json` or `expo.json` and that there are no conflicts with other apps on the device using the same scheme.

**Solution using `Linking.addEventListener`**

```javascript
import * as Linking from 'expo-linking';

Linking.addEventListener('url', (event) => {
  if (event.url) {
    // Handle the deep link event here
    console.log('Deep link event:', event.url);
  }
});

Linking.makeUrl('myapp://somedata')
.then(url => {
  console.log(url);
  // Open url in default browser
  Linking.openURL(url)
})
.catch(err => console.error('Error:', err));
```

**App Configuration (`app.json`):**

Ensure the correct scheme is registered. 
```json
{
  "expo": {
    "scheme": "myapp"
  }
}
```

**Additional considerations:**

* **Android Manifest:**  On Android, explicitly declare the intent filter for the custom URL scheme in your `AndroidManifest.xml` if using a custom scheme.
* **iOS Associated Domains:** On iOS, you'll need to configure Associated Domains in your Xcode project to handle custom URL schemes.
* **Conflicting Apps:** Uninstall any other apps that might be registered for the same custom URL scheme.