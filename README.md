Documentation for `nx-injection-token-example`

## Overview

`nx-injection-token-example` is a sample project that demonstrates how to use dependency injection with custom injection tokens in an Nx monorepo. The project showcases a simple Angular application that utilizes injection tokens for providing dependencies.

## Prerequisites

Before using `nx-injection-token-example`, ensure that the following prerequisites are met:

- Node.js and npm are installed on your machine. You can download them from [here](https://nodejs.org).
- Angular CLI is installed globally. You can install it by running the command: `npm install -g @angular/cli`.

## Installation

To install `nx-injection-token-example`, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/moohkooh/nx-injection-token-example.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nx-injection-token-example
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the example application, use the following command:

```bash
ng serve example-app
```

This will start the development server, and you can access the application by navigating to `http://localhost:4200` in your web browser.

## Project Structure

The `nx-injection-token-example` project has the following structure:

```
nx-injection-token-example/
  ├── apps/
  │   └── example-app/
  │       ├── src/
  │       │   ├── app/
  │       │   │   ├── components/
  │       │   │   │   ├── home/
  │       │   │   │   │   ├── home.component.html
  │       │   │   │   │   ├── home.component.scss
  │       │   │   │   │   └── home.component.ts
  │       │   │   │   └── ...
  │       │   │   ├── services/
  │       │   │   │   ├── greeting/
  │       │   │   │   │   ├── greeting.service.ts
  │       │   │   │   │   └── greeting.service.spec.ts
  │       │   │   │   └── ...
  │       │   │   ├── app.component.html
  │       │   │   ├── app.component.scss
  │       │   │   └── app.component.ts
  │       │   ├── ...
  │       │   └── main.ts
  │       └── ...
  ├── libs/
  │   ├── tokens/
  │   │   └── src/
  │   │       ├── lib/
  │   │       │   ├── greeting-token.ts
  │   │       │   └── ...
  │   │       └── index.ts
  │   └── ...
  ├── ...
  ├── ...
  └── ...
```

The project consists of an `example-app` located in the `apps` directory, and a `tokens` library located in the `libs` directory. The `example-app` contains an Angular application that consumes services provided by the `tokens` library.

## Custom Injection Tokens

The `tokens` library defines custom injection tokens used for providing services. The injection tokens are located in the `libs/tokens/src/lib` directory. In this example, there is a `greeting-token.ts` file that exports an injection token called `GREETING_SERVICE`. This token is used to provide the `GreetingService` in the `example-app`.

## Example Application

The `example-app` located in the `apps` directory is

an Angular application that consumes the services provided by the `tokens` library. The main components and services of the example application are located in the `src/app` directory.

The `HomeComponent` located in the `src/app/components/home` directory demonstrates the usage of custom injection tokens. It injects the `GreetingService` using the `GREETING_SERVICE` token and displays a greeting message.

The `GreetingService` located in the `src/app/services/greeting` directory is a simple service that provides the greeting message.

## Flow-Feature Module factory

In the nx-injection-token-example library, the BRIDGE token serves as a means of communication between the library and the consuming application. If the application wishes to provide an alternative implementation of a service within the library, it can use the BRIDGE_APP injection token to define the service.

### `flow-feature.module`

To accomplish this, a factory function is used. The factory function checks if there is a custom implementation provided for the BRIDGE_APP token. If a custom implementation is available, it is used. Otherwise, the default implementation specified for the BRIDGE token, which is used throughout the library, is utilized.

By utilizing the BRIDGE and BRIDGE_APP injection tokens in this manner, the library allows flexibility for the application to provide its own services while also providing a fallback mechanism to ensure consistent functionality when a custom implementation is not available.

## Conclusion

`nx-injection-token-example` provides a minimal example of how to use custom injection tokens for dependency injection in an Nx monorepo. You can explore the code and modify it to fit your needs, learning how to leverage injection tokens to decouple components and services in your Angular applications.
