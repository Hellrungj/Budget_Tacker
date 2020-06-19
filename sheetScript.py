# Author: John Hellrung
# Purpose: To test and research using google sheets in the project 
# * Tutorial link: https://gspread.readthedocs.io/en/latest/oauth2.html

# TODO: Step 1 - Setup Authentication (OAuth would be a great choice)
# TODO: Step 2 - Enable API Access for a Project
# TODO: Step 3 - Add key to computer

import gspread

gc = gspread.service_account()

sh = gc.open("Example spreadsheet")

print(sh.sheet1.get('A1'))
