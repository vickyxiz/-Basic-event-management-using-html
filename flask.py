from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

# MySQL Database Connection
def get_db_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='password',
        database='event_db'
    )
    return connection

@app.route('/api/events')
def get_events():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM events")
    events = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(events)

if __name__ == '__main__':
    app.run(debug=True)
