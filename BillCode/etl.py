import pandas as pd
from sqlalchemy import create_engine


hair_df = pd.read_csv("hairdata.csv")

print(hair_df)

engine = create_engine("sqlite:///data/hairdata.sqlite")


hair_df.to_sql("hair", con=engine, index=False, if_exists='append')
