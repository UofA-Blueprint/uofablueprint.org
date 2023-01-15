from fastapi import FastAPI
import uvicorn
import json

def readJSON(filename):
    '''Return a dictionary read in from a json file'''
    with open(filename) as fileHandle:
        data = json.load(fileHandle)
    return data

app = FastAPI()

membersData = readJSON("data/members.json")

@app.get("/members/all")
async def allMembers():
    '''serve all member data'''
    return membersData

if __name__ == "__main__":
    '''Uvicorn is the ASGI used to run the server'''
    uvicorn.run(app,
                host="127.0.0.1",
                port=8000,
                log_level="debug")
