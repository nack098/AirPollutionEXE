# Import flask and datetime module for showing date and time
from flask import Flask, jsonify, request
import datetime
import random

# Initializing flask app
app = Flask(__name__)

@app.route('/api/predict', methods=['GET','POST'])
def predict_pm25():
    if request.method == 'POST':
        print(request.body)
        number = random.randrange(0, 1000) / 10.0
        return jsonify({"prediction": number})
    elif request.method == 'GET':
        return {
            "image-of-a-pony": 404
        }
    
# Running app
if __name__ == '__main__':
    app.run(debug=True)