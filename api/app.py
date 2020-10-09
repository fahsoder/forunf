from flask import Flask
from flask import request
from instagram_web_api import Client, ClientCompatPatch, ClientError, ClientLoginError
from requests import get
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/search-user")

def search_user():
    username = request.args.get('user')
    user_search_url = 'https://www.instagram.com/web/search/topsearch/?query='
    response = get(user_search_url + username).json()

    data = {
        'success': False
    }

    if len(response['users']) > 0:
        for user in response['users']:
            user = user['user']
            if user['username'] == username:
                data = {
                    'success': True,
                    'userName': user['username'],
                    'userId': user['pk'],
                    'profileImage': user['profile_pic_url']
                }
            break

    return data

def user_info2():
        """
        Get user info.

        :param username: User name (not numeric ID)
        :param kwargs:
        :return:
        """
        # For authed and unauthed clients, a "fresh" rhx_gis must be used
        username = request.args.get('user')
        user_search_url = 'https://www.instagram.com/web/search/topsearch/?query='
        response = get(user_search_url + username).json()
        #endpoint = 

        data = {
        'success': False
    }
        try:
            info = response
        except ClientError as ce:
            if ce.code != 403:
                raise ce
            # reinit to get a fresh rhx_gis
            self.init()
            info = response

        if self.auto_patch:
            ClientCompatPatch.user(info['graphql']['user'], drop_incompat_keys=self.drop_incompat_keys)
        return info['graphql']['user']

if __name__ == "__main__":
    app.debug=True
    app.run(port=5000)