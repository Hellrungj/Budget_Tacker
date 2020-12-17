# Budget_Tracker

## Installation

### Django (Backend Framework)
#### - Before Install
Check and verify the `Python` version. Currently this project is running `Python 3.8`. The version is saved in the `Pipfile` file in the project root directory. 

To check your Python's version run the following command command line terminal of choice: `python --version` (Win or Pipenv) or `python3 --version` (Linux and Mac)

You can install `Python` at [https://www.python.org/downloads/](https://www.python.org/downloads/)

#### - Install Dependencies
1. Install pipenv: `pip install pipenv` (Win) `pip3 install pipenv` (Linux and Mac)
2. Install project dependencies: `pipenv install`

#### - Environment Setup
3. Activate the virtual environment: `pipenv shell` 
<br/> (Note:) Will need to run `pipenv shell` each time you open a new terminal
4. Migrate the data for the database: `python manage.py migrate`

#### - Run the Server
5. Run the development server: `python manage.py runserver`
6. Open a brower at [http://127.0.0.1:8080](http://127.0.0.1:8080)

### React

#### - Before Install
Check and verify the `node` and `npm` version. Currently this project is running `node v12.18` and `npm 6.14`. 

To check your node's and npm's version run the following command command line terminal of choice: `node -v` and `npm -v`

You can install `node` and `npm` go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/) to download both tools

#### - Install Dependencies
1. Install project dependencies: `npm install`

#### - Run the Server
2. Run the development server: `npm start`
3. Open a brower at [http://127.0.0.1:3000](http://127.0.0.1:3000)
