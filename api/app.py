from flask import Flask
from flask import request
from instagram_web_api import Client, ClientCompatPatch, ClientError, ClientLoginError
from requests import get

app = Flask(__name__)

@app.route("/search-user")
def index():
    user = request.args.get('user')
    user_search_url = 'https://www.instagram.com/web/search/topsearch/?query='
    response = get(user_search_url + user).json()
    
    data = {
        'userName': response['users'][0]['user']['username'],
        'userId': response['users'][0]['user']['pk'],
        'profileImage': response['users'][0]['user']['profile_pic_url']
    }

    return data


if __name__ == "__main__":
    app.debug=True
    app.run(port=5000)