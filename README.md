# Expo Linking API: Custom URL Scheme Registration Failure

This repository demonstrates a bug related to the Expo `Linking` API's handling of custom URL schemes. The issue arises when the app fails to register its custom scheme correctly, preventing deep links from functioning as intended.

## Bug Description

The app is supposed to open when a specific custom URL scheme is used in a deep link. However, the deep link either doesn't open the app at all or opens another app registered with the same scheme.

## Steps to Reproduce

1. Clone this repository.
2. Install the dependencies using `npm install`.
3. Run the app using `expo start`.
4. Try opening a custom URL scheme link (e.g., `myapp://somedata`).
5. Observe that the app doesn't open or the wrong app opens.

## Solution

The solution involves ensuring the correct registration of the custom URL scheme within the app's configuration and handling any potential conflicts.