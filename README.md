# TypeScript Utility Functions

This project contains a set of utility functions implemented in TypeScript along with corresponding unit tests. The primary functions are:

1. `getPermutations`: Generate all unique permutations of a given string.
2. `findOdd`: Find the integer that appears an odd number of times in an array.
3. `countSmileys`: Count the number of valid smiley faces in an array of strings.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
  - [getPermutations](#getpermutations)
  - [findOdd](#findodd)
  - [countSmileys](#countsmileys)
- [Running Tests](#running-tests)
- [License](#license)
- [Lasted Structure Project](#lasted-structure-project)

## Installation

To use or develop this project, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/WarathatPan/neversitup-test-backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd neversitup-test-backend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

### Build the project

To compile the TypeScript files to JavaScript, run:
```bash
npm run build
```

### Start the project

To run the compiled project:
```bash
npm start
```

## Functions

### `getPermutations`

```typescript
export function getPermutations(text: string): string[]
```

- **Description**: Generate all unique permutations of a given string.
- **Parameters**: 
  - `text`: The input string to generate permutations for.
- **Returns**: An array of strings containing all unique permutations.

#### Example

```typescript
import { getPermutations } from './utils/getPermutations';

console.log(getPermutations('abc')); // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
```

### `findOdd`

```typescript
export function findOdd(arr: number[]): number
```

- **Description**: Find the integer that appears an odd number of times in an array.
- **Parameters**: 
  - `arr`: An array of integers.
- **Returns**: The integer that occurs an odd number of times.

#### Example

```typescript
import { findOdd } from './utils/findOdd';

console.log(findOdd([1, 1, 2])); // Output: 2
```

### `countSmileys`

```typescript
export function countSmileys(arr: string[]): number
```

- **Description**: Count the number of valid smiley faces in an array of strings.
- **Parameters**: 
  - `arr`: An array of strings containing potential smiley faces.
- **Returns**: The number of valid smiley faces.

#### Example

```typescript
import { countSmileys } from './utils/countSmileys';

console.log(countSmileys([':)', ';(', ';}', ':-D'])); // Output: 2
```

## Running Tests

To run the unit tests for the functions, use:

```bash
npm test
```

This will run all tests located in the `test/` directory using Jest.

### Example Test Cases

- **getPermutations**:
  - `getPermutations('abc')` should return `['abc', 'acb', 'bac', 'bca', 'cab', 'cba']`
  
- **findOdd**:
  - `findOdd([1, 1, 2])` should return `2`
  
- **countSmileys**:
  - `countSmileys([':)', ';(', ';}', ':-D'])` should return `2`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

# Lasted Structure Project
## Project Structure

The project is organized as follows:

```
├── src/
│   ├── common/
│   │   ├── constants/
│   │   │   └── ...
│   │   ├── decorators/
│   │   │   └── ...
│   │   ├── filters/
│   │   │   └── ...
│   │   ├── guards/
│   │   │   └── ...
│   │   ├── interceptors/
│   │   │   └── ...
│   │   ├── interfaces/
│   │   │   └── ...
│   │   ├── middleware/
│   │   │   └── ...
│   │   └── pipes/
│   │   │   └── ...
│   │   └── providers/
│   │   │   └── ...
│   │   └── utils/
│   │   │   └── ...
│   ├── routes/
│   │   ├── app/
│   │   │   └── ...
│   │   ├── v1/
│   │   │   └── module1/
│   │   │   │   └── ...
│   │   │   └── module2/
│   │   │       └── ...
│   └── main.ts
├── docker-compose.yml
├── index.js
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```
