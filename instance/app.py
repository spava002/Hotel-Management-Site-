from flask import Flask, render_template, request, url_for, redirect, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import logging, random, string

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
db = SQLAlchemy(app)

class Person(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    reservationNumber = db.Column(db.String(50), nullable = False)
    startDate = db.Column(db.String(50), nullable = False)
    finalDate = db.Column(db.String(50), nullable = False)
    room = db.Column(db.String(50), nullable = False)
    firstName = db.Column(db.String(50), nullable = False)
    lastName = db.Column(db.String(50), nullable = False)
    phone = db.Column(db.String(50), nullable = False)
    email = db.Column(db.String(50), nullable = False)
    cardNumber = db.Column(db.String(50), nullable = False)
    CVV = db.Column(db.String(50), nullable = False)
    dateCreated = db.Column(db.DateTime, default = datetime.utcnow)

    def __repr__(self):
        return "<Person %r>" % self.id

def createReservationNum():
    letterPortion = ""
    digitPortion = ""
    for i in range(0, 3):
        letterPortion += random.choice(string.ascii_letters).upper()
        digitPortion += str(random.randint(1, 9))

    return letterPortion + digitPortion

#Start and its related functions
@app.route('/')
def renderHome():
    return render_template('start.html')

#New reservation and its related functions
@app.route('/new-reservation')
def renderNewReservation():
    all_data = Person.query.all()
    return render_template('newReservation.html', data=all_data)

#Takes in input from newReservation.html to create a reservation
@app.route('/submit', methods=['POST', 'GET'])
def submit():
    if request.method == 'POST':
        reservationNumber = createReservationNum()
        startDate = request.form["StartDate"]
        finalDate = request.form["FinalDate"]
        room = request.form["ChosenRoomNumber"]
        firstName = request.form["FirstName"]
        lastName = request.form["LastName"]
        phone = request.form["Phone"]
        email = request.form["Email"]
        cardNumber = request.form["CardNumber"]
        CVV = request.form["CVV"]

        data = Person(reservationNumber = reservationNumber, startDate=startDate, finalDate=finalDate, room = room, firstName=firstName, lastName=lastName, phone=phone, email=email, cardNumber=cardNumber, CVV=CVV)

        try:
            db.session.add(data)
            db.session.commit()
            logging.info(f"Data added successfully: {data}")
        except Exception as e:
            logging.error(f"There was an error in adding the data: {e}")
            return "There was an error in adding the data."
        
        all_data = Person.query.all()
        return render_template('reservationFinal.html', data=all_data, reservationNum = data.reservationNumber)
        
    else:
        return render_template('reservationFinal.html', reservationNum = data.reservationNumber)
    
@app.route('/database')
def database():
    all_data = Person.query.all()
    return render_template('database.html', data = all_data)

@app.route('/delete-person/<int:id>')
def delete_person(id):
    person = Person.query.get_or_404(id)

    try:
        db.session.delete(person)
        db.session.commit()
        return redirect(url_for('database'))
    except:
        return "There was an error deleting that!"
    
#Check-out and its related functions
@app.route('/check-out')
def renderCheckOut():
    return render_template('checkOut.html')

@app.route('/withdraw', methods=['POST', 'GET'])
def withdraw():
    all_data = Person.query.all()
    reservationNum = request.form["ReservationNumber"]
    for person in all_data:
        if person.reservationNumber == reservationNum:
            try:
                db.session.delete(person)
                db.session.commit()
                return render_template('checkOutSuccess.html')
            except:
                return "There was an error deleting that!"
    return render_template('checkOutFail.html')

#Need help and its related functions
@app.route('/need-help')
def renderNeedHelp():
    return render_template('needHelp.html')

#Services and its related functions
@app.route('/services')
def renderServices():
    return render_template('services.html')

if __name__ == "__main__":
    app.run(debug = True)