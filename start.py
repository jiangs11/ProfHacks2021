"""
Start point of the web server
"""
# Module imports
from app import app

'''
Main - Starts service
'''
if __name__ == '__main__':
    # Runs as dev server, should be on localhost 5000
    app.run(port=5000)
