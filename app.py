from flask import Flask, request,render_template

app=Flask(__name__)
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/home')
def home_a():
    return render_template('home.html')
  
@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/category')
def category():
    return render_template('category.html')  

if __name__=='__main__':
    app.run(debug =True)
   
