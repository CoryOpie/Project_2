import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///data/hairdata.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Hair = Base.classes.hair

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
@app.route("/api/v1.0/hairdata")
def hair_data():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of hairdata"""
    # Query all passengers
    results = session.query(Hair.rockband, Hair.hair_length, Hair.num_hits, Hair.num_albums).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_hair = []
    for rockband, hair_length, num_hits, num_albums in results:
        hair_dict = {}
        hair_dict["rockband"] = rockband
        hair_dict["hair_length"] = hair_length
        hair_dict["num_hits"] = num_hits
        hair_dict["num_albums"] = num_albums
        all_hair.append(hair_dict)

    return jsonify(all_hair)


if __name__ == '__main__':
    app.run(debug=True)
