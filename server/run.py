from myapp import create_app
import os
# os.environ["MONGODB_URI"] = 'mongodb+srv://ducpn:dZDwXaK1COBWoSnv@cluster0.5rputdg.mongodb.net/d_english'

app = create_app()


if __name__=="__main__":
    app.run(debug=True)