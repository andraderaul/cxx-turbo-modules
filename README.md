# React Native Turbo Native Modules with C++

This is a React Native project, following the guide on [C++ Turbo Native Modules](https://reactnative.dev/docs/the-new-architecture/cxx-cxxturbomodules).

With the new React Native Architecture, we can create Turbo Native modules using C++, providing a way to share the same implementation across supported platforms such as Android, iOS, macOS, or Windows.

## Step by Step Guide

1. **Enable New Architecture**
2. **Turbo Module Folder Setup**
   - In this project, it is located in the `tm` folder.
3. **JavaScript Specification**
4. **Codegen Configuration**
5. **Module Registration**
6. **C++ Native Code**
7. **Adding the C++ Turbo Native Module in `App.ts`**

## Running Codegen

It's crucial to remember that after any changes in the C++ code, you need to run codegen again.

To run codegen on iOS, use the following command:

```sh
RCT_NEW_ARCH_ENABLED=1 bundle exec pod install
```

To run codegen on Android, use the following command:

```sh
yarn android
```
