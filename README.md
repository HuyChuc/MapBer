# MapBer
Clone project
- git clone [URL]
- git flow init

init install and run
yarn install && ( cd ios && pod install )
# Start in the iOS Simulator
npx react-native run-ios --simulator="iPhone 11"
# Start in the Android Simulator
#  - Note: open Android Studio > Tools > AVD > Run a device
npx react-native run-android


File structure

/android - contains native code specific to the Android OS
/documentation - as the name suggests - any docs
/fastlane - configuration for auto-deploying the app to the app stores via Fastlane
/ios - native code specific to iOS
/native-base-theme - the app uses Native Base for base elements. You can edit the styles in here
/src - contains our JS and CSS code. index.js is the entry-point for our file, and is mandatory.
/components - 'Dumb-components' / presentational. Read More →
/constants - App-wide variables
/containers - 'Smart-components' that connect business logic to presentation Read More →
/images - hmm...what could this be?
/lib - Utils and custom libraries
/models - Rematch models combining actions, reducers and state. Read More →
/routes- wire up the router with any & all screens Read More →
/store- Redux Store - hooks up the stores and provides initial/template states Read More →
/tests - contains all of our tests, where the test file matches the resptive file from /src
index.js - The starting place for our app
