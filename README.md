# Building a Simple Expo App Using TDD 

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

The goal of this project is to learn and practice **Test-Driven Development (TDD)** while building a simple React Native application using Expo.

Instead of directly building features, the approach followed in this project is:

1. Write a failing test first ❌
2. Implement the minimum code required ✅
3. Refactor safely ♻️

This helps improve:

* code quality
* maintainability
* confidence while refactoring
* scalability of the app

---

## Get Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the app

```bash
npx expo start
```

In the output, you'll find options to open the app in a:

* [development build](https://docs.expo.dev/develop/development-builds/introduction/)
* [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
* [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
* [Expo Go](https://expo.dev/go)

---

## TDD Workflow Used in This Project

For every feature:

```text
Write Test → Test Fails → Implement Feature → Test Passes → Refactor
```

Example features:

* rendering UI components
* API integration
* navigation testing
* loading/error states
* reusable components

---

## Project Structure

You can start developing by editing the files inside the **app** directory.

This project uses [file-based routing](https://docs.expo.dev/router/introduction).

Example structure:

```bash
app/
 ├── index.tsx
 ├── components/
 ├── services/
 ├── hooks/
 ├── __tests__/
```

---

## Reset the Project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

---

## Learn More

To learn more about developing your project with Expo, look at the following resources:

* [Expo documentation](https://docs.expo.dev/)
* [Expo guides](https://docs.expo.dev/guides/)
* [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/)

---

## Community

* [Expo on GitHub](https://github.com/expo/expo)
* [Discord community](https://chat.expo.dev)

---

## Goal of This Project

The main goal is to understand:

* how TDD works in React Native
* how to write maintainable tests
* how to structure scalable apps
* how to build features confidently without breaking existing functionality
