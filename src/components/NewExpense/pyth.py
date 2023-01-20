import requests
from bs4 import BeautifulSoup
import pandas as pd

# Make a request to the website
response = requests.get("https://www.nepalstock.com/today-price")

# Parse the HTML content of the page
soup = BeautifulSoup(response.text, "html.parser")

# Find the table containing the data
table = soup.find("table")

# Extract the data from the table
data = []
rows = table.find_all("tr")
for row in rows:
    cols = row.find_all("td")
    cols = [ele.text.strip() for ele in cols]
    data.append([ele for ele in cols if ele]) # Get rid of empty values

# Convert the data into a Pandas DataFrame
df = pd.DataFrame(data, columns=["Company", "Symbol", "Closing Price", "Volume", "Change"])

# Save the data to an Excel file
df.to_excel("stock_prices.xlsx", index=False)