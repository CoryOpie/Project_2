import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///data/SQLProject2.db")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
WHR = Base.classes.WHR2021

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################


#---------------------------------
# Web Pages
#---------------------------------
@app.route("/")
def home():

  return render_template("index.html")

@app.route("/data")
def data_page():

  return render_template("data.html")


#---------------------------------
# API
#---------------------------------
@app.route("/api/v1.0/WHR2021")
def WHR2021():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of hairdata"""
    # Query all passengers
    results = session.query(WHR.Ladder_score, WHR.Generosity, WHR.Explained_by_Log_GDP_per_capita).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    WHR_all = []
    for Ladder_score, Generosity, Explained_by_Log_GDP_per_capita in results:
        WHR_dict = {}
        WHR_dict["Ladder_score"] = Ladder_score
        WHR_dict["Generosity"] = Generosity
        WHR_dict["Explained_by_Log_GDP_per_capita"] = Explained_by_Log_GDP_per_capita
        WHR_all.append(WHR_dict)

    return jsonify(WHR_all)


if __name__ == '__main__':
    app.run(debug=True)
