
# FC Part 1: Backend Task

A Javascript utility that calls the api with user-specified count and format.




## Setup and Run Locally

Clone the project

```bash
  git clone https://github.com/dimacuhamarc/FC---Backend-Task.git
```

Go to the project directory

```bash
  cd FC-Backend-Task
```

Install dependencies

```bash
  npm install
```

## Usage

#### Parameters

- `-n <number>`: Specifies the number of activities to fetch from the API. Replace `<number>` with the desired count (e.g., `2`).

- `-f <format>`: Specifies the format for the output. Replace `<format>` with one of the following options:
  - `json`: Outputs the activities in JSON format.
  - `csv`: Outputs the activities in CSV format.
  - `console`: Prints the activities to the console.


#### Cli Command
```bash
  node activity -n <number> -f <format>
```

#### Notes
Ensure you have the necessary npm packages installed (axios and json2csv). You can install them using:
```bash
  npm install axios json2csv
```

## Examples
Fetch 5 Activites and save the data as a .json file
```bash
  node activity -n 5 -f console
```
Fetch 10 Activites and save the data as a .csv file
```bash
  node activity -n 10 -f csv
```
Fetch 3 Activites and print in console
```bash
  node activity -n 3 -f console
```




